const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'Contents_from_Legacy.txt');
const outputDir = path.join(__dirname, 'src', 'content', 'articles');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(inputFile)) {
    console.error('❌ Error: Contents_from_Legacy.txt was not found in the root directory.');
    process.exit(1);
}

const rawText = fs.readFileSync(inputFile, 'utf8');
const blocks = rawText.split(/(?:^|\n)(?=\d+\.\s)/g).filter(b => b.trim());

blocks.forEach(block => {
    const lines = block.trim().split('\n');
    const firstLine = lines.shift().trim();

    let title = "Untitled";
    while (lines.length > 0 && !lines[0].trim()) lines.shift();
    if (lines.length > 0) {
        title = lines.shift().trim();
    }

    const match = firstLine.match(/^\d+\.\s*(.+)/);
    if (!match) return;
    const rawUrlOrSlug = match[1].trim();

    let slug = '';
    let legacyAlias = '';

    if (rawUrlOrSlug.startsWith('http')) {
        try {
            const url = new URL(rawUrlOrSlug);
            const pathParts = url.pathname.split('/').filter(Boolean);
            slug = pathParts[pathParts.length - 1];
            legacyAlias = url.pathname;
        } catch (e) {
            slug = `unknown-${Date.now()}`;
        }
    } else {
        slug = rawUrlOrSlug;
        legacyAlias = `/${slug}`;
    }

    if (!isNaN(slug) && title !== "Untitled") {
        slug = title;
    }

    slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    if (!slug) return;

    const lang = /[\u0900-\u097F]/.test(block) ? 'np' : 'en';

    let author = "Archana Bibhor";
    if (block.includes("Shishir Subba")) author = "Prof. Dr. Shishir Subba";
    else if (block.includes("Shanta Niraula")) author = "Prof. Dr. Shanta Niraula";
    else if (block.includes("Sameila Shrestha")) author = "Sameila Shrestha";
    else if (block.includes("Lucy Beresford")) author = "Lucy Beresford";
    else if (block.includes("Martin Winkler")) author = "Martin Winkler";

    let content = lines.join('\n');
    content = content.replace(/(Segment[^\n]*\n*Post date[\s\S]*)$/i, '').trim();

    if (!content && title === "Untitled") return;

    const markdown = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${slug}"
lang: "${lang}"
author: "${author}"
legacyAlias: "${legacyAlias}"
status: "pending-clinical-review"
---

${content}
`;

    const filePath = path.join(outputDir, `${slug}.md`);
    fs.writeFileSync(filePath, markdown);
    console.log(`Successfully generated: ${slug}.md`);
});

console.log('\n✅ Batch migration complete! All legacy articles are now saved in src/content/articles/.');

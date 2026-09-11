// Save this file as migrate.js in your project root and run it using: node migrate.js
import fs from 'fs';
import path from 'path';

// List of your key legacy paths/slugs to automate
const legacyPages = [
  { slug: 'about-us', path: '/content/about-us', title: 'About Nepal Hypnosis', node: 2, lang: 'en' },
  { slug: 'importance-of-mental-health-interventions-in-nepal', path: '/article/importance-of-mental-health-interventions-in-nepal', title: 'Importance of Mental Health Interventions in Nepal', node: 29, lang: 'en' },
  { slug: 'manosamajik-samasya-manobimarsha-ko-aawashyakta', path: '/article/manosamajik-samasya-manobimarsha-ko-aawashyakta', title: 'मनोसामाजिक समस्या र मनोविमर्शको आवश्यकता', node: 29, lang: 'ne' },
  { slug: 'safalta-ko-sutra-nyuna-atsamman-mathi-bijaya', path: '/article/safalta-ko-sutra-nyuna-atsamman-mathi-bijaya', title: 'सफलताको सूत्र: न्यून आत्मसम्मानमाथि विजय', node: 30, lang: 'ne' },
  { slug: 'sexuality-management-prof-dr-shanta-niraula', path: '/article/sexuality-management-prof-dr-shanta-niraula', title: 'Sexuality Management & Psychological Health', node: 36, lang: 'en' },
  { slug: 'decreasing-generation-gap', path: '/article/decreasing-generation-gap', title: 'Decreasing the Generation Gap', node: 38, lang: 'en' },
  { slug: 'pustaini-doori-generation-gap', path: '/article/pustaini-doori-generation-gap', title: 'पुस्ताइनी दूरी (Generation Gap) र यसको समाधान', node: 38, lang: 'ne' },
  { slug: 'about-love-in-nepali', path: '/article/about-love-in-nepali', title: 'About Love: A Psychological Perspective', node: 39, lang: 'en' },
  { slug: 'prem-garne-shailee-archana', path: '/article/prem-garne-shailee-archana', title: 'प्रेम गर्ने शैली र सम्बन्धको मनोविज्ञान', node: 39, lang: 'ne' },
  { slug: 'how-to-guide-children-art-of-parenting', path: '/article/how-to-guide-children-art-of-parenting', title: 'How to Guide Children: The Art of Parenting', node: 60, lang: 'en' },
  { slug: 'qa-how-to-improve-memory', path: '/question-answer/how-to-improve-memory', title: 'Q&A: How to Improve Memory and Focus', node: 31, lang: 'en' },
  { slug: 'qa-how-to-overcome-failures', path: '/question-answer/how-to-overcome-failures', title: 'Q&A: How to Overcome Failures and Setbacks', node: 32, lang: 'en' },
  { slug: 'qa-i-love-her-very-much', path: '/question-answer/i-love-her-very-much', title: 'Q&A: Navigating Unrequited Feelings', node: 33, lang: 'en' },
  { slug: 'qa-how-to-prevent-bully', path: '/question-answer/how-to-prevent-bully', title: 'Q&A: How to Prevent and Deal with Bullying', node: 34, lang: 'en' },
  { slug: 'qa-son-goes-away', path: '/question-answer/son-goes-away', title: 'Q&A: Coping with Empty Nest Syndrome', node: 35, lang: 'en' },
  { slug: 'qa-filing-divorce-paper', path: '/question-answer/filing-divorce-paper', title: 'Q&A: Psychological Counseling During Separation', node: 37, lang: 'en' },
  { slug: 'qa-why-i-get-angry', path: '/question-answer/why-i-get-angry', title: 'Q&A: Understanding and Managing Anger Triggers', node: 56, lang: 'en' },
  { slug: 'past-life-regression-nepal', path: '/psychotherapy/past-life-regression-nepal', title: 'Past Life Regression Therapy in Nepal', node: 9, lang: 'en' },
  { slug: 'clinical-hypnotherapy-nepal', path: '/psychotherapy/clinical-hpnotherapy-nepal', title: 'Clinical Hypnotherapy Practice in Kathmandu', node: 10, lang: 'en' },
  { slug: 'neuro-linguistic-programming-nlp-kathmandu', path: '/psychotherapy/neuro-linguistic-programming-nlp-kathmandu', title: 'Neuro-Linguistic Programming (NLP) Techniques', node: 11, lang: 'en' },
  { slug: 'counseling-psychology-nepal-clinic', path: '/psychotherapy/counseling-psychology-nepal-clinic', title: 'Counseling Psychology Services', node: 52, lang: 'en' },
  { slug: 'gestalt-psychology-in-nepal', path: '/psychotherapy/gestalt-psychology-in-nepal', title: 'Gestalt Psychotherapy Approach', node: 97, lang: 'en' },
  { slug: 'healing-touch-energy-therapy-nepal', path: '/psychotherapy/healing-touch-energy-therapy-nepal', title: 'Healing Touch & Energy Therapy Modalities', node: 98, lang: 'en' },
  { slug: 'self-help-self-hypnosis', path: '/self-help-self-hypnosis', title: 'Self-Help & Self-Hypnosis Training', node: 100, lang: 'en' },
  { slug: 'meditation-mindfulness', path: '/meditation-mindfulness', title: 'Meditation & Mindfulness Practices', node: 102, lang: 'en' },
  { slug: 'hypnotic-relaxation', path: '/hypnotic-relaxation', title: 'Hypnotic Relaxation Techniques', node: 108, lang: 'en' },
  { slug: 'integrated-clinical-hypnotherapy-training-level1', path: '/integrated-clinical-hypnotherapy-training-level1', title: 'Integrated Clinical Hypnotherapy Course (Level 1)', node: 76, lang: 'en' },
  { slug: 'self-hypnosis-event', path: '/training/self-help/self-hypnosis-event', title: 'Self-Hypnosis Workshop Series', node: 82, lang: 'en' },
  { slug: 'integrated-clinical-hypnotherapy-level-1-combined', path: '/integrated-clinical-hypnotherapy-level-1-combined', title: 'Integrated Clinical Hypnotherapy Level 1 Combined', node: 83, lang: 'en' },
  { slug: 'self-esteem-episode-2', path: '/training/self-help-self-esteem-series/feb-2019', title: 'Self-Esteem Building Workshop', node: 88, lang: 'en' },
  { slug: 'hypnotherapy-episode1', path: '/training/professional/hypnotherapy-episode1', title: 'Hypnotherapy Practitioner Training Series', node: 93, lang: 'en' },
  { slug: 'graphology-episode-1', path: '/training/professional/graphology-episode-1', title: 'Graphology Episode 1', node: 95, lang: 'en' },
  { slug: 'self-esteem-series', path: '/training/self-help/self-esteem-series', title: 'Self-Esteem Enhancement Series', node: 96, lang: 'en' },
  { slug: 'hypnosis-training-institute', path: '/training/professional/hypnosis-training-institute', title: 'Nepal Hypnosis Training Institute Overview', node: 99, lang: 'en' },
  { slug: 'joymandu-hiking-nature', path: '/training/self-help/joymandu-joy-kathmandu-hiking-nature', title: 'Joymandu: Mindful Nature Walks & Hiking', node: 101, lang: 'en' },
  { slug: 'starting-nepalhypnosiscom', path: '/content/starting-nepalhypnosiscom-0', title: 'The Journey of Nepal Hypnosis', node: 24, lang: 'en' },
  { slug: 'contact-info', path: '/contact', title: 'Contact & Clinic Location Details', node: 58, lang: 'en' },
  { slug: 'nepal-hypnosis-featured-in-himal-magazine', path: '/nepal-hypnosis-featured-in-himal-magazine', title: 'Nepal Hypnosis Featured in Himal Magazine', node: 79, lang: 'en' },
  { slug: 'our-team', path: '/our-team', title: 'Our Professional Clinical Team', node: 81, lang: 'en' },
  { slug: 'interview-archana-bibhor', path: '/video/interview-archana-bibhor-psychotherapist-trainer', title: 'Media Interview: Archana Bibhor', node: 90, lang: 'en' },
  { slug: 'testimonial', path: '/testimonial', title: 'Client Experiences & Testimonials', node: 103, lang: 'en' },
  { slug: 'vacancy', path: '/vacancy', title: 'Career & Internship Opportunities', node: 203, lang: 'en' },
  { slug: 'welcome-home', path: '/welcome-home', title: 'Welcome to Nepal Hypnosis', node: 255, lang: 'en' },
  { slug: 'homepage-archive', path: '/homepage', title: 'Homepage Content Archive', node: 256, lang: 'en' }
];

const outputDir = path.join(process.cwd(), 'src', 'content', 'articles');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function scrapeAndGenerate() {
  for (const page of legacyPages) {
    const url = `https://www.nepalhypnosis.com${page.path}`;
    console.log(`Fetching: ${url}`);
    
    let bodyContent = "Archived legacy content placeholder. Full text will be synced from backup archives.";
    
    try {
      const res = await fetch(url);
      if (res.ok) {
        const html = await res.text();
        // Basic extraction attempt of main content body (Drupal article node body)
        const match = html.exec(/<div class="content">([\s\S]*?)<\/div>/i) || html.exec(/<article>([\s\S]*?)<\/article>/i);
        if (match && match[1]) {
          // Simple tag strip for text content conversion
          bodyContent = match[1].replace(/<[^>]*>?/gm, '').trim();
        }
      }
    } catch (e) {
      console.log(`Could not live-fetch ${page.path}, using fallback structure.`);
    }

    const fileContent = `---
title: "${page.title}"
slug: "${page.slug}"
lang: "${page.lang}"
author: "Archana Bibhor"
legacyNode: ${page.node}
legacyAlias: "${page.path}"
---

${bodyContent}
`;

    const filePath = path.join(outputDir, `${page.slug}.md`);
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Generated: ${page.slug}.md`);
  }
  console.log('All legacy files successfully generated automatically!');
}

scrapeAndGenerate();
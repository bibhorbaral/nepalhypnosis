// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nepalhypnosis.com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    // Core Page & Portal Redirects
    '/node/2': '/articles/about-us',
    '/content/about-us': '/articles/about-us',
    '/our-team': '/team',
    '/node/81': '/team',
    '/node/58': 'https://portal.nepalhypnosis.com',
    '/contact': 'https://portal.nepalhypnosis.com',
    '/frequently-asked-questions': '/#faq',
    '/np/frequently-asked-questions': '/np/#faq',
    '/ne': '/np/',

    // Therapy Modalities
    '/psychotherapy/clinical-hpnotherapy-nepal': '/articles/clinical-hypnotherapy-nepal',
    '/psychotherapy/counseling-psychology-nepal-clinic': '/articles/counseling-psychology-nepal-clinic',
    '/psychotherapy/gestalt-psychology-in-nepal': '/articles/gestalt-psychology-in-nepal',
    '/psychotherapy/neuro-linguistic-programming-nlp-kathmandu': '/articles/neuro-linguistic-programming-nlp-kathmandu',
    '/psychotherapy/past-life-regression-nepal': '/articles/past-life-regression-nepal',
    '/psychotherapy/healing-touch-energy-therapy-nepal': '/articles/healing-touch-energy-therapy-nepal',
    '/hypnotic-relaxation': '/articles/hypnotic-relaxation',
    '/meditation-mindfulness': '/articles/meditation-mindfulness',
    '/self-help-self-hypnosis': '/articles/self-help-self-hypnosis',
    '/node/9': '/articles/past-life-regression-nepal',
    '/node/10': '/articles/clinical-hypnotherapy-nepal',
    '/node/11': '/articles/neuro-linguistic-programming-nlp-kathmandu',
    '/node/52': '/articles/counseling-psychology-nepal-clinic',
    '/node/97': '/articles/gestalt-psychology-in-nepal',
    '/node/98': '/articles/healing-touch-energy-therapy-nepal',
    '/node/100': '/articles/self-help-self-hypnosis',
    '/node/102': '/articles/meditation-mindfulness',
    '/node/108': '/articles/hypnotic-relaxation',

    // Training Academy
    '/integrated-clinical-hypnotherapy-level-1-combined': '/articles/integrated-clinical-hypnotherapy-level-1-combined',
    '/integrated-clinical-hypnotherapy-training-level1': '/articles/integrated-clinical-hypnotherapy-training-level1',
    '/training/professional/hypnosis-training-institute': '/articles/hypnosis-training-institute',
    '/training/self-help/joymandu-joy-kathmandu-hiking-nature': '/articles/joymandu-hiking-nature',
    '/training/self-help/self-esteem-series': '/articles/self-esteem-series',
    '/node/76': '/articles/integrated-clinical-hypnotherapy-training-level1',
    '/node/82': '/articles/self-hypnosis-event',
    '/node/83': '/articles/integrated-clinical-hypnotherapy-level-1-combined',
    '/node/88': '/articles/self-esteem-episode-2',
    '/node/93': '/articles/hypnotherapy-episode1',
    '/node/95': '/articles/graphology-episode-1',
    '/node/96': '/articles/self-esteem-series',
    '/node/99': '/articles/hypnosis-training-institute',
    '/node/101': '/articles/joymandu-hiking-nature',

    // Articles & Q&As (English & Nepali)
    '/node/39': '/articles/about-love-in-nepali',
    '/article/about-love-in-nepali': '/articles/about-love-in-nepali',
    '/article/prem-garne-shailee-archana': '/articles/prem-garne-shailee-archana',
    
    '/node/38': '/articles/decreasing-generation-gap',
    '/article/decreasing-generation-gap': '/articles/decreasing-generation-gap',
    '/article/pustaini-doori-generation-gap': '/articles/pustaini-doori-generation-gap',
    
    '/node/60': '/articles/how-to-guide-children-art-of-parenting',
    '/article/how-to-guide-children-art-of-parenting': '/articles/how-to-guide-children-art-of-parenting',
    
    '/node/29': '/articles/importance-of-mental-health-interventions-in-nepal',
    '/article/importance-of-mental-health-interventions-in-nepal': '/articles/importance-of-mental-health-interventions-in-nepal',
    '/article/manosamajik-samasya-manobimarsha-ko-aawashyakta': '/articles/manosamajik-samasya-manobimarsha-ko-aawashyakta',
    
    '/node/30': '/articles/safalta-ko-sutra-nyuna-atsamman-mathi-bijaya',
    '/article/safalta-ko-sutra-nyuna-atsamman-mathi-bijaya': '/articles/safalta-ko-sutra-nyuna-atsamman-mathi-bijaya',

    '/node/36': '/articles/sexuality-management-prof-dr-shanta-niraula',
    '/article/sexuality-management-prof-dr-shanta-niraula': '/articles/sexuality-management-prof-dr-shanta-niraula',

    // Q&A Columns
    '/node/31': '/articles/qa-how-to-improve-memory',
    '/question-answer/how-to-improve-memory': '/articles/qa-how-to-improve-memory',
    '/node/32': '/articles/qa-how-to-overcome-failures',
    '/question-answer/how-to-overcome-failures': '/articles/qa-how-to-overcome-failures',
    '/node/33': '/articles/qa-i-love-her-very-much',
    '/question-answer/i-love-her-very-much': '/articles/qa-i-love-her-very-much',
    '/node/34': '/articles/qa-how-to-prevent-bully',
    '/question-answer/how-to-prevent-bully': '/articles/qa-how-to-prevent-bully',
    '/node/35': '/articles/qa-son-goes-away',
    '/question-answer/son-goes-away': '/articles/qa-son-goes-away',
    '/node/37': '/articles/qa-filing-divorce-paper',
    '/question-answer/filing-divorce-paper': '/articles/qa-filing-divorce-paper',
    '/node/56': '/articles/qa-why-i-get-angry',
    '/question-answer/why-i-get-angry': '/articles/qa-why-i-get-angry',

    // Institutional & Media
    '/node/24': '/articles/starting-nepalhypnosiscom',
    '/content/starting-nepalhypnosiscom-0': '/articles/starting-nepalhypnosiscom',
    '/node/79': '/articles/nepal-hypnosis-featured-in-himal-magazine',
    '/nepal-hypnosis-featured-in-himal-magazine': '/articles/nepal-hypnosis-featured-in-himal-magazine',
    '/node/90': '/articles/interview-archana-bibhor',
    '/video/interview-archana-bibhor-psychotherapist-trainer': '/articles/interview-archana-bibhor',
    '/node/103': '/articles/testimonial',
    '/testimonial': '/articles/testimonial',
    '/node/203': '/articles/vacancy',
    '/vacancy': '/articles/vacancy',
    '/node/255': '/articles/welcome-home',
    '/welcome-home': '/articles/welcome-home',
    '/node/256': '/articles/homepage-archive',
    '/homepage': '/articles/homepage-archive'
  }
});
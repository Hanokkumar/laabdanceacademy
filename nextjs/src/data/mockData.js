const C = 'https://res.cloudinary.com/db3cpuhrq/image/upload';
export const BRAND_LOGO_URL = `${C}/v1774629759/IMG_1458__1_-removebg-preview_rrcajv.png`;
const BASE_IMG = 'https://demo.kamleshyadav.com/themeforest/dance-academy/demo-v1/wp-content/uploads/sites/2';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const heroSlides = [
  {
    id: 1,
    title: 'Laab Dance',
    titleAccent: 'Academy',
    description:
      'Chennai\'s leading dance school since 2018 — performance, discipline, and creativity under Bala Master & LAAB Crew. Train with heart, hit the stage with confidence.',
      image: `${BASE_IMG}/2025/02/bnr-main-2.png`,
      bgImage: 'https://images.unsplash.com/photo-1550026593-dd8ce0749590?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Zumba',
    titleAccent: 'Energy',
    description:
      'Move to the beat, sweat with a smile. High-energy Zumba sessions that blend cardio, Latin rhythms, and pure fun — all levels welcome.',
      image: `${BASE_IMG}/2025/02/bnr-main-2.png`,
      bgImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Shows &',
    titleAccent: 'Corporate Events',
    description:
      'Choreography for stages, celebrations, and brands. From showcases to corporate gigs — we bring professional dance and unforgettable moments to your event.',
      image: `${BASE_IMG}/2025/02/bnr-main-2.png`,
      bgImage: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1920&q=80',
  },
];

export const aboutData = {
  image: `${BASE_IMG}/2025/01/about-img-1.png`,
    subtitle: 'About us',
  title: 'Leading Dance Academy in Chennai ',
  description:
    'LAAB Dance Academy has been training passionate dancers since 2018. Founded by Arvind and led by Bala Master — founder of LAAB Crew and Title Winners of Kings of Dance Season 2 (Vijay TV) — our academy stands for performance, discipline, and creativity.',
  descriptionExtra:
    'We specialize in professional dance training, choreography, and stage performance, helping students build confidence, skill, and stage presence. Whether you\'re a beginner or an advanced dancer, LAAB Dance Academy is the perfect place to learn, grow, and perform.',
  buttonText: 'Know More',
};

export const danceSchoolCategories = [
  'All',
  'Hip Hop',
  'Folk',
  'Bollywood',
  'Locking',
  'Popping',
  'Breaking',
  'Freestyle choreography',
];

export const danceSchoolItems = [
  {
    id: 1,
    image: `${BASE_IMG}/2016/11/da-sc-5-1.png`,
    title: 'London',
    category: 'Modern',
    tags: ['Ballet', 'Belly', 'Contemporary', 'Hip Hop', 'Irish', 'Modern'],
  },
  {
    id: 2,
    image: `${BASE_IMG}/2016/11/da-sc-2-1.png`,
    title: 'China',
    category: 'Modern',
    tags: ['Contemporary', 'Hip Hop', 'Irish', 'Jazz', 'Kathak', 'Modern'],
  },
  {
    id: 3,
    image: `${BASE_IMG}/2016/11/da-sc-6-1.png`,
    title: 'Australia',
    category: 'Tap',
    tags: ['Ballet', 'Belly', 'Irish', 'Jazz', 'Salsa', 'Tap'],
  },
  {
    id: 4,
    image: `${BASE_IMG}/2016/11/da-sc-4-1.png`,
    title: 'India',
    category: 'Tap',
    tags: ['Ballet', 'Belly', 'Contemporary', 'Hip Hop', 'Modern', 'Salsa', 'Tap'],
  },
  {
    id: 5,
    image: `${BASE_IMG}/2016/11/da-sc-3-1.png`,
    title: 'New York',
    category: 'Salsa',
    tags: ['Hip Hop', 'Irish', 'Modern', 'Salsa'],
  },
  {
    id: 6,
    image: `${BASE_IMG}/2016/11/da-sc-6-1.png`,
    title: 'Brazil',
    category: 'Salsa',
    tags: ['Ballet', 'Belly', 'Contemporary', 'Hip Hop', 'Irish', 'Salsa'],
  },
];

export const events = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777712269/event1_e3mdyr.png',
    date: '1',
    month: 'May',
    title: 'LAAB Summer Dance Camp',
    description:
      'Turn summer into a dance party — free trial classes, Zumba, personal training, fun activities, and stage exposure. Open to kids & all ages.',
    location: 'No 10, Rajiv Gandhi Salai, Navalur, Chennai',
    price: '',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777712387/event2_egvhst.png',
    date: '15',
    month: 'Apr',
    title: 'Summer Dance Camp — 15 & 30 Day',
    description:
      'Choose your program: foundations & daily sessions, or advanced choreography with showcase. Hip hop, folk, Bollywood, locking, popping, breaking & freestyle choreography. Ages 3+.',
    location: 'Navalur, Chennai',
    price: '',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777712772/ChatGPT_Image_May_2_2026_02_35_52_PM_gkhysf.png',
    date: '10',
    month: 'Nov',
    title: 'LAAB Inner Dance Competition',
    description:
      'In-house showcase at LAAB — solo, duo, and crew categories across styles. For our academy dancers only (not an external inter-school event). 10 November 2025 · Chennai.',
    location: 'Chennai',
    price: '',
    completed: true,
  },
];

/** @deprecated Gallery is loaded from CMS API (`/api/site-content` → galleryImages). Kept empty for legacy imports. */
export const galleryImages = [];

export const instructors = [
  {
    id: 'in-1',
    image: `${C}/v1777706963/IMG_5083_rndobo.jpg`,
    name: 'Arvind',
    role: 'Founder & Instructor, LAAB Dance Academy',
    bio:
      'Founded LAAB Dance Academy and continues to shape its vision — from class structure to stage productions. Focuses on building confident performers through disciplined training and real show experience in Chennai.',
    socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    id: 'in-2',
    image: `${C}/v1777706963/IMG_5084_atcbh3.jpg`,
    name: 'Rubin',
    role: 'Instructor',
    bio:
      'Trains students across hip hop, choreography, and stage presence. Brings energy and clarity to every session — from kids batches to advanced crews preparing for showcases.',
    socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
  },
];

/** Homepage + /blog list: use `title` on cards; full story on `/blog/[slug]` via `content`. */
export const blogPosts = [
  {
    id: 'chief-minister-trophy-2025',
    slug: 'chief-minister-trophy-2025',
    image:
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711776/WhatsApp_Image_2025-12-29_at_20.29.03_vegecc.jpg',
    images: [
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1774687084/gallery/tq2qczenpxa4h9m7aw7n.heic',
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777706254/WhatsApp_Image_2025-12-29_at_20.14.30_jh1ilv.jpg',
    ],
    title: 'CHIEF MINISTER TROPHY – 2025',
    subtitle: 'Assistant Choreographer',
    description:
      'State-level multi-sport showcase in Tamil Nadu — assistant choreography with LAAB leads for ceremony and cultural performances.',
    content: `Served as Assistant Choreographer for the **Chief Minister Trophy 2025**, a prestigious state-level multi-sport event organized to promote sports excellence and youth participation across Tamil Nadu.

**(Karthi and Deepak)** Worked as an Assistant Choreographer alongside **Bala** and **Praveen** (Lead Choreographers), supporting the concept creation, choreography execution, performer coordination, and rehearsal management for ceremonial and cultural performances. Contributed to delivering high-energy, well-synchronized performances aligned with the grandeur and spirit of a major government-led sporting event.`,
    date: '2025',
    category: 'Events',
  },
  {
    id: 'hockey-junior-world-cup-2025',
    slug: 'hockey-junior-world-cup-2025',
    image: 'https://res.cloudinary.com/db3cpuhrq/image/upload/v1774684510/gallery/xiremyg33tzg0jybgox7.jpg',
    images: [
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1774684510/gallery/xiremyg33tzg0jybgox7.jpg',
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777706262/IMG-20251015-WA0063_we2rbl.jpg',
    ],
    title: 'HOCKEY JUNIOR WORLD CUP 2025',
    subtitle: 'Assistant Choreographer',
    description:
      'International junior worlds in Tamil Nadu — choreography support, rehearsals, and live-stage execution with LAAB leads.',
    content: `Served as Assistant Choreographer for the **FIH Men's Hockey Junior World Cup 2025**, a prestigious international sporting event hosted in Tamil Nadu, India, featuring **24 national teams** from across the globe.

Worked closely as an Assistant Choreographer alongside **Bala** and **Praveen** (Lead Choreographers), contributing to the concept development, choreography execution, and performer coordination for event performances. Actively supported rehearsals, synchronization, formations, and live-stage execution, ensuring high-energy, visually impactful performances that enhanced the overall audience experience.`,
    date: '2025',
    category: 'Events',
  },
  {
    id: 'hexaware-corporate-events-2023-2024',
    slug: 'hexaware-corporate-events-2023-2024',
    image: 'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711720/WhatsApp_Image_2025-12-29_at_20.03.46_qekxzv.jpg',
    images: [
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711720/WhatsApp_Image_2025-12-29_at_20.03.46_qekxzv.jpg',
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711719/WhatsApp_Image_2025-12-29_at_20.05.21_jg35hr.jpg',
    ],
    title: 'HEXAWARE – 2023 & 2024',
    subtitle: 'Corporate events',
    description:
      'Corporate stage shows for HEXAWARE — brand-aligned choreography, rehearsals, and polished live execution.',
    content: `Delivered professional corporate choreography for **HEXAWARE** events in **2023** and **2024**. Designed and executed high-energy performances aligned with the company's brand, event theme, and audience engagement goals. Managed dancer coordination, rehearsals, and stage execution to ensure polished, impactful live performances.`,
    date: '2023 – 2024',
    category: 'Corporate',
  },
  {
    id: 'sri-sathya-sai-medical-college-choreography',
    slug: 'sri-sathya-sai-medical-college-choreography',
    image:
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711961/Screenshot_2026-05-02_142110_n0glf4.png',
    images: [
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711987/WhatsApp_Image_2025-12-28_at_6.39.09_PM_2_c7opyn.jpg',
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711986/WhatsApp_Image_2025-12-29_at_19.40.34_gugbbl.jpg',
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711987/IMG_8021_rabywi.jpg',
      'https://res.cloudinary.com/db3cpuhrq/image/upload/v1777711988/WhatsApp_Image_2025-12-28_at_6.39.09_PM_1_aqypii.jpg',
    ],
    title: 'College choreography — Sri Sathya Sai Medical College',
    subtitle: 'Shri Sathya Sai Medical College and Research Institute · SBV Chennai',
    description:
      'SBV Chennai campus crews — Legacy 2K24, Euphorians, and inter-college cultural stages with LAAB-style polish.',
    content: `Choreography and performance support for student crews at **Shri Sathya Sai Medical College and Research Institute** (SBV Chennai campus) — spanning flagship shows such as **Legacy 2K24**, **Euphorians**, and other inter-college cultural stages.

We worked with teams on **formations**, **blocking**, **sync**, and stage energy so each production felt confident under lights — from rehearsal rooms to finals night, with a focus on clean execution and a strong audience experience.`,
    date: '2023 – 2025',
    category: 'College',
  },
];

export function getBlogPostBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;
  const key = decodeURIComponent(slug);
  return blogPosts.find((p) => p.slug === key || String(p.id) === key) ?? null;
}

export const testimonials = [
  {
    id: 1,
    text: 'Best dance academy with very energetic trainers and great choreography.',
    name: 'LAAB community',
    role: '',
    image: BRAND_LOGO_URL,
  },
  {
    id: 2,
    text: 'Professional training with a friendly environment. Highly recommended for all levels.',
    name: 'LAAB community',
    role: '',
    image: `${C}/v1777706255/IMG_1227_jhx7fj.jpg`,
  },
  {
    id: 3,
    text: 'Great place to learn dance and build confidence. Amazing experience!',
    name: 'LAAB community',
    role: '',
    image: `${C}/v1777707126/IMG_E0353_n0io41.jpg`,
  },
  {
    id: 4,
    text: 'Perfect academy for beginners and performers. Training is very powerful and unique.',
    name: 'LAAB community',
    role: '',
    image: `${C}/v1777707132/IMG_E0361_y5lga4.jpg`,
  },
];

/** Optional strip below testimonials — LAAB moments (not third-party logos). */
export const partnerLogos = [
  `${C}/v1777707129/IMG_E0335_pftoqq.jpg`,
  `${C}/v1777706256/IMG_5100_drxm5c.jpg`,
  `${C}/v1777707126/IMG_0348_aperdw.jpg`,
  `${C}/v1777706258/IMG_2252_cknjqh.jpg`,
];

export const classSchedule = [
  { time: '6:00 AM – 7:00 AM', monday: 'Yoga', tuesday: '', wednesday: 'Yoga', thursday: '', friday: 'Yoga', saturday: '', sunday: '' },
  { time: '7:00 AM – 8:00 AM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: 'Zumba', sunday: 'Zumba' },
  { time: '11:00 AM – 12:30 PM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: 'Adults', sunday: 'Adults' },
  { time: '4:00 PM – 5:00 PM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: 'Kids batch', sunday: 'Kids batch' },
  { time: '5:00 PM – 6:00 PM', monday: 'Pre kids', tuesday: 'Classical', wednesday: 'Pre kids', thursday: 'Classical', friday: 'Pre kids', saturday: '', sunday: '' },
  { time: '6:00 PM – 7:00 PM', monday: 'Kids', tuesday: '', wednesday: 'Kids', thursday: '', friday: 'Kids', saturday: '', sunday: '' },
  { time: '7:00 PM – 8:00 PM', monday: 'Adults', tuesday: '', wednesday: 'Adults', thursday: 'Adults', friday: '', saturday: '', sunday: '' },
  { time: '8:00 PM – 9:00 PM', monday: '', tuesday: 'Zumba', wednesday: '', thursday: 'Zumba', friday: '', saturday: '', sunday: '' },
];

export const footerData = {
  logo: BRAND_LOGO_URL,
  description: 'Sign up for updates on classes, events, and showcases at LAAB Dance Academy.',
  copyright: 'Copyright © 2025 LAAB Dance Academy. All Rights Reserved.',
};

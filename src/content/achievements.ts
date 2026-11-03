export type Work = {
  id: string; slug?: string; title: string; description: string; role: string; format: string;
  date?: string; url?: string; youtubeId?: string;
  evidence: { url: string; note: string }[];
  status: 'verified' | 'missing-link';
};
export type Collection = { id: string; slug: string; title: string; label: string; intro: string; image?: string; items: Work[] };
export const collections: Collection[] = [
  {
    id: 'demand', slug: 'campaigns-events', title: 'Campaigns & Events', label: 'Webinars, campaigns, and events',
    intro: 'At Dalgo, I help nonprofits make sense of data and AI through practical education. My work brings together session design, facilitation and the communication that gets people into the room.',
    image: 'https://i.ytimg.com/vi/gY1Gif7Jh5w/hqdefault.jpg',
    items: [
      { id: 'data-lifecycle', title: '22. Understanding Data Lifecycle - A Practical Guide for NGOs', role: 'Co-led with Anusha Ganapathi', format: 'Webinar', date: '2026-03-03', youtubeId: 'gY1Gif7Jh5w', url: 'https://www.youtube.com/watch?v=gY1Gif7Jh5w', description: 'Co-led a practical session on the six stages of the nonprofit data lifecycle, helping teams identify bottlenecks and ask better questions before investing in systems.', status: 'verified', evidence: [{ url: 'https://www.youtube.com/watch?v=gY1Gif7Jh5w', note: 'Video description names Anusha Ganapathi and Stuti Nabazza as session leads.' }] },
      { id: 'data-ai', title: 'Understanding the Data and AI Lifecycle', role: 'Session co-facilitator', format: 'Masterclass', date: '2026-09-10', url: 'https://konfhub.com/understanding-the-data-and-ai-lifecycle', description: 'Joined Anusha for a hands-on masterclass on data systems and AI readiness. The session used a data audit and practical exercises to help nonprofits identify priorities.', status: 'verified', evidence: [{ url: 'https://konfhub.com/understanding-the-data-and-ai-lifecycle', note: 'Event lists both facilitators and describes Stuti’s workshop, webinar and bootcamp design work.' }] },
      { id: 'bootcamp', title: 'Insights from a ‘Data to Insights’ Bootcamp', role: 'Team collaboration & written reflection', format: 'Bootcamp reflection', url: 'https://projecttech4dev.org/insights-from-a-data-to-insights-bootcamp/', description: 'Contributed to the team effort around Dalgo’s first two-day Bangalore bootcamp, then wrote the account of its hands-on sessions, peer learning and nonprofit data challenges.', status: 'verified', evidence: [{ url: 'https://projecttech4dev.org/insights-from-a-data-to-insights-bootcamp/', note: 'September 2025 first-person account gives Stuti as contact. The recap description explicitly identifies the reflections as authored by Stuti. Specific ownership of individual activities is not claimed.' }, { url: 'https://www.youtube.com/watch?v=eBWHR0ZGQKA', note: 'Recap uploaded 25 September 2025 links to the authored reflection; recap video editing itself is not attributed to Stuti.' }] },
    ],
  },
  {
    id: 'growth', slug: 'conversations-community', title: 'Conversations & Community', label: 'Growth Circle',
    intro: 'At Growth Circle, I host conversations with women leaders and entrepreneurs about building products, growing businesses and navigating careers. I also contribute behind the scenes through video editing and community storytelling.',
    image: 'https://i.ytimg.com/vi/aTU70WHQMsE/hqdefault.jpg',
    items: [
      { id: 'mala', title: 'What does it take to become a great product leader—and how does the role evolve as companies scale?', role: 'Interview host', format: 'Conversation', date: '2026-09-20', youtubeId: 'aTU70WHQMsE', url: 'https://www.youtube.com/watch?v=aTU70WHQMsE', description: 'Hosted Malavika Lakireddy to explore how product leadership changes from early-stage building to scale, and what AI means for product careers.', status: 'verified', evidence: [{ url: 'https://www.youtube.com/watch?v=aTU70WHQMsE', note: 'Description explicitly identifies Stuti as host. Malavika also thanks Stuti and Sindhu on LinkedIn.' }] },
      { id: 'maria', title: 'The Leadership Gap in Pharma—and How SHEpharma Is Closing It- Maria Stefanoni', role: 'Interview host', format: 'Conversation', date: '2026-02-07', youtubeId: 'uy8tm4JK4ao', url: 'https://www.youtube.com/watch?v=uy8tm4JK4ao', description: 'Hosted Maria Stefanoni for a conversation on building SHEpharma alongside a corporate career, earning trust and making space for women in leadership.', status: 'verified', evidence: [{ url: 'https://www.youtube.com/watch?v=uy8tm4JK4ao', note: 'Description names Stuti; transcript introduces the host as a community contributor. Growth Circle’s Instagram post explicitly thanks Stuti for hosting.' }, { url: 'https://www.instagram.com/reel/DUmjUYwE9Ea/', note: 'Indexed excerpt thanks Stuti for hosting the conversation.' }] },
      { id: 'karthi', title: 'Don’t Hesitate — Reach Out : Karthi Subbaraman’s Powerful Message', role: 'Video editor', format: 'Conversation', date: '2025-11-14', youtubeId: 'DE2GoVltFJw', url: 'https://www.youtube.com/watch?v=DE2GoVltFJw', description: 'Edited Growth Circle’s conversation with Karthi Subbaraman on design careers, community and mentoring. This episode was hosted by Sindhu; my contribution was the edit.', status: 'verified', evidence: [{ url: 'https://www.youtube.com/watch?v=DE2GoVltFJw', note: 'Explicit video editing credit names Stuti Nabazza. Transcript identifies Sindhu as the interviewer.' }] },
    ],
  },
  {
    id: 'dalgo', slug: 'websites-creative-work', title: 'Websites & Creative Work', label: 'Website, creative, and video work',
    intro: 'My Dalgo work connects product positioning with the website and creative communication. The aim is to help nonprofits understand the product, see where it fits and find a clear next step.',
    items: [
      { id: 'dalgo-site', title: 'Dalgo — Data Insights for Nonprofits', role: 'Website & product messaging', format: 'Website', url: 'https://dalgo.org/', description: 'Worked on how Dalgo explains its platform and consulting offer, including the site’s structure, customer stories and calls to action. The public repository records launch decisions made with me.', status: 'verified', evidence: [{ url: 'https://github.com/DalgoT4D/dalgo-portal-code', note: 'Repository supplied by Stuti; commit dc33f93 documents navigation and CTA decisions closed with Stuti on 30 July.' }, { url: 'https://dalgo.org/', note: 'Live site reviewed for the resulting positioning, product explanation and calls to action.' }] },

    ],
  },
  {
    id: 'personal', slug: 'personal-stories', title: 'Personal Stories', label: 'Images, audio, and other experiments',
    intro: 'A space for personal stories about growing up, work and the things we remember. Alongside video essays, I write Dancing Duck Chronicles, a newsletter about everyday life and finding my way through my twenties.',
    image: `${import.meta.env.BASE_URL}assets/introduction-thumbnail-v2.png`,
    items: [
      { id: 'coming-of-age', slug: 'coming-of-age-at-25', title: 'Coming of Age at 25', role: 'Personal project', format: 'Video essay', description: 'A personal video essay. The recording will be added here soon.', status: 'missing-link', evidence: [{ url: '', note: 'Title and authorship supplied in the portfolio brief; recording URL not yet located.' }] },
      { id: 'burnout', slug: 'the-burnout-generation', title: 'The Burnout Generation', role: 'Personal project', format: 'Video essay', description: 'A personal video about millennials and burnout. The recording will be added here soon.', status: 'missing-link', evidence: [{ url: '', note: 'Topic supplied by Stuti; exact published title, date and recording URL still needed.' }] },
      { id: 'chronicles', title: 'Dancing Duck Chronicles', role: 'Writer', format: 'Newsletter', url: 'https://coined.substack.com/', description: 'Write about memory, adulthood and everyday discoveries. Recent pieces include “a twenties crisis” and “How I built a (totally real) time machine”.', status: 'verified', evidence: [{ url: 'https://coined.substack.com/', note: 'Publication by Stuti, linked from her own featured newsletter post on LinkedIn.' }, { url: 'https://www.linkedin.com/feed/update/urn:li:activity:7285986641943388160/', note: 'Stuti identifies this as her own newsletter.' }] },
    ],
  },
];

// Measured from the supplied 1672 × 941 image. All bounds are normalized.
const bounds = (x: number, y: number, width: number, height: number) => ({ x: x / 1672, y: y / 941, width: width / 1672, height: height / 941 });
export const achievementArtwork = { src: `${import.meta.env.BASE_URL}assets/achievements-wall-v2.png`, width: 1672, height: 941 };
export const wallScreens = [
  { id: 'demand', collectionId: 'demand', title: 'Campaigns & Events', lines: ['Campaigns', '& Events'], label: 'Webinars, bootcamps, outreach, and demand generation', glass: bounds(314, 250, 267, 207), crop: bounds(258, 215, 385, 300) },
  { id: 'growth', collectionId: 'growth', title: 'Conversations & Community', lines: ['Conversations', '& Community'], label: 'Growth Circle sessions, interviews, and community building', glass: bounds(679, 233, 292, 232), crop: bounds(638, 190, 430, 320) },
  { id: 'dalgo', collectionId: 'dalgo', title: 'Websites & Creative Work', lines: ['Websites &', 'Creative Work'], label: 'Website projects, messaging, design, and product videos', glass: bounds(1110, 265, 269, 198), crop: bounds(1080, 230, 385, 290) },
  { id: 'coming-of-age', collectionId: 'personal', workId: 'coming-of-age', title: 'Coming of Age at 25', lines: ['Coming of Age', 'at 25'], label: 'Personal film', glass: bounds(317, 590, 241, 177), crop: bounds(284, 555, 360, 260) },
  { id: 'burnout', collectionId: 'personal', workId: 'burnout', title: 'The Burnout Generation', lines: ['The Burnout', 'Generation'], label: 'Personal video essay', glass: bounds(700, 578, 264, 181), crop: bounds(660, 545, 345, 270) },
  { id: 'personal', collectionId: 'personal', title: 'Personal Stories', lines: ['Personal', 'Stories'], label: 'Personal films, essays, images, and audio', glass: bounds(1068, 589, 235, 182), crop: bounds(1028, 550, 377, 269) },
];
export type WallScreen = typeof wallScreens[number];

export const readingArtwork = `${import.meta.env.BASE_URL}assets/reading-wall.png`;
export const collectionHref = (collection: Collection) => `#achievements/${collection.slug}`;
export const projectHref = (work: Work) => `#achievements/films/${work.slug || work.id}`;

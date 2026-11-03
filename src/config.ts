// All coordinates are measured against the original 1672 × 941 artwork.
export const scene = {
  background: `${import.meta.env.BASE_URL}assets/mela-bioscope-16x9.png`,
  width: 1672,
  height: 941,
  // 592 × 333 is exactly 16:9, centered within the edited inner aperture.
  screen: { x: 533 / 1672, y: 316 / 941, width: 606 / 1672, height: 340.875 / 941 },
  title: { x: 635 / 1672, y: 253 / 941, width: 400 / 1672, height: 43 / 941 },
};
// Replace this with a local public asset path or a direct playable media URL.
export const introductionThumbnail = `${import.meta.env.BASE_URL}assets/introduction-thumbnail-mela.jpg`;
export const introductionVideo = `${import.meta.env.BASE_URL}assets/introduction-updated-v1.mp4`;
export const sectionContent = {
  achievements: { title: 'Achievements', text: 'A few things to look back on.', placeholder: 'Achievements will be added here.' },
  links: { title: 'Links', text: 'Elsewhere, when you need me.', placeholder: 'Links will be added here.' },
};

// Homepage cassette links. Change the email or music selections here.
export const cassetteLinks = [
  { label: 'Email', href: 'mailto:stutinabazza@gmail.com', description: 'Email Stuti at stutinabazza@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stutinabazza/', description: 'Visit Stuti on LinkedIn (opens in a new tab)' },
  { label: 'Mixtape', href: 'https://www.youtube.com/watch?v=kuymTS9PoBQ&list=RDkuymTS9PoBQ&start_radio=1', description: 'Listen to Mixtape on YouTube (opens in a new tab)' },
  { label: 'Substack', href: 'https://coined.substack.com/', description: 'Read Stuti’s Substack (opens in a new tab)' },
  { label: 'Random', href: 'https://music.youtube.com/watch?v=SVi3-PrQ0pY', description: 'Listen to Pure Imagination by Gene Wilder on YouTube Music (opens in a new tab)' },
];

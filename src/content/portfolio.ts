export type Example = { id: string; title: string; description?: string; url: string; linkLabel?: string; youtubeId?: string; guest?: string; credentials?: string; related?: { title: string; url: string }[] };
export type PortfolioPhoto = { src:string; alt:string; caption:string; crop?:boolean; position?:string };
export type PortfolioSection = { photo?:PortfolioPhoto; title?: string; metric?: string; paragraphs?: string[]; examples?: Example[]; links?: { title: string; url: string }[]; note?: string; library?: boolean };
export type PortfolioPage = { slug: string; title: string; lead?:string; metric?: string; intro: string[]; bullets?: string[]; outcome?: string; photo?: PortfolioPhoto; introLink?: {title:string;url:string}; sections: PortfolioSection[] };
// Copy and measurements supplied by Stuti; recordings retain verified media IDs.
const recap: Example = {
  id:'bootcamp-recap',title:'Workshop recap',youtubeId:'eBWHR0ZGQKA',url:'https://www.youtube.com/watch?v=eBWHR0ZGQKA',
  related:[{title:'Read my account',url:'https://projecttech4dev.org/insights-from-a-data-to-insights-bootcamp/'}]
};
const lifecycle: Example = {id:'data-lifecycle',title:'Understanding the Data Lifecycle',description:'A session I co-led.',youtubeId:'gY1Gif7Jh5w',url:'https://www.youtube.com/watch?v=gY1Gif7Jh5w'};
const infoxchange: Example = {id:'infoxchange-ai',title:'AI for nonprofit leaders',description:'A session I co-presented with Infoxchange.',youtubeId:'fBlRMzZQup8',url:'https://www.youtube.com/watch?v=fBlRMzZQup8'};
export const portfolioPages:PortfolioPage[] = [
  {
    slug:'demand-gen',title:'Demand Gen',lead:'Helping potential customers understand what they need—and take the next step.',
    intro:['Dalgo provides data software and consulting to nonprofits. I built campaigns, workshops and partnerships that helped teams understand their data problems and explore Dalgo’s services.','One hands-on workshop campaign brought in 2.5× the target for qualified leads.'],
    photo:{src:'/assets/data-education-presentation.jpg',alt:'Stuti presenting beside a pipeline-plumbing activity slide',caption:'',crop:true,position:'50% 42%'},
    sections:[{title:'Video library',library:true,examples:[recap]}]
  },
  {
    slug:'positioning-gtm',title:'Positioning & Go-to-Market',lead:'Making a technical product easier to understand and evaluate.',
    intro:['At Dalgo, I worked on positioning, website structure and customer stories to explain how its software and consulting could help nonprofits. I also built educational sessions around the problems customers faced.','Those sessions drew around 40% more registrations than other topics and accounted for roughly 85% of recorded requests to explore their data needs further.'],
    sections:[
      {title:'Website',links:[{title:'Explore the website',url:'https://dalgo.org/'},{title:'View the website source on GitHub',url:'https://github.com/DalgoT4D/dalgo-portal-code'}]},
      {title:'Video library',library:true,examples:[lifecycle,infoxchange]}
    ]
  },
  {
    slug:'community-building',title:'Community Building',lead:'Building a community through conversations people can learn from.',
    intro:['As part of Growth Circle’s founding team, I helped build a channel sharing women’s experiences in product, business and leadership. I hosted interviews and contributed to content production, helping guests turn their experiences into useful advice for others.'],
    introLink:{title:'Explore Growth Circle',url:'https://www.youtube.com/channel/UC8YV4F7KORYAM_woiNB5OOA'},
    sections:[{title:'Video library',library:true,examples:[
      {id:'mala',title:'Malavika on product leadership',youtubeId:'aTU70WHQMsE',url:'https://www.youtube.com/watch?v=aTU70WHQMsE'},
      {id:'maria',title:'Maria on building SHEpharma',youtubeId:'uy8tm4JK4ao',url:'https://www.youtube.com/watch?v=uy8tm4JK4ao'},
      {id:'anna',title:'Anna Tacconi on career growth, leadership and lifelong learning',youtubeId:'0dKLkIi0snk',url:'https://www.youtube.com/watch?v=0dKLkIi0snk'}
    ]}]
  },
  {
    slug:'b2c-growth',title:'B2C Growth',lead:'Bringing users in and helping them get more from the product.',intro:[],
    sections:[
      {title:'Media.net',paragraphs:['Helped grow a consumer news app from launch to 500,000 users, with responsibility spanning media buying, customer acquisition costs and margins.','Used customer research to prioritise a UI revamp and new feature work with a seven-person product team. Those changes lifted key usage and revenue metrics by 30% in three months.','I also researched and wireframed MVP concepts for application partnerships, connecting market and competitive insight to product decisions.']},
      {title:'Alora',paragraphs:['Led product and growth work on retainer for a consumer wellness app. I used customer research and product experiments to identify friction, then turned those findings into roadmap and funnel improvements.','Activation improved by 25% and feature adoption by 20%. Retention and customer lifetime value increased by 30%.']}
    ]
  },
  {
    slug:'extra-puri',title:'Extra Puri',lead:'Things I make because an idea stays with me.',intro:['Stories and comics about memory, adulthood and finding my way through my twenties.'],
    sections:[{links:[
      {title:'Dancing Duck Chronicles',url:'https://coined.substack.com/'},
      {title:'A Twenties Crisis',url:'https://coined.substack.com/p/a-twenties-crisis'},
      {title:'The Cultural Time Machine',url:'https://coined.substack.com/p/how-i-built-a-totally-real-time-machine'}
    ]},{title:'Design, build, ship, prototype',paragraphs:['Dalgo.org — took product positioning into website structure, page prototypes and a working site. Built a reusable design system and publishing workflow to turn the product story into something people could explore.'],links:[{title:'Explore Dalgo.org',url:'https://dalgo.org/'},{title:'View the website source on GitHub',url:'https://github.com/DalgoT4D/dalgo-portal-code'}]}]
  }
];

// Pixel measurements against the supplied 1672 × 941 artwork. No image text is added.
const bounds = (x: number, y: number, width: number, height: number) => ({ x: x / 1672, y: y / 941, width: width / 1672, height: height / 941 });
export const cartArtwork = { src: '/assets/portfolio-chaat-cart.png', width: 1672, height: 941, sign: bounds(585, 139, 470, 70) };
export const potLinks = [
  { slug: 'demand-gen', label: 'Demand Gen', lines: ['Demand', 'Gen'], pot: bounds(425, 351, 184, 201), tag: bounds(468, 415, 108, 49), crop: bounds(418, 343, 200, 220) },
  { slug: 'positioning-gtm', label: 'Positioning & GTM', lines: ['Positioning', '& GTM'], pot: bounds(591, 317, 169, 197), tag: bounds(627, 382, 104, 57), crop: bounds(583, 310, 185, 213) },
  { slug: 'community-building', label: 'Community building', lines: ['Community', 'building'], pot: bounds(740, 366, 184, 186), tag: bounds(784, 422, 103, 49), crop: bounds(733, 358, 200, 203) },
  { slug: 'b2c-growth', label: 'B2C growth', lines: ['B2C', 'growth'], pot: bounds(908, 327, 163, 190), tag: bounds(946, 388, 95, 54), crop: bounds(899, 319, 183, 210) },
  { slug: 'extra-puri', label: 'Extra puri', lines: ['Extra', 'puri'], pot: bounds(1053, 352, 162, 200), tag: bounds(1093, 417, 100, 48), crop: bounds(1045, 344, 178, 218) }
];
export type PotLink = typeof potLinks[number];
export const portfolioHref = (slug: string) => `#achievements/${slug}`;
export const legacyPortfolioRoutes: Record<string, string> = {
  'channel-level-marketing':'positioning-gtm', 'campaigns-events': 'demand-gen', 'conversations-community': 'community-building',
  'design': 'positioning-gtm', 'websites-creative-work': 'positioning-gtm', 'personal-stories': 'extra-puri',
  'films/coming-of-age-at-25': 'extra-puri', 'films/the-burnout-generation': 'extra-puri'
};

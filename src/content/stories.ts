export const storytellingIntro = {
  title: 'Creative storyteller × Demand gen × Community',
  text: 'I turn ideas into stories people can connect with—from trying something new in my twenties to explaining a product or bringing a community together.'
};
export const stories = [
  { id:'creative', label:'Creative stories', title:'Coming of Age', description:'A visual essay about quitting, fear of failure, and learning to be a beginner again.', extension:'png', count:6, slides:[
    'Growing up: quitting when a new skill did not come easily.',
    'Drawing, dancing, swimming and karate: different hobbies, the same urge to quit.',
    'Learning to draw, then doubting whether I was any good.',
    'Naming the fear of failure behind the habit of quitting.',
    'Returning to swimming, drawing and cycling as an adult.',
    'Trying anyway, and reclaiming the things I gave up as a child.'
  ] },
  { id:'demand',label:'Demand generation',title:'Events to Ecosystems',description:'A visual explanation of Tech4Dev’s event philosophy: how sprints, cohorts and bootcamps create spaces for shared learning.',extension:'png',count:2,slides:[
    'Events to Ecosystems: peer learning, knowledge exchange and communities of practice at Tech4Dev.',
    'Sprints, cohorts and bootcamps: different formats for a community of people and purpose.'
  ] },
  { id:'community',label:'Community',title:'Reflections from the Dalgo Sprint',description:'A visual account of people testing, learning and building together around dalgo.org, a data platform built for nonprofits.',extension:'jpg',count:14,slides:[
    'Reflections from the Dalgo Sprint: participants working together.',
    'Day one: icebreakers and meeting other nonprofit teams.',
    'Bingo, conversations and exchanging facts about each other.',
    'Ishan and Himanshu introduce Dalgo 2.0.',
    'Participants try the new Dalgo and share their questions.',
    'Pratiksha leads a session on predictive analytics.',
    'Day two connects data transformation, dashboards and storytelling.',
    'Manjee from Goalkeep discusses starting a dashboard with an area of enquiry.',
    'Participants share how they build and tell stories with data.',
    'Self-serve workshops, work time and exchanging ideas.',
    'Day three: parting notes on sticky notes.',
    'Reflections on how the stories shared shape Dalgo.',
    'A group photograph of the sprint participants.',
    'Dalgo, a Project Tech4Dev initiative.'
  ] }
];
export const storyImage = (id:string,index:number,extension:string) => `/assets/stories/${id}/${index+1}.${extension}`;

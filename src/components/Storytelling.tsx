import { useEffect, useRef, useState } from 'react';
import { scene } from '../config';
import { stories, storyImage, storytellingIntro } from '../content/stories';

export function Storytelling({route}:{route:string}) {
  const selectedId=route.split('/')[1] || 'creative';
  const story=stories.find(s=>s.id===selectedId) || stories[0];
  const [index,setIndex]=useState(0);
  const heading=useRef<HTMLHeadingElement>(null);
  const tabs=useRef<(HTMLButtonElement|null)[]>([]);
  useEffect(()=>{setIndex(0);document.title=`${story.title} — Stuti`;},[story.id]);
  useEffect(()=>{heading.current?.focus({preventScroll:true});window.scrollTo(0,0);},[]);
  const current=Math.min(index,story.count-1);
  function choose(i:number){location.hash=`storytelling/${stories[i].id}`;}
  function keyTab(event:React.KeyboardEvent<HTMLButtonElement>,i:number){
    let next=i;
    if(event.key==='ArrowRight')next=(i+1)%stories.length;
    else if(event.key==='ArrowLeft')next=(i+stories.length-1)%stories.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=stories.length-1;
    else return;
    event.preventDefault();tabs.current[next]?.focus();choose(next);
  }
  const s=scene.screen,t=scene.title;
  return <main className="storytelling-page">
    <div className="storytelling-intro"><h1 ref={heading} tabIndex={-1}>Design &amp; storytelling</h1><p className="storytelling-position">{storytellingIntro.title}</p><p>{storytellingIntro.text}</p>
      <p className="storytelling-question" id="story-question">What would you like to see?</p>
      <div className="story-tabs" role="tablist" aria-labelledby="story-question">{stories.map((item,i)=><button key={item.id} ref={el=>{tabs.current[i]=el;}} role="tab" id={`tab-${item.id}`} aria-selected={item.id===story.id} aria-controls="story-panel" tabIndex={item.id===story.id?0:-1} onClick={()=>choose(i)} onKeyDown={e=>keyTab(e,i)}>{item.label}</button>)}</div>
    </div>
    <section id="story-panel" role="tabpanel" aria-labelledby={`tab-${story.id}`} tabIndex={0}>
      <div className="story-scene-window"><div className="story-scene">
        <img className="story-art" src={scene.background} alt="" />
        <h2 className="bioscope-title story-sign" style={{left:`${t.x*100}%`,top:`${t.y*100}%`,width:`${t.width*100}%`,height:`${t.height*100}%`}}>{story.title}</h2>
        <div className="story-aperture" style={{left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`}}><img key={`${story.id}-${current}`} src={storyImage(story.id,current,story.extension)} alt={story.slides[current]} /></div>
      </div></div>
      <div className="story-reading"><h2>{story.title}</h2><p>{story.description}</p>
        <div className="story-pagination"><button onClick={()=>setIndex(i=>i-1)} disabled={current===0}>← Previous</button><span role="status" aria-live="polite">{current+1} / {story.count}</span><button onClick={()=>setIndex(i=>i+1)} disabled={current===story.count-1}>Next →</button></div>
        <p className="story-caption">{story.slides[current]}</p>
        <details key={story.id} className="story-full"><summary>Read the complete story at full size</summary>{story.slides.map((alt,i)=><figure key={i}><img src={storyImage(story.id,i,story.extension)} alt={alt} loading="lazy" /><figcaption>{i+1} / {story.count} · {alt}</figcaption></figure>)}</details>
      </div>
    </section>
  </main>;
}

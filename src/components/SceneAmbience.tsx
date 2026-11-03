import { useState } from 'react';
import { scene } from '../config';

// Original CSS/SVG motion, built from the current scene. No reference video is embedded.
export function SceneAmbience({active}:{active:boolean}) {
  const [paused,setPaused]=useState(false);
  return <>
    <div className="scene-ambience" data-paused={paused || !active} aria-hidden="true">
      <div className="foliage-breeze" style={{backgroundImage:`url('${scene.background}')`}} />
      <div className="lantern-light" />
      <svg className="tea-steam" viewBox="0 0 90 140"><path d="M42 140C22 112 66 96 42 67S30 23 44 2"/><path d="M50 140C30 112 73 94 51 64S48 26 59 4"/><path d="M58 140C39 117 80 100 61 77S60 42 70 20"/></svg>
    </div>
    {active && <button className="animation-control" aria-label={paused?'Resume background animation':'Pause background animation'} title={paused?'Resume background animation':'Pause background animation'} onClick={()=>setPaused(p=>!p)}><svg viewBox="0 0 20 20" aria-hidden="true">{paused?<path d="m6 4 10 6-10 6Z" fill="currentColor"/>:<path d="M6 4v12M14 4v12" stroke="currentColor" strokeWidth="2"/>}</svg></button>}
  </>;
}

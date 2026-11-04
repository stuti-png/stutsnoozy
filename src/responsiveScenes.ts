import { useSyncExternalStore } from 'react';
import { scene } from './config';
import { cartArtwork, potLinks } from './content/portfolio';
export type SceneVariant = 'desktop' | 'phone' | 'tablet';
const query = '(max-width: 1024px) and (orientation: portrait)';
function snapshot(): SceneVariant { return matchMedia(query).matches ? (innerWidth <= 600 ? 'phone' : 'tablet') : 'desktop'; }
function subscribe(update: () => void) { window.addEventListener('resize', update); return () => window.removeEventListener('resize', update); }
export function useSceneVariant() { return useSyncExternalStore(subscribe, snapshot, () => 'desktop' as SceneVariant); }
const rect = (x:number,y:number,width:number,height:number,w:number,h:number) => ({x:x/w,y:y/h,width:width/w,height:height/h});
const asset = (name:string) => `${import.meta.env.BASE_URL}assets/${name}.webp`;
// Phone art is scaled proportionally, then trimmed 52px at top/bottom.
const phoneRect = (x:number,y:number,w:number,h:number) => rect(x*1080/916,y*1080/916-52,w*1080/916,h*1080/916,1080,1920);
export const homeScenes = {
 desktop: scene,
 phone: { background:asset('home-bioscope-1080x1920'),width:1080,height:1920,screen:rect(104,721,815,446,1080,1920),title:phoneRect(310,607,277,35) },
 tablet: { background:asset('home-bioscope-1200x1600'),width:1200,height:1600,screen:rect(214,627,767,427,1200,1600),title:rect(422,510,238,40,1086,1448) }
};
const cartPhoneTags = [[143,827,103,48],[283,827,103,48],[422,827,103,48],[559,827,102,48],[694,827,99,48]];
const cartTabletTags = [[194,688,108,50],[345,688,102,50],[490,688,108,50],[640,688,108,50],[786,688,102,50]];
function cartVariant(name:string,w:number,h:number,sign:number[],tags:number[][]) {
 const bounds = (r:number[]) => rect(r[0],r[1],r[2],r[3],w,h);
 return { artwork:{src:asset(name),width:w,height:h,sign:bounds(sign)}, pots:potLinks.map((pot,i) => ({...pot,tag:bounds(tags[i]),pot:bounds([tags[i][0]-12,tags[i][1]-48,tags[i][2]+24,170])})) };
}
export const cartScenes = {
 desktop:{artwork:cartArtwork,pots:potLinks},
 phone:cartVariant('cart-1080x1920',941,1672,[280,584,386,59],cartPhoneTags),
 tablet:cartVariant('cart-1200x1600',1086,1448,[302,451,454,53],cartTabletTags)
};

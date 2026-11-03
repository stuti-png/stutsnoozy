import { useLayoutEffect, useEffect, useRef, useState, useId } from 'react';
import { cartArtwork, potLinks, portfolioPages, portfolioHref, legacyPortfolioRoutes, type PotLink, type Example, type PortfolioPhoto } from '../content/portfolio';

function MediaMotif() { return <svg className="library-motif" viewBox="0 0 40 18" aria-hidden="true"><path d="M20 15C8 15 5 9 5 5c7 0 12 3 15 10C17 7 18 3 20 1c3 4 3 8 0 14C24 8 29 5 35 5c0 6-6 10-15 10Z" fill="currentColor" stroke="var(--cream)" strokeWidth="1"/></svg>; }

function rememberCart(slug: string) {
  sessionStorage.setItem('portfolio-return', JSON.stringify({ slug, scroll: window.scrollY }));
}
function CartScene({ pots, mobile = false }: { pots: PotLink[]; mobile?: boolean }) {
  const sign = cartArtwork.sign;
  return <div className="cart-scene">
    <img className="cart-art" src={cartArtwork.src} alt={mobile ? '' : 'A painted chaat cart with five pots at an Indian mela'} />
    {!mobile && <h1 className="cart-sign" style={{ left: `${sign.x * 100}%`, top: `${sign.y * 100}%`, width: `${sign.width * 100}%`, height: `${sign.height * 100}%` }}>Portfolio Bhandaar</h1>}
    {pots.map(p => {
      const outer = { left: `${p.pot.x * 100}%`, top: `${p.pot.y * 100}%`, width: `${p.pot.width * 100}%`, height: `${p.pot.height * 100}%` };
      const label = { left: `${(p.tag.x - p.pot.x) / p.pot.width * 100}%`, width: `${p.tag.width / p.pot.width * 100}%` };
      return <a key={p.slug} id={`${mobile ? 'mobile' : 'desktop'}-pot-${p.slug}`} className="pot-link" href={portfolioHref(p.slug)} aria-label={`Explore ${p.label}`} onClick={() => rememberCart(p.slug)} style={outer}>
        <span className="pot-title" style={{ ...label, top: `${(p.tag.y - p.pot.y) / p.pot.height * 100}%`, height: `${p.tag.height / p.pot.height * 100}%` }}>{p.lines.map(line => <span key={line}>{line}</span>)}</span>
      </a>;
    })}
  </div>;
}
function ExampleContent({ example, active, setActive }: { example: Example; active: string | null; setActive: (id: string | null) => void }) {
  return <div className="reading-example">
    <h3>{example.title}</h3>
    {example.description && <p>{example.description}</p>}
    <div className="example-actions">
      {example.youtubeId ? <button className="text-link" onClick={() => setActive(active === example.id ? null : example.id)} aria-expanded={active === example.id} aria-label={`${active === example.id ? 'Close' : 'Watch'} recording: ${example.title}`}>{active === example.id ? 'Close recording' : 'Watch recording'}</button> : <a href={example.url}>{example.linkLabel || 'View project'}</a>}
      {example.related?.map(link => <a key={link.url} href={link.url}>{link.title}</a>)}
    </div>
    {example.youtubeId && active === example.id && <div className="reading-player"><iframe src={`https://www.youtube-nocookie.com/embed/${example.youtubeId}?autoplay=0&rel=0`} title={example.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>}
  </div>;
}
function BioscopeVideo({ example, active, setActive, navigation }: { example: Example; active: string | null; setActive: (id: string | null) => void; navigation?:{previous:()=>void;next:()=>void;canPrevious:boolean;canNext:boolean;controls:string} }) {
  return <section className="reading-example library-entry" data-active={active === example.id}>
    {(example.description || example.credentials) && <div className="library-copy">
      {example.credentials && <p className="library-credentials">{example.credentials}</p>}
      {example.description && <p>{example.description}</p>}
    </div>}
    <div className="library-bioscope">
      <MediaMotif />
      <div className="library-screen">
        {active === example.id ? <iframe src={`https://www.youtube-nocookie.com/embed/${example.youtubeId}?autoplay=1&rel=0`} title={example.title} onLoad={e => e.currentTarget.focus()} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button id={`video-${example.id}`} className="library-launch" onClick={() => setActive(example.id)} aria-label={`Play video: ${example.title}`}>
          <img src={`https://i.ytimg.com/vi/${example.youtubeId}/mqdefault.jpg`} alt="" loading="lazy" />
          <span className="library-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4.5 20 12 7 19.5Z" fill="currentColor" /></svg></span>
        </button>}
      </div>
      {navigation && <><button className="video-side-arrow previous" data-carousel-arrow="previous" aria-label="Previous video" aria-controls={navigation.controls} disabled={!navigation.canPrevious} onClick={navigation.previous}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button><button className="video-side-arrow next" data-carousel-arrow="next" aria-label="Next video" aria-controls={navigation.controls} disabled={!navigation.canNext} onClick={navigation.next}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button></>}
    </div>
    {example.related && <div className="library-related">{example.related.map(link=><a key={link.url} href={link.url}>{link.title}</a>)}</div>}
    {active === example.id && <button className="text-link library-close" onClick={() => { setActive(null); requestAnimationFrame(() => document.getElementById(`video-${example.id}`)?.focus()); }} aria-label={`Close video: ${example.title}`}>Close video</button>}
  </section>;
}
function PortfolioImage({photo}:{photo:PortfolioPhoto}) {
  return <figure className="portfolio-photo"><div className="library-bioscope photo-frame"><MediaMotif /><div className="library-screen"><img src={photo.src} alt={photo.alt} width="6000" height="4000" loading="lazy" decoding="async" style={{objectFit:photo.crop?'cover':'contain',objectPosition:photo.position || 'center',transform:photo.crop?'scale(1.18)':undefined}} /></div></div></figure>;
}
function VideoCarousel({examples,active,setActive,label,note}:{examples:Example[];active:string|null;setActive:(id:string|null)=>void;label:string;note?:string}) {
  const track=useRef<HTMLDivElement>(null);
  const [index,setIndex]=useState(0);
  const id=useId();
  function go(next:number,focusArrow?:string) {
    const el=track.current;
    if(!el)return;
    setActive(null);
    setIndex(next);
    const width=el.querySelector('.carousel-slide')?.getBoundingClientRect().width || el.clientWidth;
    el.scrollTo({left:next*(width+20),behavior:'instant'});
    if(focusArrow) requestAnimationFrame(()=>{const slide=track.current?.querySelector('.carousel-slide:not([inert])');const requested=slide?.querySelector<HTMLButtonElement>(`[data-carousel-arrow="${focusArrow}"]`);const target=requested && !requested.disabled?requested:slide?.querySelector<HTMLButtonElement>('.video-side-arrow:not(:disabled)');target?.focus({preventScroll:true});});
  }
  return <div className="video-carousel" role="region" aria-roledescription="carousel" aria-label={label.toLowerCase().includes('video library')?label:`${label} video library`}>
    <div className="carousel-heading"><h2 id={`${id}-title`}>{examples[index].guest || examples[index].title}</h2>{examples.length>1 && <span className="carousel-position" aria-live="polite">{index+1} / {examples.length}</span>}</div>
    {note && <p className="section-note"><em>{note}</em></p>}
    <div className="carousel-track" ref={track} id={id} tabIndex={0} aria-label="Swipe left or right to browse videos" onKeyDown={e=>{if(e.target!==e.currentTarget)return;if(e.key==='ArrowRight'){e.preventDefault();go(Math.min(index+1,examples.length-1));}if(e.key==='ArrowLeft'){e.preventDefault();go(Math.max(index-1,0));}}} onScroll={()=>{const el=track.current;if(!el)return;const next=Math.max(0,Math.min(examples.length-1,Math.round(el.scrollLeft/((el.querySelector('.carousel-slide')?.getBoundingClientRect().width || el.clientWidth)+20))));if(next!==index){setIndex(next);setActive(null);}}}>
      {examples.map((example,i)=><div className="carousel-slide" key={example.id} role="group" aria-roledescription="slide" aria-label={`${i+1} of ${examples.length}`} inert={i!==index}><BioscopeVideo example={example} active={active} setActive={setActive} navigation={examples.length>1?{previous:()=>go(index-1,'previous'),next:()=>go(index+1,'next'),canPrevious:index>0,canNext:index<examples.length-1,controls:id}:undefined} /></div>)}
    </div>
  </div>;
}
export function Achievements({ route }: { route: string }) {
  const rawSlug = route.replace(/^#achievements\/?/, '');
  const slug = legacyPortfolioRoutes[rawSlug] || rawSlug;
  const page = portfolioPages.find(p => p.slug === slug);
  const isCart = !rawSlug;
  const [active, setActive] = useState<string | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const lastRoute = useRef(route);
  useLayoutEffect(() => {
    setActive(null);
    const returning = lastRoute.current !== route;
    lastRoute.current = route;
    if (isCart) {
      let saved: { slug?: string; scroll?: number } = {};
      try { saved = JSON.parse(sessionStorage.getItem('portfolio-return') || '{}'); } catch { /* No previous cart visit. */ }
      if (returning && saved.slug) {
        const prefix = matchMedia('(max-width:900px)').matches ? 'mobile' : 'desktop';
        document.getElementById(`${prefix}-pot-${saved.slug}`)?.focus({ preventScroll: true });
        window.scrollTo(0, saved.scroll || 0);
      } else window.scrollTo(0, 0);
    } else { window.scrollTo(0, 0); heading.current?.focus({ preventScroll: true }); }
  }, [route, isCart]);
  useEffect(() => { document.title = `${page?.title || 'Portfolio Bhandaar'} — Stuti`; }, [page, route]);
  if (!isCart) return <main className="reading-page"><article className="reading-column">
    <h1 ref={heading} tabIndex={-1}>{page?.title || 'Page not found'}</h1>
    {page ? <>{page.lead && <p className="collection-lead"><strong>{page.lead}</strong></p>}{page.metric && <p className="result-line"><strong>{page.metric}</strong></p>}{page.intro.map(text => <p key={text}>{text}</p>)}{page.introLink && <p><a href={page.introLink.url}>{page.introLink.title}</a></p>}{page.bullets && <ul className="contribution-list">{page.bullets.map(text => <li key={text}>{text}</li>)}</ul>}{page.outcome && <p><strong>Outcome:</strong> {page.outcome}</p>}{page.photo && <PortfolioImage photo={page.photo} />}{page.sections.map((section, i) => <section key={section.title || i} className="reading-section" id={section.title === 'Design' ? 'design' : undefined}>
      {section.title && !(section.library && section.title === 'Video library') && <h2>{section.title}</h2>}
      {section.metric && <p className="result-line"><strong>{section.metric}</strong></p>}
      {section.paragraphs?.map(text => <p key={text}>{text}</p>)}
      {section.photo && <PortfolioImage photo={section.photo} />}
      {section.note && !section.library && <p className="section-note"><em>{section.note}</em></p>}
      {section.links && <ul className="selected-links">{section.links.map(link => <li key={link.url}><a href={link.url}>{link.title}</a></li>)}</ul>}
      {section.examples && (section.library ? <VideoCarousel key={`${slug}-${i}`} examples={section.examples} active={active} setActive={setActive} label={section.title || page.title} note={section.note} /> : section.examples.map(example => <ExampleContent key={example.id} example={example} active={active} setActive={setActive} />))}
    </section>)}</> : <p><a href="#achievements">Return to Portfolio Bhandaar.</a></p>}
  </article></main>;
  return <main className="portfolio-cart" aria-label="Portfolio Bhandaar">
    <div className="desktop-cart"><CartScene pots={potLinks} /></div>
    <div className="mobile-cart"><p>Choose a pot to explore.</p><ul className="mobile-pot-links">{potLinks.map(p => <li key={p.slug}><a id={`mobile-pot-${p.slug}`} href={portfolioHref(p.slug)} onClick={() => rememberCart(p.slug)} aria-label={`Explore ${p.label}`}>{p.label}<span aria-hidden="true">↗</span></a></li>)}</ul></div>
  </main>;
}

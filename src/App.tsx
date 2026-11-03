import { useEffect, useRef, useState } from 'react';
import { Fsas } from './components/Fsas';
import { Television } from './components/Television';
import { Achievements } from './components/Achievements';
import { scene, sectionContent, cassetteLinks } from './config';
type View = 'home' | 'achievements' | 'fsas';
function initialView(): View { return location.hash === '#fsas' ? 'fsas' : location.hash.startsWith('#achievements') ? 'achievements' : 'home'; }
export default function App() {
  const [route, setRoute] = useState(location.hash || '#home');
  const lastRoute = useRef(location.hash === '#links' ? '#home' : location.hash || '#home');
  const [view, setView] = useState<View>(initialView);
  const [linksOpen, setLinksOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    function syncHash() {
      if (location.hash.startsWith('#storytelling')) history.replaceState(null, '', '#home');
      if (location.hash === '#links') setLinksOpen(true);
      else { setLinksOpen(false); setView(initialView()); setRoute(location.hash || '#home'); lastRoute.current = location.hash || '#home'; if (!location.hash.startsWith('#achievements')) window.scrollTo(0, 0); }
    }
    const previousScrollRestoration = history.scrollRestoration; history.scrollRestoration = 'manual';
    syncHash(); window.addEventListener('hashchange', syncHash);
    return () => { window.removeEventListener('hashchange', syncHash); history.scrollRestoration = previousScrollRestoration; };
  }, []);
  useEffect(() => {
    if (linksOpen) { previousFocus.current = document.activeElement as HTMLElement; dialog.current?.showModal(); }
    else if (dialog.current?.open) { dialog.current.close(); previousFocus.current?.focus(); }
  }, [linksOpen]);
  useEffect(() => { if (view === 'home') document.title = 'Stuti — Welcome to my bioscope'; }, [view]);
  useEffect(() => { setMenuOpen(false); }, [route]);
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setMenuOpen(false); }
    function onPointer(e: PointerEvent) { if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false); }
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onPointer); };
  }, [menuOpen]);
  function closeLinks() { setLinksOpen(false); history.replaceState(null, '', lastRoute.current); }
  const reading = view === 'fsas' || (view === 'achievements' && route !== '#achievements');
  return <div className={`portfolio${reading ? ' is-reading' : ''}`}>
    <header>
      <a className="wordmark" href="#home" aria-label="Stuti — landing page">stuti</a>
      <div className="nav-menu" ref={menuRef}>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(o => !o)}>
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <nav id="main-nav" aria-label="Main navigation" data-open={menuOpen}>
          <a className="fsa-nav" href="#fsas" aria-current={view === 'fsas' && !linksOpen ? 'page' : undefined}>Frequently Sought Answers</a>
          <a className="bhandaar-nav" href="#achievements" aria-label="Portfolio Bhandaar" aria-current={view === 'achievements' && !linksOpen ? 'page' : undefined}><span className="nav-full" aria-hidden="true"><span className="nav-english">Portfolio</span> <span lang="hi">भंडार</span></span><span className="nav-abbr" aria-hidden="true">Portfolio Bhandaar</span></a>
        </nav>
      </div>
    </header>
    <main className="room" hidden={view !== 'home'} aria-label="Stuti’s bioscope at the mela">
      <div className="room-visual"><div className="scene"><img className="room-art" src={scene.background} alt="A hand-painted bioscope with peacocks and lotus flowers, surrounded by a lively Indian mela"/><h1 className="bioscope-title" style={{ left: `${scene.title.x * 100}%`, top: `${scene.title.y * 100}%`, width: `${scene.title.width * 100}%`, height: `${scene.title.height * 100}%` }}>Welcome to Stuti’s Bioscope</h1><Television active={view === 'home'} /></div></div>
      <a className="reach-me" href="https://www.linkedin.com/in/stutinabazza/" target="_blank" rel="noopener noreferrer" aria-label="Reach me on LinkedIn (opens in a new tab)">reach me</a>
    </main>
    {view === 'achievements' && <Achievements route={route} />}
    {view === 'fsas' && <Fsas />}
    <dialog ref={dialog} onCancel={closeLinks} onClick={e => { if (e.target === dialog.current) closeLinks(); }} aria-labelledby="section-title"><div className="section-inner"><button className="close" onClick={closeLinks} aria-label="Close section">×</button><span className="eyebrow">Stuti / Links</span><h1 id="section-title">Links</h1><p>{sectionContent.links.text}</p><ul className="elsewhere-links">{cassetteLinks.map(link => <li key={link.label}><a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul><button className="back" onClick={closeLinks}>← Back</button></div></dialog>
  </div>;
}

import { cassetteLinks } from '../config';

export function CassetteLinks({ mobile = false }: { mobile?: boolean }) {
  return <div className={`cassette-stack${mobile ? ' cassette-stack-mobile' : ''}`} role="group" aria-label="Contact and music cassettes">
    {cassetteLinks.map((link) => <a key={link.label} className="cassette" href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={link.description} title={link.description}>
      <span className="cassette-reel" aria-hidden="true" />
      <span className="cassette-label">{link.label}</span>
      <span className="cassette-reel" aria-hidden="true" />
    </a>)}
  </div>;
}

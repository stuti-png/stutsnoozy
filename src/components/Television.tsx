import { useEffect, useRef, useState } from 'react';
import { introductionVideo, introductionThumbnail, scene } from '../config';

export function Television({ active = true }: { active?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);

  async function play() {
    try {
      await video.current?.play();
      setStarted(true);
    } catch {
      setError(true);
    }
  }

  useEffect(() => { if (!active) video.current?.pause(); }, [active]);

  const s = scene.screen;
  return <>
    <div className="bioscope-player" style={{ left: `${s.x * 100}%`, top: `${s.y * 100}%`, width: `${s.width * 100}%`, height: `${s.height * 100}%` }}>
      <video ref={video} src={introductionVideo || undefined} poster={introductionThumbnail}
        controls={started} playsInline preload="metadata"
        onPlay={() => setStarted(true)} onError={() => setError(true)}
        aria-label="Stuti's introduction video" />
      {!started && <button className="play" onClick={play} disabled={!introductionVideo || error}
        aria-label="Play Stuti's introduction with sound">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5 20 12 7 19.5Z" fill="currentColor" /></svg>
      </button>}
      {(error || !introductionVideo) && <p className="play-status" role="status">{error ? 'Video unavailable' : 'Introduction coming soon'}</p>}
    </div>
  </>;
}

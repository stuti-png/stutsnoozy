import { useEffect, useRef } from 'react';
import { fsas } from '../content/fsas';

export function Fsas() {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    document.title = `${fsas.title} — Stuti`;
    window.scrollTo(0, 0);
    heading.current?.focus({preventScroll:true});
  }, []);
  return <main className="reading-page fsa-page"><article className="reading-column">
    <h1 ref={heading} tabIndex={-1}>{fsas.title}</h1>
    <section className="personal-note" aria-labelledby="personal-note-title">
      <h2 id="personal-note-title">{fsas.note.heading}</h2>
      {fsas.note.paragraphs.map(text=><p key={text}>{text}</p>)}
    </section>
    <section className="fsa-questions" aria-label="Frequently sought answers">
      {fsas.answers.map(answer=><details className="fsa-answer" name="fsa-answers" key={answer.question}>
        <summary><h2>{answer.question}</h2><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
        <div className="fsa-answer-body">
          {answer.paragraphs.map((text,i)=><p key={text}>{answer.link && i === 0 ? <><a href={answer.link.url} target="_blank" rel="noopener noreferrer">Here’s</a>{text.slice(6)}</> : text}</p>)}
        </div>
      </details>)}
    </section>
  </article></main>;
}

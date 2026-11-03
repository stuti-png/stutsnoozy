# Portfolio design conventions

Preserve the supplied mela artwork, floral navigation plaques, Akasha interface lettering, Anek Latin body text, cream paper, brick red headings and peacock green links. Home and the five-pot overview remain full-width illustrated scenes. Reading pages use a quiet single column, without cards or decorative paragraph backgrounds. No background animation or music.

## Reading layout

Reading-page header participates in document flow; no fixed top-padding guess for wrapped navigation. Content starts32px below the header. Column maximum680px, slightly left of centre on desktop; mobile gutters24px. Page bottom80px desktop/64px mobile.

Spacing scale uses4px increments:8px within text groups,16px between video copy and its frame,24px between paragraphs,40px between major groups. Text and frames follow natural content height, including carousel slides with no description. Article type19px/1.65 desktop and18px/1.65 mobile. Headings use34/24/21px desktop and30/23/19px mobile. Layout authority for reading pages is src/reading.css.

Media retains existing double green/lotus frames and16:9 geometry. Carousel controls stay with the library heading, keep44px targets, and switch one active player in place. Copy, routes and evidence live in src/content/portfolio.ts. The FSA accordion uses native details, one answer open at a time, with the original comic carousel after it.

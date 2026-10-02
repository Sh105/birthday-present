import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { ExternalLink, Mail, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { birthdayContent, letters, wishes, type Letter } from "@/lib/birthday-content";
import { GengarSilhouette, MagicFlowers } from "./AmbientScene";

export function OpeningScene({ onStart }: { onStart: () => void }) {
  return (
    <main className="story-screen opening-screen">
      <GengarSilhouette className="gengar-opening" />
      <div className="opening-copy animate-fade-in">
        <p className="game-kicker"><span className="status-dot" /> PLAYER DETECTED ♡</p>
        <div className="level-mark"><span>LEVEL</span><strong>{birthdayContent.age}</strong></div>
        <p className="story-whisper">A little story was made for you.</p>
        <Button className="story-button story-button-primary" onClick={onStart}>PRESS START <span>→</span></Button>
        <p className="micro-copy">Best experienced with sound</p>
      </div>
      <div className="scroll-cue" aria-hidden="true"><span /> BEGIN</div>
    </main>
  );
}

function Cake({ blown }: { blown: boolean }) {
  return (
    <div className={`cake-scene ${blown ? "candles-out" : ""}`} aria-label="A two-tier birthday cake with glowing candles">
      <div className="cake-sparkles"><i>✦</i><i>·</i><i>✧</i><i>✦</i></div>
      <div className="candles">
        {Array.from({ length: 5 }, (_, i) => <div className={`candle candle-${i + 1}`} key={i}><span className="flame" /><span className="wick" /></div>)}
      </div>
      <div className="cake-tier cake-tier-top"><span className="berry berry-a"/><span className="berry berry-b"/><span className="frosting-drip drip-a"/><span className="frosting-drip drip-b"/></div>
      <div className="cake-tier cake-tier-bottom"><span className="frosting-drip drip-c"/><span className="frosting-drip drip-d"/><span className="frosting-drip drip-e"/></div>
      <div className="cake-plate" />
    </div>
  );
}

export function CakeScene({ onContinue }: { onContinue: () => void }) {
  const [blown, setBlown] = useState(false);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.code === "Space" && !blown) { event.preventDefault(); setBlown(true); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [blown]);

  return (
    <main className={`story-screen cake-screen ${blown ? "celebrating" : ""}`}>
      <MagicFlowers bloomed={blown} />
      {blown && <div className="confetti" aria-hidden="true">{Array.from({ length: 26 }, (_, i) => <i key={i} style={{ "--i": i } as CSSProperties}>{i % 3 === 0 ? "♡" : "✦"}</i>)}</div>}
      <div className="chapter-heading">
        <p className="game-kicker">CHAPTER 00 · THE BIRTHDAY</p>
        <h1>{blown ? "HAPPY BIRTHDAY, MY LOVE ♡" : <>LEVEL {birthdayContent.age} <em>UNLOCKED</em></>}</h1>
        <p>{blown ? "BOSS DEFEATED ✓" : "MAKE A WISH ♡"}</p>
      </div>
      <Cake blown={blown} />
      <div className="scene-actions">
        {!blown ? (
          <><Button className="story-button story-button-primary" onClick={() => setBlown(true)}>BLOW OUT CANDLES <Sparkles /></Button><p className="micro-copy">or press SPACE</p></>
        ) : (
          <Button className="story-button story-button-primary animate-fade-in" onClick={onContinue}>CONTINUE STORY <span>→</span></Button>
        )}
      </div>
    </main>
  );
}

export function StoryIntro({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="story-screen narrative-screen">
      <div className="chapter-rail"><span>01</span><i /></div>
      <article className="narrative-copy">
        <p className="game-kicker">CHAPTER 01 · THE STORY BEGINS</p>
        <h1>Before this was a game…<br/><em>there was you.</em></h1>
        <div className="story-divider"><span>✦</span></div>
        <p className="personal-placeholder">{birthdayContent.storyMessage}</p>
        <Button className="story-button story-button-quiet" onClick={onContinue}>TURN THE PAGE <span>→</span></Button>
      </article>
      <div className="road-easter-egg" aria-hidden="true"><span /><span /></div>
    </main>
  );
}


export function PlaylistScene({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="story-screen playlist-screen">
      <div className="vinyl" aria-hidden="true"><div className="vinyl-ring"/><div className="vinyl-label">♡<small>FOR YOU</small></div></div>
      <article className="playlist-copy"><p className="game-kicker">CHAPTER 02 · THE SOUNDTRACK</p><h1>Songs That<br/><em>Remind Me Of You</em></h1><p>Some songs found you before I knew how to put the feeling into words.</p>
        <Button className="story-button story-button-primary" asChild><a href={birthdayContent.spotifyPlaylist} target="_blank" rel="noreferrer">♫ OPEN MY PLAYLIST <ExternalLink/></a></Button>
        <Button className="story-button story-button-quiet" onClick={onContinue}>KEEP GOING <span>→</span></Button>
      </article>
    </main>
  );
}

export function DiscoveryScene({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="story-screen discovery-screen">
      <GengarSilhouette className="gengar-discovery" />
      <div className="spell-trail" aria-hidden="true"><i>✦</i><i>·</i><i>✧</i></div>
        <article className="narrative-copy"><p className="game-kicker">CHAPTER 03 · LITTLE THINGS</p><h1>I notice the things<br/><em>that make you, you.</em></h1><p className="gentle-copy">The grin when a favorite character appears. The worlds you disappear into while you play. The quiet thrill of a watching your favorite fights.</p><div className="unlock-toast"><Sparkles/> MEMORY FRAGMENTS UNLOCKED</div><Button className="story-button story-button-primary" onClick={onContinue}>DISCOVER THE NEXT THING<br/>→</Button></article>
    </main>
  );
}

function shuffleNumbers() {
  const values = Array.from({ length: wishes.length }, (_, index) => index);
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = values[i];
    const replacement = values[j];
    if (current === undefined || replacement === undefined) continue;
    values[i] = replacement;
    values[j] = current;
  }
  return values;
}

export function WishJarScene({ onContinue }: { onContinue: () => void }) {
  const [order] = useState(shuffleNumbers);
  const [opened, setOpened] = useState<number[]>([]);
  const active = opened.length ? (order[opened.length - 1] ?? null) : null;
  const openWish = () => {
    if (opened.length >= wishes.length) return;
    const nextWish = order[opened.length];
    if (nextWish === undefined) return;
    setOpened((current) => [...current, nextWish]);
  };
  return (
    <main className="story-screen wish-screen">
      <div className="wish-copy"><p className="game-kicker">CHAPTER 04 · JAR INVENTORY</p><h1>24 Reminders<br/><em>FOR YOU</em></h1><p>There are 24 things I want to remind/say to you.<br/>You can open them whenever you want.</p><div className="wish-progress"><span style={{ width: `${(opened.length / wishes.length) * 100}%` }}/><small>{opened.length} / 24 DISCOVERED</small></div></div>
      <div className="jar-stage">
        <GengarSilhouette className="gengar-jar" />
        <div className="glass-jar" aria-label="A glowing jar filled with 24 wishes"><div className="jar-lid"/><div className="jar-shine"/>{Array.from({ length: 24 }, (_, i) => <i className={`jar-note note-${(i % 6) + 1}`} key={i}/>)}</div>
      </div>
      <div className="wish-actions">
        {active === null ? <Button className="story-button story-button-primary" onClick={openWish}>OPEN A MESSAGE<Sparkles/></Button> : <div className="wish-note"><small>WISH #{String(active + 1).padStart(2, "0")}</small><p>{wishes[active]}</p></div>}
        {active !== null && opened.length < wishes.length && <Button className="story-button story-button-primary" onClick={openWish}>ANOTHER&nbsp;<span>→</span></Button>}
        {opened.length > 0 && <Button className="story-button story-button-quiet" onClick={onContinue}>{opened.length === wishes.length ? "ALL WISHES FOUND · OPEN LETTERS" : "VISIT THE LETTER ARCHIVE"} <span>→</span></Button>}
      </div>
    </main>
  );
}

function LetterReader({ letter, index, onClose, onNext }: { letter: Letter; index: number; onClose: () => void; onNext: () => void }) {
  const [page, setPage] = useState(0);
  const lastPage = page === letter.pages.length - 1;
  return <div className={`letter-overlay mood-${letter.mood}`} role="dialog" aria-modal="true" aria-label={letter.title}><div className="letter-paper"><div className="paper-pin">♡</div><p className="letter-number">LETTER {String(index + 1).padStart(2, "0")} · PAGE {page + 1}/{letter.pages.length}</p><h2>{letter.title}</h2><p className="letter-body">{letter.pages[page]}</p><div className="letter-controls">{!lastPage ? <Button className="story-button story-button-ink" onClick={() => setPage((value) => value + 1)}>NEXT PAGE <span>→</span></Button> : <><Button className="story-button story-button-ink" onClick={() => setPage(0)}><RotateCcw/> READ AGAIN</Button><Button className="story-button story-button-ink" onClick={onNext}>NEXT LETTER <span>→</span></Button></>}<Button className="story-button story-button-paper" onClick={onClose}>BACK TO LETTER MENU</Button></div></div></div>;
}

export function LetterArchive({ onContinue }: { onContinue: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const activeLetter = useMemo(() => selected === null ? null : letters[selected], [selected]);
  return (
    <main className="story-screen letters-screen">
      <div className="chapter-heading compact"><p className="game-kicker">CHAPTER 05 · PERSONAL ARCHIVE</p><h1>OPEN WHEN…</h1><p>Twelve letters. For twelve kinds of days.</p></div>
      <div className="letter-grid">{letters.map((letter, index) => <Button variant="ghost" className="envelope" key={letter.title} onClick={() => setSelected(index)}><span className="envelope-number">{String(index + 1).padStart(2, "0")}</span><Mail/><span>{letter.title}</span><i>OPEN →</i></Button>)}</div>
      <Button className="story-button story-button-primary" onClick={onContinue}>FINISH THE STORY <span>→</span></Button>
      {activeLetter && selected !== null && <LetterReader letter={activeLetter} index={selected} onClose={() => setSelected(null)} onNext={() => setSelected((selected + 1) % letters.length)} />}
    </main>
  );
}

export function FinalScene() {
  return (
    <main className="story-screen final-screen"><div className="moon" aria-hidden="true"/><div className="final-copy"><p className="game-kicker">QUEST COMPLETE</p><h1>Level 24: Unlocked&nbsp;</h1><div className="story-divider"><span>✦</span></div><p className="personal-placeholder final-message">{birthdayContent.finalMessage}</p><p className="chapter-one">♡ END OF CHAPTER 23 ♡</p><p className="to-be-continued">our story continues…</p></div></main>
  );
}

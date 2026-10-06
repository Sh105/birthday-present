import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { birthdayContent } from "@/lib/birthday-content";
import { AmbientScene } from "./AmbientScene";
import { BirthdayMessageScene, BouquetScene, CakeScene, DiscoveryScene, FinalScene, LetterArchive, OpeningScene, PlaylistScene, StoryIntro, WishJarScene } from "./StorySections";

const chapterNames = ["START", "MESSAGE", "BIRTHDAY", "STORY", "PLAYLIST", "DISCOVERIES", "WISHES", "LETTERS", "BOUQUET", "FINALE"];
const FINAL = chapterNames.length - 1;

function resolveMusicUrl(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export function BirthdayStory() {
  const [chapter, setChapter] = useState(0);
  const [muted, setMuted] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!musicRef.current) return;
    musicRef.current.muted = muted;
    musicRef.current.volume = chapter === FINAL ? 0.12 : 0.22;
    if (!muted && musicRef.current.paused) void musicRef.current.play().catch(() => undefined);
  }, [muted, chapter]);

  // If the browser blocked playback, retry on the next tap/key.
  useEffect(() => {
    const retry = () => {
      const music = musicRef.current;
      if (music && music.paused && !music.muted) void music.play().catch(() => undefined);
    };
    window.addEventListener("pointerdown", retry);
    window.addEventListener("keydown", retry);
    return () => { window.removeEventListener("pointerdown", retry); window.removeEventListener("keydown", retry); };
  }, []);

  useEffect(() => () => { musicRef.current?.pause(); }, []);

  const start = () => {
    if (!musicRef.current) {
      const music = new Audio(resolveMusicUrl(birthdayContent.backgroundMusic));
      music.loop = true;
      music.preload = "auto";
      music.volume = 0.22;
      musicRef.current = music;
    }
    void musicRef.current.play().catch(() => undefined);
    setChapter(1);
  };

  const next = () => setChapter((current) => Math.min(current + 1, FINAL));
  const hudChapter = Math.min(chapter, FINAL - 1);

  return (
    <div className={`birthday-story chapter-${chapter}`}>
      <AmbientScene quiet={chapter === FINAL} />
      {chapter > 0 && <header className="story-hud"><div className="hud-progress"><span>CHAPTER {String(hudChapter).padStart(2, "0")} / {String(FINAL - 1).padStart(2, "0")}</span><i><b style={{ width: `${(chapter / FINAL) * 100}%` }}/></i><small>{chapterNames[chapter]}</small></div><Button variant="ghost" size="icon" className="sound-button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Unmute background music" : "Mute background music"}>{muted ? <VolumeX/> : <Volume2/>}</Button></header>}
      <div key={chapter} className="chapter-transition">
        {chapter === 0 && <OpeningScene onStart={start} />}
        {chapter === 1 && <BirthdayMessageScene onContinue={next} />}
        {chapter === 2 && <CakeScene onContinue={next} />}
        {chapter === 3 && <StoryIntro onContinue={next} />}
        {chapter === 4 && <PlaylistScene onContinue={next} />}
        {chapter === 5 && <DiscoveryScene onContinue={next} />}
        {chapter === 6 && <WishJarScene onContinue={next} />}
        {chapter === 7 && <LetterArchive onContinue={next} />}
        {chapter === 8 && <BouquetScene onContinue={next} />}
        {chapter === FINAL && <FinalScene />}
      </div>
    </div>
  );
}

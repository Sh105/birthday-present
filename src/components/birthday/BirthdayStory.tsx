import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { birthdayContent } from "@/lib/birthday-content";
import { AmbientScene } from "./AmbientScene";
import { CakeScene, DiscoveryScene, FinalScene, LetterArchive, OpeningScene, PlaylistScene, StoryIntro, VoiceScene, WishJarScene } from "./StorySections";

const chapterNames = ["START", "BIRTHDAY", "STORY", "VOICE", "PLAYLIST", "DISCOVERIES", "WISHES", "LETTERS", "FINALE"];

export function BirthdayStory() {
  const [chapter, setChapter] = useState(0);
  const [muted, setMuted] = useState(false);
  const [voicePlaying, setVoicePlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!musicRef.current) return;
    musicRef.current.muted = muted;
    musicRef.current.volume = voicePlaying ? 0.05 : chapter === 8 ? 0.12 : 0.22;
  }, [muted, voicePlaying, chapter]);

  const start = async () => {
    if (!musicRef.current) {
      const response = await fetch(birthdayContent.backgroundMusic, { method: "HEAD" }).catch(() => null);
      if (!response?.ok) { setChapter(1); return; }
      const music = new Audio(birthdayContent.backgroundMusic);
      music.loop = true;
      music.volume = 0.22;
      music.addEventListener("error", () => undefined);
      musicRef.current = music;
      void music.play().catch(() => undefined);
    }
    setChapter(1);
  };

  const next = () => setChapter((current) => Math.min(current + 1, chapterNames.length - 1));

  return (
    <div className={`birthday-story chapter-${chapter}`}>
      <AmbientScene quiet={chapter === 8} />
      {chapter > 0 && <header className="story-hud"><div className="hud-progress"><span>CHAPTER {String(Math.min(chapter, 7)).padStart(2, "0")} / 07</span><i><b style={{ width: `${(chapter / 8) * 100}%` }}/></i><small>{chapterNames[chapter]}</small></div><Button variant="ghost" size="icon" className="sound-button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Unmute background music" : "Mute background music"}>{muted ? <VolumeX/> : <Volume2/>}</Button></header>}
      <div key={chapter} className="chapter-transition">
        {chapter === 0 && <OpeningScene onStart={start} />}
        {chapter === 1 && <CakeScene onContinue={next} />}
        {chapter === 2 && <StoryIntro onContinue={next} />}
        {chapter === 3 && <VoiceScene onContinue={next} onVoiceState={setVoicePlaying} />}
        {chapter === 4 && <PlaylistScene onContinue={next} />}
        {chapter === 5 && <DiscoveryScene onContinue={next} />}
        {chapter === 6 && <WishJarScene onContinue={next} />}
        {chapter === 7 && <LetterArchive onContinue={next} />}
        {chapter === 8 && <FinalScene />}
      </div>
    </div>
  );
}

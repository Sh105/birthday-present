export function AmbientScene({ quiet = false }: { quiet?: boolean }) {
  const stars = Array.from({ length: quiet ? 46 : 30 }, (_, i) => ({
    left: `${(i * 37 + 11) % 100}%`,
    top: `${(i * 53 + 7) % 100}%`,
    delay: `${(i % 9) * 0.35}s`,
    size: i % 7 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className={quiet ? "ambient-orb ambient-orb-quiet" : "ambient-orb"} />
      <div className="story-grid" />
      {stars.map((star, index) => (
        <i
          key={index}
          className={`story-star ${star.size}`}
          style={{ left: star.left, top: star.top, animationDelay: star.delay }}
        />
      ))}
      <div className="scanlines" />
    </div>
  );
}

export function GengarSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`gengar ${className}`} aria-hidden="true">
      <span className="gengar-ear gengar-ear-left" />
      <span className="gengar-ear gengar-ear-right" />
      <span className="gengar-eye gengar-eye-left" />
      <span className="gengar-eye gengar-eye-right" />
      <span className="gengar-smile">⌣</span>
    </div>
  );
}

export function MagicFlowers({ bloomed }: { bloomed: boolean }) {
  return (
    <div className={`flower-field ${bloomed ? "is-bloomed" : ""}`} aria-hidden="true">
      {Array.from({ length: 7 }, (_, index) => (
        <div key={index} className={`magic-flower flower-${index + 1}`}>
          <span className="flower-stem" />
          <span className="flower-petal petal-a" />
          <span className="flower-petal petal-b" />
          <span className="flower-petal petal-c" />
          <span className="flower-petal petal-d" />
          <span className="flower-heart" />
        </div>
      ))}
    </div>
  );
}

export default function Noise() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.025] mix-blend-soft-light"
      aria-hidden="true"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}

import { useEffect, useRef } from 'react';

/** Fundo decorativo e interactivo do hero. */
export default function HeroBackground() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = root?.parentElement;
    if (!root || !host) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.paused = entry.isIntersecting ? 'false' : 'true';
    });
    observer.observe(host);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-bg" aria-hidden="true">
      <div className="hero-bg__blob hero-bg__blob--a" />
      <div className="hero-bg__blob hero-bg__blob--b" />
      <svg className="hero-bg__lines" viewBox="0 0 1200 400" preserveAspectRatio="none" focusable="false">
        <path className="hero-bg__line hero-bg__line--1" d="M0 330 C120 320 200 340 320 300 S520 290 640 240 S900 200 1200 130" />
        <path className="hero-bg__line hero-bg__line--2" d="M0 360 C140 350 260 330 380 335 S600 300 760 270 S1000 240 1200 200" />
        <path className="hero-bg__line hero-bg__line--3" d="M0 300 C150 295 300 280 450 270 S750 230 1200 170" />
      </svg>
      <div className="hero-bg__grid" />
      <div className="hero-bg__wave" />
      <div className="hero-bg__scrim" />
    </div>
  );
}

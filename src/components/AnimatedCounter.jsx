import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter: Anima números gradualmente quando entram no viewport.
 * Suporta sufixos e prefixos (ex: "25+", "8,4%", "1,6x", "92%")
 */
export default function AnimatedCounter({ value, duration = 1600 }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Extrai o número e caracteres ao redor
    // Ex: "25+" -> prefix "", num 25, suffix "+"
    // Ex: "8,4%" -> prefix "", num 8.4, suffix "%", isDecimal true
    // Ex: "1,6x" -> prefix "", num 1.6, suffix "x", isDecimal true
    const str = String(value);
    const match = str.match(/^([^\d]*)([\d]+(?:[.,]\d+)?)(.*)$/);
    if (!match) return;

    const prefix = match[1];
    const numStr = match[2].replace(',', '.');
    const suffix = match[3];
    const targetNum = parseFloat(numStr);
    const isDecimal = numStr.includes('.');
    const decimalPlaces = isDecimal ? numStr.split('.')[1].length : 0;

    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Easing: easeOutCubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = targetNum * easeProgress;

            let formatted = isDecimal
              ? currentVal.toFixed(decimalPlaces).replace('.', ',')
              : Math.round(currentVal).toString();

            setDisplay(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(step);
          io.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

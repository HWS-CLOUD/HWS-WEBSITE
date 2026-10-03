import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Repor a posição antes da página nova ser pintada impede que os
    // observers leiam temporariamente o scroll da rota anterior.
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const restoreBehavior = requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
    });

    return () => cancelAnimationFrame(restoreBehavior);
  }, [pathname]);

  return null;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useReveal: Motor central de animações em JavaScript
 * - Scroll Reveal com stagger gradual (reactivo a mudanças de rota)
 * - Animação das barras de métricas (.meter)
 * - Efeito spotlight / micro-interacção em cartões no desktop
 */
export default function useReveal() {
  const location = useLocation();

  useEffect(() => {
    let io = null;
    let meterObserver = null;
    let cleanupSpotlight = () => {};
    let timer = null;
    let scrollResetFrame = null;

    const setupReveals = () => {
      // Aguarda o próximo frame de renderização para garantir que o DOM da nova rota já foi montado.
      timer = setTimeout(() => {
      // 1. Scroll reveal: anima apenas quando cada bloco entra no viewport.
      // As grelhas usam os seus próprios filhos para uma cadência mais editorial.
      document.querySelectorAll('.reveal-stagger').forEach((group) => {
        group.classList.remove('reveal', 'in');
        Array.from(group.children).forEach((child, index) => {
          child.classList.add('reveal');
          child.style.setProperty('--reveal-delay', `${Math.min(index * 75, 375)}ms`);
        });
      });

      const reveals = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in');
                entry.target.closest('.reveal-stagger')?.classList.add('is-revealed');
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );

        reveals.forEach((el) => {
          // Se já está com 'in', não precisa re-observar
          if (el.classList.contains('in')) return;

          // Também anima a primeira área visível, mas apenas após a montagem.
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            requestAnimationFrame(() => {
              el.classList.add('in');
              el.closest('.reveal-stagger')?.classList.add('is-revealed');
            });
          } else {
            io.observe(el);
          }
        });
      } else {
        reveals.forEach((el) => el.classList.add('in'));
      }

      // 2. Animação de barras de progresso / meters
      const meters = document.querySelectorAll('.meter i');
      if ('IntersectionObserver' in window && meters.length > 0) {
        meterObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const target = entry.target;
                const targetWidth = target.getAttribute('data-width') || target.style.width;
                target.style.width = '0%';
                requestAnimationFrame(() => {
                  target.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                  target.style.width = targetWidth;
                });
                meterObserver.unobserve(target);
              }
            });
          },
          { threshold: 0.1 }
        );

        meters.forEach((m) => {
          const currentW = m.style.width;
          if (currentW) m.setAttribute('data-width', currentW);
          meterObserver.observe(m);
        });
      }

      // 3. Efeito spotlight suave em cartões interactivos (apenas desktop)
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (!isTouch) {
        const cards = document.querySelectorAll('.area, .dif > div, .sectors article, .dash, .trust-bar__item');

        const handlePointerMove = (e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        };

        cards.forEach((c) => {
          c.addEventListener('pointermove', handlePointerMove);
        });

        cleanupSpotlight = () => {
          cards.forEach((c) => c.removeEventListener('pointermove', handlePointerMove));
        };
      }
      }, 40);
    };

    // Durante uma mudança de rota o browser pode ainda estar a terminar o
    // reposicionamento da página anterior. Não observamos nem revelamos nada
    // enquanto isso acontece, para que a subida automática não consuma as animações.
    const waitForScrollReset = () => {
      if (window.scrollY > 1) {
        scrollResetFrame = requestAnimationFrame(waitForScrollReset);
        return;
      }
      setupReveals();
    };

    waitForScrollReset();

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(scrollResetFrame);
      if (io) io.disconnect();
      if (meterObserver) meterObserver.disconnect();
      cleanupSpotlight();
    };
  }, [location.pathname, location.search, location.hash]);
}

import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';
import { nav } from '../data/content.js';

export default function Navbar({ onConsult }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Fecha o menu mobile quando a rota muda
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__in">
        <Brand to="/" />
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav id="menu" className={`nav__panel ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {nav.map((l) => (
              <li key={l.path}>
                <NavLink
                  to={l.path}
                  className={({ isActive }) => (isActive ? 'is-active-nav' : '')}
                  onClick={close}
                  end={l.path === '/'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                className="btn btn--primary btn--sm"
                to="/contactos"
                onClick={() => {
                  onConsult('');
                  close();
                }}
              >
                Solicitar uma Consulta <Icon name="arrow" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

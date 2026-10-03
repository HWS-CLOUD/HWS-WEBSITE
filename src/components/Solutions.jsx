import Icon from './Icon.jsx';
import { solutions } from '../data/content.js';

export default function Solutions({ active, setActive, onConsult }) {
  const s = solutions[active];
  const onKey = (e) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
    const next = (active + d + solutions.length) % solutions.length;
    setActive(next);
    document.getElementById(`tab-${next}`)?.focus();
  };
  return (
    <section id="solucoes" className="section">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Soluções</p>
          <h2>Soluções especializadas para desafios empresariais concretos.</h2>
          <p className="lead">Escolha a área que corresponde ao seu desafio e descubra como a HWS pode ajudar.</p>
        </div>
        <div className="sol reveal">
          <div className="sol__tabs" role="tablist" aria-label="Soluções" aria-orientation="vertical" onKeyDown={onKey}>
            {solutions.map((x, i) => (
              <button
                key={x.title}
                id={`tab-${i}`}
                role="tab"
                aria-selected={i === active}
                aria-controls="sol-panel"
                tabIndex={i === active ? 0 : -1}
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
              >
                {x.title}
              </button>
            ))}
          </div>
          <div className="sol__panel" id="sol-panel" role="tabpanel" aria-labelledby={`tab-${active}`} key={active}>
            <h3>{s.title}</h3>
            <p className="lead">{s.summary}</p>
            <ul className="checks">
              {s.points.map((p) => (
                <li key={p}>
                  <Icon name="check" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href="#contactos" onClick={() => onConsult(s.title)}>
              Pedir informações sobre este serviço <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Differentials from '../components/Differentials.jsx';
import Cfo from '../components/Cfo.jsx';
import Cta from '../components/Cta.jsx';
import Icon from '../components/Icon.jsx';
import { areas } from '../data/content.js';

export default function Home({ onConsult }) {
  return (
    <>
      {/* ── 1. Hero Institucional & Proposta de Valor (Dark Navy) ── */}
      <Hero />

      {/* ── 2. Áreas Principais de Serviços ── */}
      <section id="servicos-preview" className="section section--cream">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Áreas de Prática</p>
            <h2>Soluções financeiras e estratégicas orientadas a resultados.</h2>
            <p className="lead">
              Apoiamos empresas e instituições na tomada de decisões financeiras, mitigação de riscos e fortalecimento da governação.
            </p>
          </div>

          <div className="areas reveal reveal-stagger">
            {areas.map((a) => (
              <article key={a.n} className={`area ${a.big ? 'area--big' : ''}`}>
                <div className="area__top">
                  <span className="area__n">{a.n}</span>
                  <span className="area__ic">
                    <Icon name={a.icon} />
                  </span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                {a.tags && (
                  <ul className="tags">
                    {a.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
                <Link className="link" to="/servicos">
                  Ver detalhes e entregáveis <Icon name="arrow" />
                </Link>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/servicos" className="btn btn--primary">
              Ver catálogo completo de soluções <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Solução em Destaque: Outsourced CFO ── */}
      <Cfo onConsult={onConsult} />

      {/* ── 4. Diferenciais Estratégicos (Porquê a HWS) ── */}
      <Differentials />

      {/* ── 5. Chamada para Acção Final (CTA Executivo) ── */}
      <Cta onConsult={onConsult} />
    </>
  );
}

import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import HeroBackground from './HeroBackground.jsx';
import Icon from './Icon.jsx';
import { heroFacts } from '../data/content.js';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <HeroBackground />
      <div className="container hero__grid">
        <div className="hero__copy reveal reveal--left">
          <div className="eyebrow">HWS Consultores &amp; Auditores</div>
          <h1>
            Decisões mais sólidas. Organizações mais fortes.{' '}
            <span className="hero__highlight">Crescimento sustentável.</span>
          </h1>
          <p className="lead">
            Apoiamos empresas e instituições na gestão financeira, mitigação de riscos e fortalecimento da governação, através de soluções especializadas e adaptadas à realidade de cada organização.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--gold" to="/servicos">
              Conheça as nossas soluções <Icon name="arrow" />
            </Link>
            <Link className="btn btn--ghost" to="/contactos">
              Fale com um Consultor
            </Link>
          </div>
        </div>
        <div className="hero__visual reveal reveal--right reveal-delay-2">
          <Dashboard variant="line" floating />
        </div>
      </div>

      <div className="container trust-bar">
        <div className="trust-bar__inner reveal-stagger">
          {heroFacts.map((f) => (
            <div className="trust-bar__item" key={f.title}>
              <span className="trust-bar__ic">
                <Icon name={f.icon} />
              </span>
              <div>
                <b>{f.title}</b>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

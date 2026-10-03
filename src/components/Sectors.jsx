import { sectors } from '../data/content.js';

export default function Sectors() {
  return (
    <section id="sectores" className="section section--cream">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Sectores de Actuação</p>
          <h2>Conhecimento especializado para diferentes realidades empresariais.</h2>
          <p className="lead">Embora actuemos em diversos sectores de actividade, concentramos a nossa especialização nas instituições financeiras.</p>
        </div>
        <div className="sectors reveal">
          {sectors.map((s) => (
            <article key={s.title} className={s.featured ? 'is-featured' : ''}><h3>{s.title}</h3><p>{s.text}</p></article>
          ))}
        </div>
        <p className="note">E todos os empreendedores que procuram excelência financeira.</p>
      </div>
    </section>
  );
}

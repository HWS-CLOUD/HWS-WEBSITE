import Icon from './Icon.jsx';
import { areas } from '../data/content.js';

export default function Areas({ onPickSolution }) {
  return (
    <section id="areas" className="section section--cream">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Serviços</p>
          <h2>As nossas áreas de especialização.</h2>
          <p className="lead">Soluções integradas para os desafios mais exigentes da gestão empresarial.</p>
        </div>
        <div className="areas reveal">
          {areas.map((a) => (
            <article key={a.n} className={`area ${a.big ? 'area--big' : ''}`}>
              <div className="area__top"><span className="area__n">{a.n}</span><span className="area__ic"><Icon name={a.icon} /></span></div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              {a.tags && <ul className="tags">{a.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
              <a className="link" href={a.href} onClick={() => a.solution != null && onPickSolution(a.solution)}>
                Conhecer os serviços relacionados <Icon name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

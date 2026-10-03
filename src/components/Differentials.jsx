import Icon from './Icon.jsx';
import { differentials } from '../data/content.js';

export default function Differentials() {
  return (
    <section id="diferenciais" className="section">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Porquê a HWS</p>
          <h2>Conhecimento especializado. Independência. Confiança.</h2>
          <p className="lead">A nossa actuação assenta na independência, no rigor técnico, na confidencialidade e numa abordagem personalizada, orientada para resultados concretos.</p>
        </div>
        <div className="dif reveal reveal-stagger">
          {differentials.map((d) => (
            <div key={d.title}><span className="dif__ic"><Icon name={d.icon} /></span><h3>{d.title}</h3><p>{d.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

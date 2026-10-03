import { steps } from '../data/content.js';

export default function Process() {
  return (
    <section id="metodo" className="section">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Como Trabalhamos</p>
          <h2>Uma abordagem estruturada, do diagnóstico aos resultados.</h2>
        </div>
        <ol className="steps reveal reveal-stagger">
          {steps.map((s, i) => <li key={s.title}><i>{i + 1}</i><h3>{s.title}</h3><p>{s.text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

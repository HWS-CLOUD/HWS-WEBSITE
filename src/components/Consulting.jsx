import Dashboard from './Dashboard.jsx';
import Icon from './Icon.jsx';
import { consulting } from '../data/content.js';

export default function Consulting() {
  return (
    <section id="consultoria" className="section section--cream">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">Consultoria Financeira</p>
          <h2>Transformamos informação financeira em decisões estratégicas.</h2>
          <ul className="checks checks--2">{consulting.map((c) => <li key={c}><Icon name="check" />{c}</li>)}</ul>
        </div>
        <div className="reveal"><Dashboard variant="bars" /></div>
      </div>
    </section>
  );
}

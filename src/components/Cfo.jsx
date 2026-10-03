import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { cfoPoints } from '../data/content.js';

export default function Cfo({ onConsult }) {
  return (
    <section id="cfo" className="section">
      <div className="container">
        <div className="cfo reveal reveal--scale">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-400)' }}>Outsourced CFO</p>
            <h2>Liderança financeira especializada, ajustada às necessidades da sua organização.</h2>
            <p>
              Apoiamos organizações que necessitam de orientação financeira estratégica, planeamento e suporte à gestão executiva, sem depender necessariamente de uma estrutura financeira interna de grande dimensão.
            </p>
            <Link
              className="btn btn--gold"
              to="/contactos"
              onClick={() => onConsult && onConsult('Outsourced CFO')}
            >
              Falar sobre Outsourced CFO <Icon name="arrow" />
            </Link>
          </div>
          <ul>
            {cfoPoints.map((p, i) => (
              <li key={p}>
                <span>{i + 1}</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

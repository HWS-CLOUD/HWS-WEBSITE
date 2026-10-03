import Icon from './Icon.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';
import portrait from '../assets/portrait.jpg';
import { leader } from '../data/content.js';
import { CONTACT } from '../config.js';

export default function Leadership() {
  return (
    <section id="lideranca" className="section">
      <div className="container">
        <div className="leader reveal">
          <div className="leader__img-wrap">
            <img
              src={portrait}
              width="359"
              height="444"
              loading="lazy"
              alt={`Retrato institucional de ${leader.name}, ${leader.role} da HWS`}
            />
          </div>
          <div>
            <p className="eyebrow">Liderança</p>
            <h2>Experiência executiva ao serviço das organizações.</h2>
            <h3 className="leader__name">{leader.name}</h3>
            <p className="leader__role">{leader.role}</p>
            <p className="lead">{leader.bio}</p>
            <div className="stats">
              {leader.stats.map((s) => (
                <div key={s.v}>
                  <b>
                    <AnimatedCounter value={s.v} />
                  </b>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
            <ul className="chips">
              {leader.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a className="link" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="in" /> Ver perfil no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

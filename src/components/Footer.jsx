import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import { nav, areas } from '../data/content.js';
import { CONTACT } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Brand to="/" />
          <p className="footer__msg">Criamos valor através do conhecimento, da confiança e da excelência.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            {nav.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Especialização</h4>
          <ul>
            {areas.map((a) => (
              <li key={a.n}>
                <Link to="/servicos">{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contactos</h4>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bar">
        © {new Date().getFullYear()} HWS Consultores &amp; Auditores, Limitada. Todos os direitos reservados.
      </div>
    </footer>
  );
}

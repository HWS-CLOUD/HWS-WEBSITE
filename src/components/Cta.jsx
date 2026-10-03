import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function Cta({
  title = 'Pronto para elevar a solidez da sua organização?',
  text = 'Conheça os nossos serviços ou fale directamente com a nossa equipa executiva em Maputo.',
  onConsult
}) {
  return (
    <section id="consulta" className="section cta-sec">
      <div className="container">
        <div className="cta reveal reveal--scale">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta__btns">
            <Link className="btn btn--gold" to="/servicos">
              Ver todos os serviços <Icon name="arrow" />
            </Link>
            <Link
              className="btn btn--ghost"
              to="/contactos"
              onClick={() => onConsult && onConsult('')}
            >
              Solicitar uma Consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


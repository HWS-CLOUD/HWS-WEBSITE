import Icon from './Icon.jsx';

// Serviços a listar no painel — replicando a imagem
const services = [
  { icon: 'chart', label: 'Análise financeira profunda' },
  { icon: 'risk',  label: 'Gestão de riscos integrada' },
  { icon: 'gov',   label: 'Governação e conformidade' },
  { icon: 'fit',   label: 'Soluções à medida' },
];

export default function Dashboard() {
  return (
    <figure className="hws-card" aria-label="HWS — Consultoria que gera valor">
      <div className="hws-card__bg" />
      <div className="hws-card__body">

        {/* Topo: HWS + subtítulo */}
        <div className="hws-card__head">
          <span className="hws-card__name">HWS</span>
          <p className="hws-card__sub">Consultoria que gera valor</p>
        </div>

        {/* Lista de serviços — centro */}
        <ul className="hws-card__list">
          {services.map(({ icon, label }) => (
            <li key={label} className="hws-card__item">
              <span className="hws-card__item-ic">
                <Icon name={icon} />
              </span>
              <span className="hws-card__item-label">{label}</span>
            </li>
          ))}
        </ul>

        {/* Slogan — fundo */}
        <p className="hws-card__slogan">
          Mais eficiência. Mais controlo.<br />
          <em>Um futuro mais forte.</em>
        </p>

      </div>
    </figure>
  );
}

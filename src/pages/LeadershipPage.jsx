import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import portrait from '../assets/portrait.jpg';
import { leader } from '../data/content.js';
import { CONTACT } from '../config.js';

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Liderança Executiva"
        title="Experiência de topo ao serviço das"
        highlight="organizações."
        description="A liderança da HWS combina décadas de prática técnica em firmas internacionais de auditoria (Big 4) e direcção financeira executiva no sector bancário e corporativo."
        breadcrumb="Liderança"
      />

      {/* ── Perfil do Managing Partner ── */}
      <section className="section">
        <div className="container">
          <div className="leader reveal reveal--scale">
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
              <p className="eyebrow">Managing Partner</p>
              <h2>{leader.name}</h2>
              <p className="leader__role">{leader.role} &bull; HWS Consultores &amp; Auditores</p>
              <p className="lead" style={{ marginTop: '0.8rem' }}>{leader.bio}</p>
              
              <div style={{ margin: '1.4rem 0', color: 'var(--text-body)', lineHeight: 1.7, fontSize: '0.94rem' }}>
                <p>
                  Com um percurso consolidado no sector financeiro e de auditoria em Moçambique, actuou em ambientes de alta exigência técnica e regulamentar, incluindo passagens por firmas globais (EY e PwC) e o exercício continuado da função de CFO em bancos comerciais e empresas de referência.
                </p>
              </div>

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

              <div style={{ marginTop: '1.6rem' }}>
                <b style={{ display: 'block', fontSize: '0.82rem', color: 'var(--navy-900)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>
                  Especializações &amp; Domínio Técnico
                </b>
                <ul className="chips" style={{ margin: 0 }}>
                  {leader.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem', alignItems: 'center' }}>
                <a className="btn btn--primary" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icon name="in" /> Perfil no LinkedIn
                </a>
                <Link to="/contactos" className="btn btn--outline">
                  Solicitar Reunião Executiva <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section cta-sec">
        <div className="container">
          <div className="cta reveal reveal--scale">
            <h2>Quer agendar uma conversa com a liderança da HWS?</h2>
            <p>Analisamos os desafios da sua organização com independência e confidencialidade total.</p>
            <div className="cta__btns">
              <Link to="/contactos" className="btn btn--gold">
                Entrar em Contacto <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

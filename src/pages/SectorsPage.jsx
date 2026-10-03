import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import { sectors } from '../data/content.js';

export default function SectorsPage({ onConsult }) {
  return (
    <>
      <PageHeader
        eyebrow="Segmentos de Mercado &bull; HWS"
        title="Experiência comprovada em múltiplos"
        highlight="segmentos económicos."
        description="Adaptamos os modelos de consultoria financeira, governação, risco e controlo à escala e exigências de cada sector."
        breadcrumb="Sectores"
      />

      {/* ── Grelha dos 6 Sectores ── */}
      <section className="section">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Abordagem Sectorial</p>
            <h2>Soluções sob medida para o seu segmento.</h2>
            <p className="lead">
              Compreendemos que uma PME tem prioridades diferentes de uma instituição bancária ou de uma ONG.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.4rem' }} className="reveal-stagger">
            {sectors.map((s, idx) => (
              <div
                key={s.title}
                className={`sector-card-detailed ${s.featured ? 'sector-card-detailed--featured' : ''}`}
                style={{
                  background: s.featured ? 'var(--navy-900)' : 'var(--white)',
                  color: s.featured ? 'var(--white)' : 'var(--text-body)',
                  border: '1.5px solid var(--line-light)',
                  borderRadius: 'var(--r-md)',
                  padding: '1.6rem 1.8rem',
                  boxShadow: 'var(--sh-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          background: s.featured ? 'var(--gold-500)' : 'var(--navy-50)',
                          color: s.featured ? 'var(--navy-950)' : 'var(--navy-900)',
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 700,
                          fontSize: '0.82rem'
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <h3 style={{ color: s.featured ? 'var(--white)' : 'var(--navy-900)', fontSize: '1.2rem', margin: 0 }}>
                        {s.title}
                      </h3>
                    </div>
                    {s.featured && (
                      <span className="badge" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'var(--gold-400)', borderColor: 'rgba(201, 168, 76, 0.3)', fontSize: '0.72rem' }}>
                        Destaque
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.92rem', color: s.featured ? 'var(--navy-200)' : 'var(--text-body)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {s.text}
                  </p>

                  {s.details && (
                    <div
                      style={{
                        background: s.featured ? 'rgba(255, 255, 255, 0.06)' : 'var(--off-white)',
                        padding: '0.9rem 1.1rem',
                        borderRadius: 'var(--r-sm)',
                        border: s.featured ? '1px solid rgba(201, 168, 76, 0.15)' : '1px solid var(--line-light)',
                        marginBottom: '1.2rem',
                        fontSize: '0.85rem',
                        color: s.featured ? 'var(--navy-200)' : 'var(--text-muted)'
                      }}
                    >
                      <b style={{ display: 'block', color: s.featured ? 'var(--gold-400)' : 'var(--navy-900)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                        Foco de Intervenção
                      </b>
                      {s.details}
                    </div>
                  )}
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <Link
                    to="/contactos"
                    className={`btn ${s.featured ? 'btn--gold' : 'btn--outline'} btn--sm`}
                    style={{ width: '100%' }}
                    onClick={() => onConsult && onConsult(`Sector: ${s.title}`)}
                  >
                    Solicitar Proposta <Icon name="arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section cta-sec">
        <div className="container">
          <div className="cta reveal reveal--scale">
            <h2>A sua empresa opera num contexto específico?</h2>
            <p>Os nossos consultores séniores desenham intervenções sob medida para o seu sector.</p>
            <div className="cta__btns">
              <Link to="/contactos" className="btn btn--gold">
                Falar com a HWS <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

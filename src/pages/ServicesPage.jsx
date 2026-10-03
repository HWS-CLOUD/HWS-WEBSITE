import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import { areas, solutions } from '../data/content.js';

export default function ServicesPage({ onConsult }) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const s = solutions[active];

  const handleRequestService = (serviceName) => {
    if (onConsult) onConsult(serviceName);
    navigate('/contactos');
  };

  return (
    <>
      <PageHeader
        eyebrow="Soluções &amp; Especialização"
        title="Capacidades técnicas e estratégicas para acelerar o"
        highlight="crescimento com solidez."
        description="Disponibilizamos consultoria financeira, governação corporativa, gestão de risco prudencial, auditoria interna e Outsourced CFO adaptado à sua empresa."
        breadcrumb="Serviços"
      />

      {/* ── 5 Áreas Chave de Actuação ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Áreas de Prática</p>
            <h2>As 5 frentes de intervenção da HWS.</h2>
            <p className="lead">
              Conheça as dimensões em que apoiamos a sua organização com rigor e independência.
            </p>
          </div>
          <div className="areas reveal reveal-stagger">
            {areas.map((a) => (
              <article key={a.n} className={`area ${a.big ? 'area--big' : ''}`}>
                <div className="area__top">
                  <span className="area__n">{a.n}</span>
                  <span className="area__ic">
                    <Icon name={a.icon} />
                  </span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                {a.tags && (
                  <ul className="tags">
                    {a.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
                {a.solution != null && (
                  <button
                    className="link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    onClick={() => {
                      setActive(a.solution);
                      document.getElementById('solucoes-detalhes')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Ver entregáveis da solução <Icon name="arrow" />
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo Interactivo Completo das Soluções ── */}
      <section id="solucoes-detalhes" className="section">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Catálogo de Serviços</p>
            <h2>Âmbito de actuação e entregáveis para cada solução.</h2>
            <p className="lead">
              Seleccione um serviço para visualizar os pontos de actuação e entregáveis concretos.
            </p>
          </div>

          <div className="sol reveal reveal--scale">
            {/* Lista de Abas */}
            <div className="sol__tabs" role="tablist" aria-label="Soluções HWS">
              {solutions.map((x, i) => (
                <button
                  key={x.title}
                  id={`tab-${i}`}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="sol-panel"
                  tabIndex={i === active ? 0 : -1}
                  className={i === active ? 'is-active' : ''}
                  onClick={() => setActive(i)}
                >
                  {x.title}
                </button>
              ))}
            </div>

            {/* Painel com Informação Clara e Objectiva */}
            <div className="sol__panel" id="sol-panel" role="tabpanel" aria-labelledby={`tab-${active}`} key={active}>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--gold-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Solução Especializada 0{active + 1}
                </span>
                <h3 style={{ marginTop: '0.2rem' }}>{s.title}</h3>
              </div>

              <p className="lead" style={{ fontSize: '1rem', color: 'var(--navy-900)', fontWeight: 500, margin: 0 }}>
                {s.summary}
              </p>

              <div>
                <b style={{ display: 'block', fontSize: '0.84rem', color: 'var(--navy-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                  Âmbito &amp; Entregáveis Concretos
                </b>
                <ul className="checks">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Informações Complementares */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1.5px solid var(--line-light)',
                  borderRadius: 'var(--r-sm)',
                  padding: '1rem 1.2rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '0.8rem',
                  fontSize: '0.84rem'
                }}
              >
                <div>
                  <b style={{ display: 'block', color: 'var(--navy-900)', marginBottom: '0.2rem' }}>Modalidade:</b>
                  <span style={{ color: 'var(--text-muted)' }}>Projecto ou Retainer Contínuo</span>
                </div>
                <div>
                  <b style={{ display: 'block', color: 'var(--navy-900)', marginBottom: '0.2rem' }}>Confidencialidade:</b>
                  <span style={{ color: 'var(--text-muted)' }}>Garantida sob NDA</span>
                </div>
                <div>
                  <b style={{ display: 'block', color: 'var(--navy-900)', marginBottom: '0.2rem' }}>Acompanhamento:</b>
                  <span style={{ color: 'var(--text-muted)' }}>Directo com sócios seniores</span>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button
                  className="btn btn--primary"
                  onClick={() => handleRequestService(s.title)}
                >
                  Solicitar proposta para este serviço <Icon name="arrow" />
                </button>
                <Link to="/contactos" className="btn btn--outline">
                  Falar com um Consultor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modalidades de Contratação ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Formatos de Trabalho</p>
            <h2>Modelos flexíveis adaptados à dimensão da sua empresa.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }} className="reveal reveal-stagger">
            <div style={{ background: 'var(--white)', border: '1.5px solid var(--line-light)', borderRadius: 'var(--r-md)', padding: '1.5rem' }}>
              <b style={{ color: 'var(--gold-600)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.4rem' }}>Modalidade 01</b>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>Diagnóstico &amp; Assessoria Pontual</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Ideal para avaliações financeiras específicas, planos de recuperação, due diligence ou preparação para captação de investimento.
              </p>
            </div>
            <div style={{ background: 'var(--white)', border: '1.5px solid var(--line-light)', borderRadius: 'var(--r-md)', padding: '1.5rem' }}>
              <b style={{ color: 'var(--gold-600)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.4rem' }}>Modalidade 02</b>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>Outsourced CFO &amp; Direcção Contínua</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Apoio contínuo à administração e equipa executiva com planeamento, controlo de tesouraria e reporting financeiro periódico.
              </p>
            </div>
            <div style={{ background: 'var(--white)', border: '1.5px solid var(--line-light)', borderRadius: 'var(--r-md)', padding: '1.5rem' }}>
              <b style={{ color: 'var(--gold-600)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.4rem' }}>Modalidade 03</b>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>Auditoria &amp; Suporte Regulatório</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Para instituições bancárias e corporações que necessitam de programas de risco (ICAAP/ILAAP), auditorias internas e comités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="section cta-sec">
        <div className="container">
          <div className="cta reveal reveal--scale">
            <h2>Precisa de uma proposta técnica ou diagnóstico financeiro?</h2>
            <p>Os nossos consultores séniores estão prontos para analisar a sua estrutura e desenhar a melhor solução.</p>
            <div className="cta__btns">
              <Link to="/contactos" className="btn btn--gold">
                Solicitar Diagnóstico <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

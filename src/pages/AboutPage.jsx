import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Process from '../components/Process.jsx';
import Icon from '../components/Icon.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institucional &bull; HWS"
        title="Rigor técnico, independência e"
        highlight="crescimento sustentável."
        description="A HWS Consultores &amp; Auditores, Limitada é uma empresa moçambicana de consultoria estratégica, financeira e de auditoria, dedicada a fortalecer a governação e a solidez das empresas no mercado nacional e regional."
        breadcrumb="Sobre nós"
      />

      {/* ── Posicionamento e Credenciais ── */}
      <section className="section">
        <div className="container">
          <div className="about reveal reveal--scale">
            <div>
              <p className="eyebrow">A Nossa Identidade</p>
              <h2>Conhecimento sénior aplicado aos desafios reais da gestão.</h2>
              <p className="lead">
                Com sede em Maputo e uma equipa com décadas de actuação no sector bancário e empresarial moçambicano, a HWS disponibiliza consultoria independente de elevado padrão técnico.
              </p>
              <p style={{ marginTop: '0.8rem', color: 'var(--text-body)', lineHeight: 1.7, fontSize: '0.94rem' }}>
                Apoiamos conselhos de administração, comités de auditoria e equipas executivas na tomada de decisões financeiras complexas, conformidade com o Banco de Moçambique e controlo interno.
              </p>
              <div style={{ marginTop: '1.4rem' }}>
                <Link to="/contactos" className="btn btn--primary btn--sm">
                  Conversar com a equipa executiva <Icon name="arrow" />
                </Link>
              </div>
            </div>

            {/* ── Matriz 2x2 de Credenciais Executivas ── */}
            <div className="credential-grid">
              <div className="credential-card">
                <b>25+ Anos</b>
                <h4>Experiência Sénior</h4>
                <p>Histórico comprovado em Big 4 e direcção financeira no sector bancário.</p>
              </div>
              <div className="credential-card">
                <b>100%</b>
                <h4>Independência Total</h4>
                <p>Pareceres técnicos isentos, sem conflitos de interesse e fundamentados em dados.</p>
              </div>
              <div className="credential-card">
                <b>IFRS &amp; NIRF</b>
                <h4>Padrão Internacional</h4>
                <p>Conformidade estrita com normas contabilísticas globais e normas do BdM.</p>
              </div>
              <div className="credential-card">
                <b>Maputo</b>
                <h4>Know-How Local</h4>
                <p>Profundo domínio do enquadramento fiscal, cambial e comercial moçambicano.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Missão, Visão e Valores (3 Colunas Compactas) ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Propósito</p>
            <h2>Missão, Visão e Princípios.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }} className="reveal reveal-stagger">
            {/* Missão */}
            <div style={{ background: 'var(--navy-900)', color: 'var(--white)', border: '1px solid rgba(201, 168, 76, 0.2)', borderRadius: 'var(--r-md)', padding: '1.6rem', position: 'relative' }}>
              <b style={{ color: 'var(--gold-400)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Missão</b>
              <h3 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Decisões mais sólidas, organizações mais fortes.</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                Ajudar organizações a tomar decisões financeiras informadas, gerir riscos com rigor e estruturar bases sólidas para um crescimento sustentável.
              </p>
            </div>

            {/* Visão */}
            <div style={{ background: 'var(--navy-900)', color: 'var(--white)', border: '1px solid rgba(201, 168, 76, 0.2)', borderRadius: 'var(--r-md)', padding: '1.6rem', position: 'relative' }}>
              <b style={{ color: 'var(--gold-400)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Visão</b>
              <h3 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Referência em confiança e independência.</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--navy-200)', lineHeight: 1.6, margin: 0 }}>
                Ser a primeira escolha quando a gestão exige experiência sénior, rigor metodológico e confiança inquestionável no mercado moçambicano.
              </p>
            </div>

            {/* Valores */}
            <div style={{ background: 'var(--white)', border: '1.5px solid var(--line-light)', borderRadius: 'var(--r-md)', padding: '1.6rem' }}>
              <b style={{ color: 'var(--navy-900)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Princípios</b>
              <h3 style={{ color: 'var(--navy-900)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Compromisso Inegociável</h3>
              <ul style={{ display: 'grid', gap: '0.4rem', fontSize: '0.86rem', color: 'var(--text-body)', margin: 0 }}>
                <li>✓ <b>Independência:</b> Pareceres isentos e fundamentados em dados.</li>
                <li>✓ <b>Confidencialidade:</b> Protecção absoluta da informação do cliente.</li>
                <li>✓ <b>Rigor Técnico:</b> Metodologias testadas e alinhadas às normas.</li>
                <li>✓ <b>Pragmatismo:</b> Soluções directamente aplicáveis ao seu negócio.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metodologia de Trabalho ── */}
      <Process />

      {/* ── CTA Final ── */}
      <section className="section cta-sec">
        <div className="container">
          <div className="cta reveal reveal--scale">
            <h2>Pronto para elevar a solidez da sua organização?</h2>
            <p>Conheça os nossos serviços ou fale directamente com a nossa equipa executiva em Maputo.</p>
            <div className="cta__btns">
              <Link to="/servicos" className="btn btn--gold">
                Ver todos os serviços <Icon name="arrow" />
              </Link>
              <Link to="/contactos" className="btn btn--ghost">
                Solicitar uma Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

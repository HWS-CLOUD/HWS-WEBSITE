import PageHeader from '../components/PageHeader.jsx';
import Contact from '../components/Contact.jsx';
import { faqs } from '../data/content.js';

export default function ContactPage({ service, setService }) {
  return (
    <>
      <PageHeader
        eyebrow="Atendimento &bull; HWS"
        title="Estamos prontos para analisar os desafios da sua"
        highlight="organização."
        description="Preencha o formulário abaixo ou utilize os canais directos para agendar uma reunião confidencial com a nossa equipa."
        breadcrumb="Contactos"
      />

      {/* ── Formulário e Dados Directos ── */}
      <Contact service={service} setService={setService} />

      {/* ── Perguntas Frequentes (FAQs) ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Perguntas Frequentes</p>
            <h2>Informações úteis sobre o processo de consultoria.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }} className="reveal-stagger">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="faq-card"
                style={{
                  background: 'var(--white)',
                  border: '1.5px solid var(--line-light)',
                  borderRadius: 'var(--r-lg)',
                  padding: '2rem',
                  boxShadow: 'var(--sh-card)'
                }}
              >
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-900)', marginBottom: '0.8rem' }}>{f.q}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

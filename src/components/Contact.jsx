import { useState } from 'react';
import Icon from './Icon.jsx';
import { solutions } from '../data/content.js';
import { CONTACT, FORM_ENDPOINT, WEB3FORMS_KEY } from '../config.js';

const rules = {
  nome: (v) => {
    const val = v.trim();
    return (val.length >= 5 && !/\d/.test(val)) || 'O nome deve ter pelo menos 5 caracteres e não deve conter números.';
  },
  empresa: (v) => v.trim().length >= 5 || 'O nome da empresa deve ter pelo menos 5 caracteres.',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Indique um email profissional válido.',
  tel: (v) => {
    const val = v.replace(/[\s-]/g, '');
    if (!val) return true; // campo opcional
    return /^(?:\+258|00258)?(?:8[234567]\d{7}|2\d{8})$/.test(val) || 'Indique um número válido.';
  },
  servico: (v) => !!v || 'Seleccione o serviço de interesse.',
  msg: (v) => v.trim().length >= 10 || 'Descreva brevemente a sua necessidade (mínimo de 10 caracteres).',
};

function Field({ id, label, wide, error, children }) {
  return (
    <div className={`field ${wide ? 'field--wide' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      <span className="field__err" id={`e-${id}`}>{error}</span>
    </div>
  );
}

export default function Contact({ service, setService }) {
  const [v, setV] = useState({ nome: '', empresa: '', email: '', tel: '', msg: '', website: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const data = { ...v, servico: service };

  const check = (k) => {
    const r = rules[k](data[k]);
    setErrors((e) => ({ ...e, [k]: r === true ? '' : r }));
    return r === true;
  };
  
  const set = (k) => (e) => {
    const val = e.target.value;
    if (k === 'servico') {
      setService(val);
    } else {
      setV({ ...v, [k]: val });
    }
    // Validar instantaneamente ao digitar
    if (rules[k]) {
      const r = rules[k](val);
      setErrors((errs) => ({ ...errs, [k]: r === true ? '' : r }));
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (v.website) return;
    const bad = Object.keys(rules).filter((k) => !check(k));
    if (bad.length) {
      setStatus({ type: 'bad', text: 'Corrija os campos assinalados e tente novamente.' });
      document.getElementById(bad[0])?.focus();
      return;
    }
    const { website, ...payload } = data;
    if (FORM_ENDPOINT) {
      setLoading(true);
      try {
        const r = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...payload,
            access_key: WEB3FORMS_KEY,
            subject: `Novo contacto no site: ${payload.nome}`,
            from_name: 'HWS Consultores'
          })
        });
        if (!r.ok) throw new Error();
        setLoading(false);
        setSent(true);
        setV({ nome: '', empresa: '', email: '', tel: '', msg: '', website: '' });
        setService('');
        setTimeout(() => setSent(false), 3000);
      } catch {
        setLoading(false);
        setStatus({ type: 'bad', text: `Não foi possível enviar a mensagem. Tente novamente ou escreva para ${CONTACT.email}.` });
      }
      return;
    }
    const body = `Nome: ${payload.nome}\nEmpresa: ${payload.empresa || '-'}\nEmail: ${payload.email}\nTelefone: ${payload.tel || '-'}\nServiço: ${payload.servico}\n\n${payload.msg}`;
    setStatus({ type: 'info', text: 'O seu cliente de email foi preparado com os dados preenchidos. Por favor confirme o envio.' });
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Pedido de consulta: ' + payload.servico)}&body=${encodeURIComponent(body)}`;
  };

  const common = (id) => ({
    id,
    name: id,
    value: data[id],
    onChange: set(id),
    'aria-invalid': !!errors[id],
    'aria-describedby': `e-${id}`,
  });

  const btnClass = sent ? 'btn btn--sent' : 'btn btn--primary';
  const btnContent = loading
    ? 'A processar o envio...'
    : sent
      ? 'Enviado ✓'
      : <>Enviar mensagem de consulta <Icon name="arrow" /></>;

  return (
    <section id="contactos" className="section section--cream">
      <div className="container contact">
        {/* ── Coluna Esquerda: Contactos Directos + Horários + Garantias Institucionais ── */}
        <div className="reveal reveal--left">
          <p className="eyebrow">Contactos &amp; Apoio Directo</p>
          <h2>Estamos disponíveis para analisar o seu desafio.</h2>
          <p className="lead" style={{ marginTop: '0.6rem' }}>
            Inicie uma conversa confidencial com a equipa executiva da HWS para explorar soluções ajustadas à sua organização.
          </p>

          <ul className="contact__list">
            <li>
              <Icon name="phone" />
              <div>
                <span>Telefone &bull; Linha Directa</span>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
            </li>
            <li>
              <Icon name="mail" />
              <div>
                <span>Email Institucional</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </li>
            <li>
              <Icon name="in" />
              <div>
                <span>LinkedIn Corporativo</span>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  {CONTACT.linkedinLabel}
                </a>
              </div>
            </li>
            <li>
              <Icon name="pin" />
              <div>
                <span>Escritório &bull; Sede</span>
                <b>{CONTACT.location}</b>
              </div>
            </li>
          </ul>

          {/* ── Cartão de Garantias de Atendimento (Preenche o espaço vertical) ── */}
          <div
            style={{
              background: 'var(--white)',
              border: '1.5px solid var(--line-light)',
              borderRadius: 'var(--r-md)',
              padding: '1.2rem 1.4rem',
              marginTop: '1.4rem',
              boxShadow: 'var(--sh-soft)'
            }}
          >
            <b style={{ display: 'block', color: 'var(--navy-900)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
              Compromisso de Atendimento HWS
            </b>
            <div style={{ display: 'grid', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-body)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: 'var(--gold-600)', fontWeight: 700 }}>✓</span>
                <span><b>Resposta rápida:</b> Retorno em menos de 24 horas úteis.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: 'var(--gold-600)', fontWeight: 700 }}>✓</span>
                <span><b>Confidencialidade estrita:</b> Acordo de NDA assinado sob pedido.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: 'var(--gold-600)', fontWeight: 700 }}>✓</span>
                <span><b>Horário de atendimento:</b> Segunda a Sexta, das 08h00 às 17h00.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Coluna Direita: Formulário Completo de Solicitação ── */}
        <form className="form reveal reveal--right reveal-delay-1" onSubmit={submit} noValidate aria-label="Formulário de contacto">
          <Field id="nome" error={errors.nome} label="Nome completo *">
            <input {...common('nome')} autoComplete="name" required />
          </Field>
          <Field id="empresa" error={errors.empresa} label="Empresa / Instituição *">
            <input {...common('empresa')} autoComplete="organization"/>
          </Field>
          <Field id="email" error={errors.email} label="Email profissional *">
            <input {...common('email')} type="email" autoComplete="email" required />
          </Field>
          <Field id="tel" error={errors.tel} label="Número de telefone">
            <input {...common('tel')} type="tel" autoComplete="tel" />
          </Field>
          <Field id="servico" error={errors.servico} label="Serviço de interesse *" wide>
            <select {...common('servico')} required>
              <option value="">Seleccione um serviço ou área de interesse</option>
              {solutions.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
              <option value="Outsourced CFO">Outsourced CFO</option>
              <option value="Outro assunto">Outro assunto / Diagnóstico Geral</option>
            </select>
          </Field>
          <Field id="msg" error={errors.msg} label="Mensagem &bull; Detalhes da sua solicitação *" wide>
            <textarea
              {...common('msg')}
              rows="4"
              required
              placeholder="Descreva sucintamente o contexto da sua empresa e os principais objectivos que pretende alcançar..."
            />
          </Field>
          <input className="hp" type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" value={v.website} onChange={set('website')} />
          {status && <div className={`status status--${status.type}`} role="status">{status.text}</div>}
          <button className={btnClass} type="submit" disabled={loading || sent}>
            {btnContent}
          </button>
        </form>
      </div>
    </section>
  );
}

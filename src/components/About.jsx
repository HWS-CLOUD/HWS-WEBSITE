import { pillars } from '../data/content.js';

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about reveal">
          <div>
            <p className="eyebrow">Quem Somos</p>
            <h2>Experiência que transforma desafios em oportunidades.</h2>
            <p className="lead">A HWS Consultores & Auditores, Limitada é uma empresa de consultoria especializada em consultoria financeira, gestão de risco, governação corporativa, auditoria interna, serviços de assurance e desenvolvimento de capacidades. Combinamos conhecimento técnico, visão estratégica e experiência executiva para apoiar organizações na tomada de decisões, fortalecer a governação e gerir riscos.</p>
          </div>
          <ul className="pillars">
            {pillars.map((p) => <li key={p.title}><h3>{p.title}</h3><p>{p.text}</p></li>)}
          </ul>
        </div>
        <div className="mv reveal">
          <div><h3>Missão</h3><p>Ajudar organizações a tomar melhores decisões, gerir riscos com confiança e alcançar resultados sustentáveis.</p></div>
          <div><h3>Visão</h3><p>Ser a primeira escolha quando os desafios exigem experiência, independência e confiança.</p></div>
        </div>
      </div>
    </section>
  );
}

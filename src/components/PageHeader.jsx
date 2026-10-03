import { Link } from 'react-router-dom';

export default function PageHeader({ eyebrow, title, highlight, description, breadcrumb }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="breadcrumb" aria-label="Navegação estrutural">
          <Link to="/">Início</Link>
          <span className="sep">/</span>
          <span className="current">{breadcrumb || title}</span>
        </nav>
        <div className="page-header__content reveal reveal--left">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>
            {title} {highlight && <span className="hero__highlight">{highlight}</span>}
          </h1>
          {description && <p className="lead">{description}</p>}
        </div>
      </div>
    </section>
  );
}

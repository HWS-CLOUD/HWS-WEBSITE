import { Link } from 'react-router-dom';

export default function Brand({ to = '/' }) {
  return (
    <Link className="brand" to={to} aria-label="HWS Consultores & Auditores, início">
      <span className="brand__mark">HWS</span>
      <span className="brand__txt">
        <b>HWS</b>
        <span>Consultores &amp; Auditores</span>
      </span>
    </Link>
  );
}

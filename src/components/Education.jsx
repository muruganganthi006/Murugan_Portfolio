import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section">
      <span className="pill">Education</span>
      <h2 className="title">Academic background</h2>
      <div className="timeline">
        {education.map((e) => (
          <div key={e.title} className="tl-item">
            <span className="tl-period">{e.period}</span>
            <h3>{e.title}</h3>
            <p className="org">{e.place}</p>
            <p className="muted small">{e.detail}</p>
          </div>
        ))}
      </div>
      <h3 className="sub">Certifications</h3>
      <div className="grid grid-2">
        {certifications.map((c) => (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p className="org">{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
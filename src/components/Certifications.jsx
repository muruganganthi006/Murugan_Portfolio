import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="kicker">Certifications</p>
      <h2>Courses completed</h2>
      <div className="grid grid-2">
        {certifications.map((c) => (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p className="stack">{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <span className="pill">Experience</span>
      <h2 className="title">Internships</h2>
      <div className="timeline">
        {experience.map((e) => (
          <div key={e.role} className="tl-item">
            <span className="tl-period">{e.period}</span>
            <h3>{e.role}</h3>
            <p className="org">{e.org}</p>
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
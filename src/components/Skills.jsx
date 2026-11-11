import { skills, skillCards } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <span className="pill">My expertise</span>
      <h2 className="title">Skills &amp; Technologies</h2>
      <div className="grid grid-6">
        {skillCards.map((s) => (
          <div key={s.name} className="card skill">
            <span className="mark">{s.mark}</span>
            <h3>{s.name}</h3>
            <p className="muted small">{s.note}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-3 gap-top">
        {skills.map((g) => (
          <div key={g.group} className="card">
            <h3>{g.group}</h3>
            <div className="chips">
              {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
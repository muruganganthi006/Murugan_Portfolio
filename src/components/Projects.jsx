import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <span className="pill">Featured work</span>
      <h2 className="title">Selected Projects</h2>
      <div className="grid grid-2">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            <h3>{p.title}</h3>
            <div className="chips tight">
              {p.stack.split(", ").map((t) => <span key={t} className="chip cyan-chip">{t}</span>)}
            </div>
            <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
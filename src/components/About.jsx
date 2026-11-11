import { profile, services } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section about">
      <div>
        <span className="pill">About me</span>
        <h2 className="title">Turning raw data into decisions</h2>
        <p className="muted">{profile.about}</p>
      </div>
      <div className="grid grid-2">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p className="muted small">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
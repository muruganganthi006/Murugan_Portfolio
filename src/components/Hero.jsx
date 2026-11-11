import { useEffect, useState } from "react";
import { profile, stats } from "../data/portfolioData";
import { Github, Linkedin, Mail, Arrow, Download } from "./Icons";

const fullName = `${profile.first} ${profile.last}`;

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(fullName);
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(fullName.slice(0, i));
      if (i >= fullName.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero panel">
      <div className="hero-text">
        <span className="pill"><i className="dot" /> Open to internships</span>
        <h1>
          <span className="hi">Hi, I'm</span>
          <span className="cyan">{typed}<b className="caret" /></span>
        </h1>
        <h2 className="role">{profile.role}</h2>
        <p className="lead">{profile.intro}</p>
        <div className="actions">
          <a href="#projects" className="btn btn-cyan">View my work <Arrow /></a>
          <a href={profile.resume} download className="btn btn-outline">Download CV <Download /></a>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame">
          <img src={profile.photo} alt={fullName} />
        </div>
        <ul className="stat-card">
          {stats.map((s) => (
            <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
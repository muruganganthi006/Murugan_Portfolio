import { profile } from "../data/portfolioData";
import { Mail, Phone, Linkedin, Github, Pin, Arrow } from "./Icons";

export default function Contact() {
  const items = [
    { icon: <Mail />, text: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone />, text: profile.phone, href: `tel:${profile.phone}` },
    { icon: <Linkedin />, text: "LinkedIn profile", href: profile.linkedin },
    { icon: <Github />, text: "GitHub profile", href: profile.github },
    { icon: <Pin />, text: profile.location },
  ];
  return (
    <section id="contact" className="section">
      <div className="cta panel">
        <div>
          <p className="muted">Let's build something</p>
          <h2 className="cyan">Amazing together</h2>
          <p className="muted small">Open to Data Analyst internships and analytics projects.</p>
        </div>
        <a href={`mailto:${profile.email}`} className="btn btn-cyan">Get in touch <Arrow /></a>
      </div>
      <ul className="contact-grid">
        {items.map((i) => (
          <li key={i.text} className="card contact-item">
            <span className="ico">{i.icon}</span>
            {i.href ? (
              <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{i.text}</a>
            ) : (
              <span>{i.text}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
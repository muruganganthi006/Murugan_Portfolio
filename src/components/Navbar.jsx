import { useState } from "react";
import { profile, nav } from "../data/portfolioData";
import { Logo, Arrow } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#home" className="brand"><Logo /> {profile.first}</a>
      <nav className={open ? "links open" : "links"}>
        {nav.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>
        ))}
      </nav>
      <a href="#contact" className="btn btn-outline nav-cta">Let's talk <Arrow /></a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </header>
  );
}
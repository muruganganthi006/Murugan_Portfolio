import { profile, nav } from "../data/portfolioData";
import { Up } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.first} {profile.last}. All rights reserved.</p>
      <nav>{nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
      <a href="#home" className="top">Back to top <span className="ico"><Up /></span></a>
    </footer>
  );
}
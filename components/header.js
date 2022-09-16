import styles from "../styles/Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

import Link from "next/link";

function SocialLink(props) {
  return (
    <a href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
}

function NavLink(props) {
  return (
    <Link href={props.href} prefetch={false}>
      {props.name}
    </Link>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-2 fs-5 color-primary fw-bold ${styles.name}`}>
            <NavLink href="/" name="Eleanor LM" />
          </div>

          <div className="col-lg-8 fw-bold">
            <nav className={styles.nav}>
              <NavLink href="/" name="Home" />
              <NavLink href="/about" name="About" />
              <NavLink href="/projects" name="Projects" />
              <NavLink href="/blog" name="Blog" />
              <NavLink href="/contact" name="Contact" />
            </nav>
          </div>

          <div className={`col-lg-2 fs-5 ${styles.social}`}>
            <SocialLink icon={faTwitter} href="#" />
            <SocialLink icon={faInstagram} href="#" />
            <SocialLink icon={faLinkedin} href="#" />
            <SocialLink icon={faGithub} href="#" />
          </div>
        </div>
      </div>
    </header>
  );
}
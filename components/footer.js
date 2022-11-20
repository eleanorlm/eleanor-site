import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.footer} text-center text-muted`}>
      {/*
       * The decision to use Roman Numerals is intentional as is the decision
       * not to automatically change the year (which is a fairly common thing):
       *  (1) The copyright year should be the year the site was last updated
       *  (2) Roman numerals are stylistically nicer and common outside the web
       *  (3) Roman numerals conceal the year the site was last updated
       *       (which is probably also why they're used in the first place)
       */}
      <p>&copy; MMXXII Eleanor Mozley</p>
    </footer>
  );
}

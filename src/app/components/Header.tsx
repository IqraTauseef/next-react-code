// Header.tsx
import styles from '../page.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyPortfolio</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Projects</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

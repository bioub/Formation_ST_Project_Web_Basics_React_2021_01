import { Link } from 'react-router-dom';

import styles from './TopBar.module.scss';

function TopBar() {
  return (
    <header className={styles.host}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/products" className={styles.link}>
        Products
      </Link>
      <Link to="/search" className={styles.link}>
        Search
      </Link>
      <Link to="/about" className={styles.link}>
        About
      </Link>
    </header>
  );
}

export default TopBar;

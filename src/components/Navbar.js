import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img
          alt='Logo'
          src='https://i.ibb.co/RS2WNd5/1j-oj-FVDOMk-X9-Wytexe43-D6kh-KHr-Bd-Mnx3-Fw-Xs1-M3-EMo-AJtligqh-PRs8f8.png'
        />
      </div>
      <h1 className={styles.hidden}>Hey This is Raj's Watchlist heehee.......</h1>
      <Link className={`${styles.home} ${styles.hidden}`} to='/'>
        home
      </Link>
      <Link className={`${styles.home} ${styles.hidden}`} to='/about'>
        About Me
      </Link>

      <div className={styles.subnav}>
       
       <Link  to='/'>
         home
       </Link>
       <Link  to='/about'>
         About Me
       </Link>
       </div>
    </div>
  );
};

export default Navbar;

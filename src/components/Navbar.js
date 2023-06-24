import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className={styles.nav}>
        <div className={styles.logo}>
            <img alt='Logo' src="https://i.ibb.co/RS2WNd5/1j-oj-FVDOMk-X9-Wytexe43-D6kh-KHr-Bd-Mnx3-Fw-Xs1-M3-EMo-AJtligqh-PRs8f8.png" />
        </div>
        <Link to='/'>
          home
        </Link>
      </div>
    );
  };
  
  export default Navbar;
  
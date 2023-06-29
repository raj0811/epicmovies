import { Link } from 'react-router-dom';

import { categories } from '../api/categories';

import styles from '../styles/home.module.css';


const Home = () => {
  return (
    <div className={styles.main}>
      
      <h1>Select category</h1>
      <div className={styles.cat}>
        {categories.map((category, index) => (
          <div
            className={styles.catBox}
            key={index}
            style={{ backgroundImage: category.background }}
          >
            <Link to={category.link}>
              <h1 className={styles.categoryName} >{category.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

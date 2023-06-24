import styles from '../styles/movieCard.module.css'


const MovieCard = ({ cat, movies }) => {
    return (
        <div className={styles.main}>
            <h1>{cat.toUpperCase()} Movies</h1>

            <div className={styles.moviectn}>

                {movies
                    .filter(movie => movie.cat.includes(cat))
                    .map(movie => (
                        <div key={movie.Title} className={styles.moviebox}>
                            <div className={styles.movieposter}>
                            <img src={movie.img} alt={movie.Title} className={styles.movieposter} />
                            </div>
                            <h2>{movie.Title}</h2>
                            {/* <h3>{movie.cat}</h3> */}
                            {/* Additional movie details */}
                        </div>
                    ))}

            </div>

        </div>
    );
};

export default MovieCard;


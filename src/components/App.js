import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import { Home } from "../pages";
import MovieCard from './MovieCard';
import { movies } from '../api/movies';
import { categories } from '../api/categories';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/mystry" element={<MovieCard cat="mystry" movies={movies.filter(movie => movie.cat.includes("mystry"))} />} />
          <Route exact path="/horror" element={<MovieCard cat="horror" movies={movies.filter(movie => movie.cat.includes("horror"))} />} /> */}
           <Route exact path='/about' element={<About/>} />
          {categories.map((category, index) => {
            return (
              <Route
                exact
                path={category.link}
                element={<MovieCard cat={category.pass} movies={movies.filter(movie => movie.cat.includes(category.pass))} />}
                key={index}
              />
             
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

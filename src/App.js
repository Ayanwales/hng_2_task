import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchValues, setSearchValues] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?&api_key=b0cd585b8bb35847584187352a0955de";
    const response = await fetch(url);
    const data = await response.json();
    const movieData = data.results;
    //console.log(movieData)
    setMovies(movieData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValues("");
    if (searchValues.length > 0) {
      let url = `https://api.themoviedb.org/3/search/movie?${searchValues}api_key=b0cd585b8bb35847584187352a0955de`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => json.results)
        .then((data) => {
          console.log(data);
          const results = data.map((movie) => {
            let temp = {};
            temp.id = movie.id;
            temp.title = movie.title;
            temp.img = movie.poster_path;
            temp.year = movie.release_date;
            return temp;
          });
          setSuggestions(results);
          setLoading(false)
        })
        .catch((error) => console.log("Exception to get Suggestions"));
    } else {
      setSuggestions([]);
      setLoading(true);
    }
  };
  React.useEffect(() => {
    getMovies();
  }, []);

  return(
    
    <Router>
      <Routes>
        <Route path="/" element= {<Home movies={movies} loading={loading} setSearchValues={setSearchValues} searchValues={searchValues} handleSubmit={handleSubmit}/>}/>
        <Route path="/movie/:id" element= {<Movie/>}/>
      </Routes>
    </Router>
  )
}
export default App;

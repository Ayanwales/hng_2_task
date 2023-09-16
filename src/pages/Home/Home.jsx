import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Movielist from "../../components/Movielist/Movielist";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
const Home = ({ movies, searchValues, handleSubmit, setSearchValues, loading }) => {
  return (
    <>
      <div className="container">
        <Navbar
          searchValues={searchValues}
          handleSubmit={handleSubmit}
          setSearchValues={setSearchValues}
        />
        <Header />
      </div>
      <div className="featured-container">
        <Featured />
        <div className="movie" data-testid="movie-card">
          {movies.slice(0, 10).map((movie, index) => (
            <Movielist movie={movie} key={index} loading={loading} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

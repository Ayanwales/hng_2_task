import React from "react";
import "./Movielist.css";
import Imdb from "../../images/imdb.png"
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Loading from "../Loading/Loading";
const Movielist = (props) => {
  const { id, title, poster_path, release_date,popularity,loading } = props.movie;
  return (
    <>
     {loading ? (
     <Loading/> ): 
     (
     <Link
        to={`movie/${id}`}
        className="movieList"
        key={id}
        data-testid="movie-card"
      >
        <div className="box">
          <p>{title}</p>
          <AiFillHeart />
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          data-testid="movie-poster"
          alt={title}
        />
        <p
          data-testid="movie-release-date"
          style={{ display: "block", marginBottom: "10px", color: "black", fontSize: "14px" }}
        >
          USA {release_date}
        </p>
        <h4 data-testid="movie-title" className="movie-title">
          {title}
        </h4>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="rating">
            <span>
              <img src={Imdb} alt="" />
              <p>{popularity}/100</p>
            </span>
            <span>
              <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg"width="30" height="40" alt="" />
              <p>{popularity}%</p>
            </span>
          </div>
        </span>
        <p className="last">Action, Adventure, Horror</p>
      </Link>
)
}
    </>
  );
};
export default Movielist;

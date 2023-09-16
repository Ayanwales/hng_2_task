import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaPlay } from "react-icons/fa";
import "./Movie.css";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import rectangle2 from "../../images/Thumbnails.png";
import { Link } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Loading from "../../components/Loading/Loading";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?&api_key=b0cd585b8bb35847584187352a0955de"`
    )
      .then((reponse) => reponse.json())
      .then((data) => setMovie(data));
  }, [params.id]);

  return (
    <>
      {!movie ? (
        <Loading />
      ) : (
        <div className="section-movie">
          <Sidebar />
          <div className="container-movie">
            <div className="heading">
              <img
                src={`https://image.tmb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="play-section">
                <div className="play">
                  <FaPlay />
                </div>
                <span>Watch Trailer</span>
              </div>
            </div>
            <div className="movie-text">
              <div className="top">
                <div className="left">
                  <span style={{ fontWeight: "bold" }}>
                    <span data-testid="movie-title">Top Gun: Maverick</span> •{" "}
                    <span data-testid="movie-release-date">
                      {new Date(movie.release_date).toUTCString()}
                    </span>
                    • PG-13 •{" "}
                    {typeof movie.runtime === "number" ? (
                      <span data-testid="movie-runtime">
                        {<span>{Math.floor(movie.runtime / 60)}</span>}h{" "}
                        <span>{movie.runtime % 60}</span>m
                      </span>
                    ) : (
                      "N/A"
                    )}
                  </span>
                  {movie.genres &&
                    movie.genres.map((x) => <small key={x.id}>{x.name}</small>)}
                </div>
                <div className="right">
                  <AiFillStar />
                  <span>8.5</span>
                  <span>|</span>
                  <span>350k</span>
                </div>
              </div>
              <div className="main">
                <div className="left">
                  <p className="about" data-testid="movie-overview">
                    {movie.overview}
                  </p>{" "}
                  <br />
                  <p>
                    <span>Director:</span>&nbsp;
                    <span>John Doe</span>
                  </p>{" "}
                  <br />
                  <p>
                    <span>Writers:</span>&nbsp;
                    <span>John Doe, Mary Smith</span>
                  </p>{" "}
                  <br />
                  <p>
                    <span>Stars:</span>&nbsp;
                    <span>John Doe, Mary Smith, Morgan Freeman</span>
                  </p>{" "}
                  <br /> <br />
                  <div className="rated">
                    <span className="first">Top rated movie #65</span>
                    <span className="second">
                      <span>Awards 9 nominations</span> <AiOutlineDown />
                    </span>
                  </div>
                </div>
                <div className="right">
                  <Link>
                    <ImTicket />
                    <span>See Showtimes</span>
                  </Link>
                  <Link>
                    <FiMenu />
                    <span>More watch options</span>
                  </Link>
                  <div className="img-box">
                    <img src={rectangle2} alt="" />
                    <span>
                      <FiMenu />
                      <small>The Best Movies and shows in september</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;

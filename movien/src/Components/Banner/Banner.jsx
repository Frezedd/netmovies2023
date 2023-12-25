import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from '../../axios';
import moviesTrailer from "movie-trailer";
import requests from '../../requests';


const Banner = () => {
    const [movie, setMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("");
    const [bannerPlay, setBannerPlay] = useState(true);

   
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(requests.fetchHorror);
                const results = response.data.results;
        
                if (results && results.length > 0) {
                    setMovie(results[Math.floor(Math.random() * results.length)]);
                } else {
                    console.log('No results found');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        fetchData();
    }, []);
console.log(movie);



    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    function playBanner(movie) {
        moviesTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                if (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    trailerUrl('')
                    setTrailerUrl(urlParams.get("v"));
                    setBannerPlay(false);
                } else {
                    console.log("there is no video Id");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
    <>
    {bannerPlay && (
         <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center",
            }}
             >
                <div className="banner__contents">
                    <h1 className="banner__title">
                         {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                         <button 
                          onClick={() =>playBanner(movie)}className="banner__button"
                          > Play
                          </button>
                          <button 
                          onClick={() => {
                            setBannerPlay(true);
                        }}
                        className="banner__button"
                        > 
                        Pause 
                        </button>
                         </div>
                          <h1
                          className="banner__description">{truncate(movie?.overview, 150)}</h1>
                    </div>
                    <div className="banner__fadeBottom" />
                </div>
            )}
        </>
    )
}

export default Banner
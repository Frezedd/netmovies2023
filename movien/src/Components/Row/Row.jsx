import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from '../../axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';



const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(null);

    useEffect(() => {
        let isMounted = true;
        
        const fetchData = async () => {
            try {
                const response=await axios.get(fetchUrl);
                
                if (isMounted) {
                    setMovies(response?.data.results);
          // Reset trailerUrl when new movies are fetched
                    setTrailerUrl("");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
        
        return () => {
            isMounted = false;
        };
    }, [fetchUrl]);

    
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };


    const handleClick = (movie) => {
        if (trailerUrl) {
            return;
        }
    
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                console.log("Trailer URL:", url);
                if (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("Video ID:", urlParams.get('v'));
                    setTrailerUrl(urlParams.get('v'));
                } else {
                    console.log('No trailer found for this movie');
                }
            })
            .catch((error) => {
                console.error('Error fetching trailer:', error);
            });
    };
    
 

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies?.map((movie) => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}

                    
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && (
                <YouTube 
                  videoId={trailerUrl} 
                  opts={opts} 
                />
                )}
            </div>
        </div>
    )
}

export default Row
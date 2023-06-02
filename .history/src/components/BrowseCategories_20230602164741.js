import React from "react";
import "./BrowseCategories.css";
import avatar from "../Assets/image14.png";
import { useState, useEffect } from "react";
import axios from "axios";

function BrowseCategories() {
  const [catState, setCatState] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
   
  const codes={
    'Action':'28',
    'Comedy':'35',
    'Romance':'10749',
    'Horror':'27',
    'Drama':'18',
    'Thriller':'53',
    'Western':'37',
    'Fantasy':'14',
    'Music':'10402',
    'Fiction':'878',
  }

  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: '6bf1dd2c1c01b0760e553d848ab21e5c', 
          with_genres: genre,
        },
      });

      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      console.error('Error response:', error.response);
      return [];
    }
  };

  useEffect(() => {
    const categoryData = localStorage.getItem('categoryItems');
    if (categoryData) {
      const finalCatData = JSON.parse(categoryData);
      setCatState(finalCatData);

      const fetchMovies = async () => {
        const movies = [];
        for (const genre of finalCatData) {
          const moviesByGenre = await fetchMoviesByGenre(codes[genre]);
          movies.push({
            genre: genre,
            movies: moviesByGenre,
          });
        }
        console.log(movies);
        const moviesByGenreArray = movies.map((item) => ({
          genre: item.genre,
          movies: item.movies,
        }));
        setMoviesByGenre(moviesByGenreArray);
      };
      
      console.log(moviesByGenre);
      fetchMovies();
    }
  }, []);

  return (
    <div className="container-b">
      <div className="header">
        <h1>Super App</h1>
      </div>
      <div className="body-container">
        <div className="main-elements">
          <h1>Entertainment according to your choice</h1>
          {catState.map((genre, index) => (
            <div className="category-elements-b" key={index}>
              <h2>{genre}</h2>
              <div style={{display:'flex'}} className="movies-by-genre">
                {moviesByGenre[index]?.movies.map((movie) => (
                  <div key={movie.id} style={{marginRight:'1rem'}}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      height={250}
                      style={{borderRadius: '1rem'}}
                    />
                    <h3>{movie.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
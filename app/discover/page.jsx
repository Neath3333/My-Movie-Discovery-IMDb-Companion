import React from "react";
import { getTrendingMovies,getPopularMovies,getUpcomingMovies } from "../../lib/tmdb";
import MovieCard from "../../components/movieCard";

export default async function DiscoverPage() {
  const trending = await getTrendingMovies();
  const popular = await getPopularMovies();
  const upcoming = await getUpcomingMovies();   


return(
    <div>
        <h1>Discover Movies</h1>
        <h2>Trending</h2>
        <ul>
            {trending.results.map(movie=>{
                <li key={movie.id}>{movie.title}</li>
            })}
            <MovieCard movie={trending.results[0]} />
        </ul>
        <h2>Popular Movies</h2>
        <ul>
            {popular.results.map(movie=>{
                <li key={movie.id}>{movie.title}</li>
            })}
        </ul>
        <h2>Upcoming Movies</h2>
        <ul>
            {upcoming.results.map(movie=>{
                <li key={movie.id}>{movie.title}</li>
            })}
        </ul>
    </div>
)};
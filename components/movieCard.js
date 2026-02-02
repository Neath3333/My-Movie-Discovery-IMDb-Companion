    'use client'
    import React from "react";
    import Image from "next/image";
    import PropTypes from 'prop-types'; 
    

    export default function MovieCard({movie}){
    if (!movie) return null;

    const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "placeholder.jpg";

    return (
        <div className="w-48">
        <Image 
        src={imageUrl}
        width={200}
        height={400}
        alt={movie.title}
        />
        <div className="space-y-1 p-2">
            {/* Title */}
        <h3 className="text-[7px] line-clamp-1 font-semibold">{movie.title}</h3>
            {/* Rating + year*/}
        <p className="text-xs">⭐{movie.vote_average?.toFixed(1)} | {movie.release_date?.slice(0,4)}</p>
        {/* Short Overview */}
        <p className="text-[16px] line-clamp-2">{movie.overview} </p>
         {/* Like Button */}

        
        </div>
        </div> 

    ) };
    MovieCard.propTypes = {
        movie: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number,
            release_date: PropTypes.string,
            overview: PropTypes.string,
            }), 
        };
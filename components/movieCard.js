    'use client'
    import React from "react";
    import Image from "next/image";
    import proptypes from 'prop-types'; 
    

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
        <h3 className="text-[7px]">{movie.title}</h3>
        
        </div> 

    ) };
    MovieCard.propTypes = {
        movie: proptypes.shape({
            id: proptypes.number.isRequired,
            title: proptypes.string.isRequired,
            poster_path: proptypes.string,
            }), 
        };
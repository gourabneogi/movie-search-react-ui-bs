import React, { useState } from 'react'
import NavBar from './NavBar'

import moviesData from '../services/movies.json';
import MovieCard from './MovieCard';

export default function Container() {

    const [movies, setMovies] = useState(moviesData.data);

    const searchHandler = (f) => {
        setMovies(moviesData.data.filter(movie => movie.name.toLowerCase().includes(f.toLowerCase())));
    }

    return (
        <>
            <NavBar searchHandler={searchHandler} />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {
                    movies.map((movie, index) => {
                        return <MovieCard
                            key={index}
                            name={movie.name}
                            img={movie.img}
                            desc={movie.desc}
                            link={movie.link}
                        />
                    })
                }
            </div>
        </>
    )
}

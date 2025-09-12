'use client'

import { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard'
import './index.scss';
import axios from 'axios';
import {Movie} from '@/types/movie'

function index() {
    const [movies, setMovies] = useState<Movie[]>([]);
    
    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'aacb9f71f9f613586349f627939145d8',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        })
    }

    
  return (
    <ul className="movie-list">
        {movies.map((movie) => 
            <MovieCard
            key={movie.id}
            movie={movie}
            />
        )}
    </ul>
  )
}

export default index;
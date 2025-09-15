'use client'

import { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard'
import './index.scss';
import axios from 'axios';
import {Movie} from '@/types/movie'
import {ClipLoader} from 'react-spinners';

function index() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(true);
    
    const kim = 'Kimetsu';
    
    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'aacb9f71f9f613586349f627939145d8',
                language: 'pt-BR'
            }
        }).then(response => {
                setMovies(response.data.results);
               /*  console.log(response.data.results[0].title.split(' ')); */
            
        });
            setisLoading(false);
        }

    if(isLoading) {
        return (
            <div className="loadingContainer">
                <ClipLoader
                color='#fff'
                loading={isLoading}/>
            </div>
        )
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

{/* <MovieCard
            key={movie.id}
            movie={movie}
            /> */}
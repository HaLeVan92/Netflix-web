import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../app/apiService';
import { API_KEY } from '../app/config';



function List({dataMovie, title}) {
    const [movies, setMovies] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.get(`/movie/${dataMovie}?api_key=${API_KEY}`);
            
            setMovies(data.data.results);
        }
        fetchData();
    // eslint-disable-next-line    
    }, [])

    console.log(movies);

  return (
    <div className='list'>
        <h2 className='text-genres'>{title}</h2>
        <div className='row'>
            <div className='listMovies'>
                {movies?.map((movie) => (
                    
                    <div className='movie' onClick={() => navigate(`/detail/${movie.id}`)}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='Movie 1' width='360' height='500'/>                       
                        <h3 className='moviesName'>{`${movie.title}`}</h3>
                    </div>
                    
                ))}
                
            </div>
            <div className='btnLeft'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>             
            </div>
            <div className='btnRight'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>    
            </div>
        </div>
    </div>
  )
}

export default List


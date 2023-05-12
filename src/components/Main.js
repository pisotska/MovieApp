import React, { useState, useEffect } from 'react';
import MovieList from './MovieList/MovieList';




function Main(props) {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState("now_playing");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${category}?api_key=ac1a5cb6e5a08bee9bfb4ea291df63fe`
            );
            const data = await response.json();
            console.log(data)
            setMovies(data.results);
        };
        fetchData();
    }, [category]);

    const handleChangeCategory = (newCategory) => {
        setCategory(newCategory);
    };


    return (
        <div className="App">
            <div className="categories">
                <div className="categories_title">MovieApp</div>
                <button className="categories_item" onClick={() => handleChangeCategory('now_playing')}>Now Playing</button>
                <button className="categories_item" onClick={() => handleChangeCategory('popular')}>Popular</button>
                <button className="categories_item" onClick={() => handleChangeCategory('top_rated')}>Top Rated</button>
                <button className="categories_item" onClick={() => handleChangeCategory('upcoming')}>Upcoming</button>
            </div>
            <MovieList movies={movies}></MovieList>

        </div>
    );
}

export default Main;

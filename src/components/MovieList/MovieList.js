import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from "./styles.module.css"
import moment from 'moment';

const MovieList = ({ movies }) => {
    return (
        <div className={styles.movie_list}>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.original_title}
                    year={moment(movie.release_date).subtract(10, 'days').calendar()}
                    rating={movie.vote_average}
                    poster={movie.poster_path}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MovieList;

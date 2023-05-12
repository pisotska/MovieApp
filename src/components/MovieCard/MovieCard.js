import React from "react";
import { useState } from "react";
import styles from "./styles.module.css"
import MovieModal from "../MovieModal/MovieModal";



function MovieCard(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);

    const openModal = () => {
        fetch(`https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=ac1a5cb6e5a08bee9bfb4ea291df63fe`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setIsModalOpen(true);
            })
    };

    console.log(movieDetails)

    const closeModal = (event) => {
        event.stopPropagation(); // Зупиняє подальше поширення події кліку
        setIsModalOpen(false);
    };

    return (
        <div className={styles.movie_card} onClick={openModal} >
            <div className={styles.movie_img}>
                <img className={styles.img}
                    src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
                    alt={props.title}
                />
            </div>
            <div className={styles.movie_title}>{props.title}</div>
            <div className={styles.movie_info}>
                <div className={styles.movie_year}><span className={styles.span}>Year:</span> {props.year}</div>
                <div className={styles.movie_rating}><span className={styles.span}>Rating:</span> {props.rating}</div>
            </div>

            {isModalOpen && (
                <MovieModal
                    detail={movieDetails}
                    onCloseModal={closeModal}
                />
            )}


        </div>
    );
}
export default MovieCard;

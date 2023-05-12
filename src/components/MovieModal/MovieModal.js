import React from "react";
import styles from "./styles.module.css"


const MovieModal = (props) => {

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <button className={styles.close_button} onClick={props.onCloseModal}>x</button>
                <div className={styles.modal_content_container}>
                    <img className={styles.img}
                        src={`https://image.tmdb.org/t/p/w500/${props.detail.poster_path}`}
                        alt={props.detail.title}
                    />
                    <div className={styles.modal_item_container}>
                        <div className={styles.modal_item}><span className={styles.modal_span}>Original title:</span> {props.detail.title}</div>
                        <div className={styles.modal_item}><span className={styles.modal_span}>Tagline:</span> {props.detail.tagline}</div>
                        <div className={styles.modal_item}><span className={styles.modal_span}>Genre:</span> {props.detail.genres.map(genre => genre.name).join(', ')}</div>
                        <div className={styles.modal_item}><span className={styles.modal_span}>Duration: </span>{props.detail.runtime} minutes</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
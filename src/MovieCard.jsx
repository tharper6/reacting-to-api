import React from 'react';

const MovieCard = (props) => {
    return (
        <article className="col-md-8">
            <div className="card m-1 shadow">
                <div className="card-body bg-secondary">
                    <h3 className="title">Title: {props.movie.title} </h3>
                    <h6 className="description ">Description:</h6>
                    <p className="bg-info text-white p-2 border border-dark rounded" > {props.movie.description} </p>
                    <h6 className="director">Directed By:</h6>
                    <p className="bg-info text-white p-2 border border-dark rounded"> {props.movie.director} </p>
                </div>
            </div>
        </article>
    )
}

export default MovieCard;
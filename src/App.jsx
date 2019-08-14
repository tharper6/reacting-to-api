import React, { Component } from 'react';
import MovieCard from './MovieCard'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            movieHasLoaded: false,
            personHasLoaded: false
        };
    }


    async componentDidMount() {
        let res = await fetch("https://ghibliapi.herokuapp.com/films")
        let data = await res.json();
        this.setState({
            movies: data
        })
    }

    handleMovieButton = () => {
        this.setState({
            movieHasLoaded: true,
            personHasLoaded: false
        })
    }

    handlePersonButton = () => {
        this.setState({
            movieHasLoaded: false,
            personHasLoaded: true
        })
    }


    render() {
        if (this.state.movieHasLoaded === true && this.state.personHasLoaded === false) {
            return (
                <main className="container">
                    <section className="row justify-content-center">
                        {this.state.movies.map(movie => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })}
                    </section>
                </main>
            )
        } else if (this.state.movieHasLoaded === false && this.state.personHasLoaded === false) {
            return (
                <>
                <div className="row mt-2 justify-content-center" >
                    <button className="btn btn-primary col-md-3 my-3" onClick={this.handleMovieButton} >Load Films</button>
                    <button className="btn btn-primary col-md-3 my-3" onClick={this.handlePersonButton} >Load Person</button>
                </div>
                </>
            )
        } else if (this.state.movieHasLoaded === false && this.state.personHasLoaded === true) {
            return (
                <div className="row col-md-4 mt-2">
                <button onClick={this.handlePersonButton} >Load Person</button>
                </div>
            )
        }
    }
}

export default App;
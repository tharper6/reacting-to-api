import React, { Component } from 'react';
import MovieCard from './MovieCard'
import PeopleCard from './PeopleCard'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            people: [],
            movieHasLoaded: false,
            personHasLoaded: false
        };
    }


    async componentDidMount() {
        let resFilms = await fetch("https://ghibliapi.herokuapp.com/films")
        let dataFilms = await resFilms.json();
        this.setState({
            movies: dataFilms
        })
        let resPeople = await fetch("https://ghibliapi.herokuapp.com/people")
        let dataPeople = await resPeople.json();
        this.setState({
            people: dataPeople
        })

        // let resFilms = await fetch("https://ghibliapi.herokuapp.com/films")
        // let dataFilms = await resFilms.json();
        // let resPeople = await fetch("https://ghibliapi.herokuapp.com/people")
        // let dataPeople = await resPeople.json();
        // this.setState({
        //     movies: dataFilms,
        //     people: dataPeople
        // })
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
                <>
                    <main className='container my-2' >
                        <section className='row justify-content-around' >
                            <button className="btn btn-primary" onClick={this.handleMovieButton} >Load Films</button>
                            <button className="btn btn-primary" onClick={this.handlePersonButton} >Load People</button>
                        </section>
                        <section className="row justify-content-center">
                            {this.state.movies.map(movie => {
                                return (
                                    <MovieCard key={movie.id} movie={movie} />
                                )
                            })}
                        </section>
                    </main>
                </>
            )
        } else if (this.state.movieHasLoaded === false && this.state.personHasLoaded === false) {
            return (
                <>
                    <main className='container my-2' >
                        <section className='row justify-content-center ' >
                            <img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDT75-GAiTlLIjRQm_cJ3C815S--N8tdfVXIYvstzD3ltx25_HwA" alt="" />
                        </section>
                        <section className='row justify-content-around' >
                            <button className="btn btn-primary" onClick={this.handleMovieButton} >Load Films</button>
                            <button className="btn btn-primary" onClick={this.handlePersonButton} >Load People</button>
                        </section>
                    </main>
                </>
            )
        } else if (this.state.movieHasLoaded === false && this.state.personHasLoaded === true) {
            return (
                <main className='container my-2' >
                    <section className='row justify-content-around' >
                        <button className="btn btn-primary" onClick={this.handleMovieButton} >Load Films</button>
                        <button className="btn btn-primary" onClick={this.handlePersonButton} >Load People</button>
                    </section>
                    <section className='row justify-content-center my-2'>
                        {this.state.people.map(person => {
                            return(
                                <PeopleCard key={person.id} person={person} />
                            )
                        })}
                    </section>
                </main>
            )
        }
    }
}

export default App;
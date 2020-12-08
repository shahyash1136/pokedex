import React, { Component } from 'react';
import './Dashboard.scss';
import Pokemoncard from '../../Component/Pokemon-card/Pokemon-card';
import Button from '../../Component/Button/Button';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: null,
            nextPage: null,
            prevPage: null,
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
            this.setState({
                pokemons: response.data.results,
                nextPage: response.data.next,
                prevPage: response.data.previous,
            })
        })
    }

    prevBtn = () => {
        axios.get(this.state.prevPage).then(response => {
            this.setState({
                pokemons: response.data.results,
                nextPage: response.data.next,
                prevPage: response.data.previous,
            })
        })
    }
    nextBtn = () => {
        axios.get(this.state.nextPage).then(response => {
            this.setState({
                pokemons: response.data.results,
                nextPage: response.data.next,
                prevPage: response.data.previous,
            })
        })
    }

    render() {
        let markup;
        if (this.state.pokemons === null) {
            markup = 'Loading Data'
        } else {
            markup = this.state.pokemons.map(pokemon => {
                let pokemonUrl = pokemon.url;
                let pokemonNum = pokemonUrl.split('/')[pokemonUrl.split('/').length - 2];
                return <Pokemoncard key={pokemon.name} name={pokemon.name} number={pokemonNum} />
            })
        }

        let prevBtnClass = this.state.prevPage === null ? 'btn disable' : 'btn';
        let nextBtnClass = this.state.nextPage === null ? 'btn disable' : 'btn';

        return (
            <div className="main__container">
                <div className="dashboard">
                    <div className="dashboard__btn">
                        <Button btnValue={'Previous'} click={this.prevBtn} btnClass={prevBtnClass} />
                        <Button btnValue={'Next'} click={this.nextBtn} btnClass={nextBtnClass} />
                    </div>
                    <div className="dashboard__cards">
                        {markup}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
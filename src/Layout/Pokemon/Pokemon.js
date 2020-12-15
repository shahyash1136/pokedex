import React, { Component } from 'react';
import axios from 'axios';
import './Pokemon.scss';

const TYPE_COLORS = {
    bug: 'b1c12e',
    dark: '4f3a2d',
    dragon: '755edf',
    electric: 'fcbc17',
    fairy: 'f4b1f4',
    fighting: '823551d',
    fire: 'e73b0c',
    flying: 'a3b3f7',
    ghost: '6060b2',
    grass: '74c236',
    ground: 'd3b357',
    ice: 'a3e7fd',
    normal: 'c8c4bc',
    poison: '934594',
    psychic: 'ed4882',
    rock: 'b9a156',
    steel: 'b5b5c3',
    water: '3295F6'
};

class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            types: [],
            description: '',
            stats: {
                hp: '',
                attack: '',
                defence: '',
                speed: '',
                spAttack: '',
                spDefence: ''
            },
            height: '',
            weight: '',
            eggGroups: '',
            catchRate: '',
            abilities: '',
            genderRatioMale: '',
            genderRatioFemale: '',
            evs: '',
            hatchSteps: ''
        }
    }

    componentDidMount() {

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/25/`
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/25/`

        axios.get(pokemonUrl).then(res => {
            let data = res.data

            let types = data.types.map(type => {
                return type.type.name;
            });

            let abilities = data.abilities.map(el => {
                return el.ability.name;
            }).join(',');

            let height = Math.round((data.height * 0.328084) * 100) / 100;
            let weight = Math.round((data.weight * 0.220462) * 100) / 100;



            this.setState({
                id: data.id,
                name: data.name,
                types: types,
                abilities: abilities,
                height: height,
                weight: weight,
            })


        })

        axios.get(pokemonSpeciesUrl).then(res => {
            let data = res.data
            let hatchCount = 255 * (data.hatch_counter + 1);
            let eggGroups = data.egg_groups.map(el => {
                return el.name
            }).join(',')


            //console.log(eggGroups);
            this.setState({
                hatchSteps: hatchCount,
                eggGroups: eggGroups
            })
        })

    }



    render() {
        let typeSpan = this.state.types.map(el => {
            return <span key={el} style={{ backgroundColor: `#${TYPE_COLORS[el]}` }}>{el}</span>
        })
        return (
            <div className="main__container">
                <div className="pokemon">
                    <div className="pokemon__header">
                        <div className="pokemon__rank">
                            <span><em>#</em>{this.state.id}</span>
                        </div>
                        <div className="pokemon__type">
                            {typeSpan}
                        </div>
                    </div>
                    <div className="pokemon__body">
                        <div className="pokemon__body--left">
                            <div className="pokemon__imgBox">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.state.id}.svg`} alt='test' />
                            </div>
                            <h2 className="pokemon__name">{this.state.name}</h2>
                        </div>
                        <div className="pokemon__body--right">
                            <div className="pokemon__para">
                                <p>Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.</p>
                            </div>
                            <div className="pokemon__stats">
                                <div className="pokemon__statsBox">
                                    <div className="svgBox">
                                        <svg viewBox="0 0 36 36" className="circular-chart blue">
                                            <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <text x="18" y="20.35" className="percentage">75%</text>
                                        </svg>
                                    </div>
                                    <h4>HP</h4>
                                </div>
                                <div className="pokemon__statsBox">
                                    <div className="svgBox">
                                        <svg viewBox="0 0 36 36" className="circular-chart blue">
                                            <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <text x="18" y="20.35" className="percentage">75%</text>
                                        </svg>
                                    </div>
                                    <h4>Attack</h4>
                                </div>
                                <div className="pokemon__statsBox">
                                    <div className="svgBox">
                                        <svg viewBox="0 0 36 36" className="circular-chart blue">
                                            <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <text x="18" y="20.35" className="percentage">75%</text>
                                        </svg>
                                    </div>
                                    <h4>Defense</h4>
                                </div>
                                <div className="pokemon__statsBox">
                                    <div className="svgBox">
                                        <svg viewBox="0 0 36 36" className="circular-chart blue">
                                            <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <text x="18" y="20.35" className="percentage">75%</text>
                                        </svg>
                                    </div>
                                    <h4>Speed</h4>
                                </div>
                                <div className="pokemon__statsBox">
                                    <div className="svgBox">
                                        <svg viewBox="0 0 36 36" className="circular-chart blue">
                                            <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <text x="18" y="20.35" className="percentage">75%</text>
                                        </svg>
                                    </div>
                                    <h4>Sp Atk</h4>
                                </div>
                                <div className="pokemon__statsBox">
                                    <div className="svgBox">
                                        <svg viewBox="0 0 36 36" className="circular-chart blue">
                                            <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                            <text x="18" y="20.35" className="percentage">75%</text>
                                        </svg>
                                    </div>
                                    <h4>Sp Def</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="pokemon__profile">
                        <div className="pokemon__head">
                            <h2>Profile</h2>
                        </div>
                        <div className="pokemon__profileBox">
                            <div className="pokemon__profile--left">
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Height:</span>
                                    <div className="si-right">
                                        <span>{this.state.height} <em>ft</em></span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Weight:</span>
                                    <div className="si-right">
                                        <span>{this.state.weight} <em>lbs</em></span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Catch Rate:</span>
                                    <div className="si-right">
                                        <span>3.28<em>%</em></span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Gender Ratio:</span>
                                    <div className="si-right">
                                        <span> <em className="icon female"></em> 12.5<em>%</em> </span>
                                        <span> <em className="icon male"></em> 13.5<em>%</em> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pokemon__profile--right">
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Egg Groups:</span>
                                    <div className="si-right">
                                        <span>{this.state.eggGroups}</span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Hatch Steps:</span>
                                    <div className="si-right">
                                        <span>{this.state.hatchSteps}</span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="si-left">Abilities:</span>
                                    <div className="si-right">
                                        <span>{this.state.abilities}</span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="si-left">EVs:</span>
                                    <div className="si-right">
                                        <span>1 Special Attack, 1 Special Defense</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;
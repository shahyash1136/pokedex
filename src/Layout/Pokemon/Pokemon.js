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
            statsData: [],
            height: '',
            weight: '',
            eggGroups: '',
            catchRate: '',
            abilities: '',
            genderRatioMale: '',
            genderRatioFemale: '',
            evs: '',
            hatchSteps: '',
            themecolor: '',
        }
    }

    componentDidMount() {
        const { pokemonId } = this.props.match.params
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`

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


            let evs = data.stats
                .filter(stat => {
                    if (stat.effort > 0) {
                        return true;
                    }
                    return false;
                })
                .map(stat => {
                    return `${stat.effort} ${stat.stat.name
                        .toLowerCase()
                        .split('-')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}`;
                })
                .join(', ');


            this.setState({
                id: data.id,
                name: data.name,
                types: types,
                statsData: data.stats,
                abilities: abilities,
                height: height,
                weight: weight,
                evs: evs,
            })



        })

        axios.get(pokemonSpeciesUrl).then(res => {
            let data = res.data
            let hatchCount = 255 * (data.hatch_counter + 1);
            let eggGroups = data.egg_groups.map(el => {
                return el.name
            }).join(',')

            let dec = '';
            data.flavor_text_entries.some(el => {
                if (el.language.name === 'en') {
                    dec = el.flavor_text
                    return;
                }
            });

            let catchRate = Math.round((data.capture_rate / 255) * 100);

            let femaleRate = data.gender_rate;
            let femaleRatio = 12.5 * femaleRate;
            let maleRatio = 12.5 * (8 - femaleRate);



            console.log(dec);
            this.setState({
                hatchSteps: hatchCount,
                eggGroups: eggGroups,
                themecolor: data.color.name,
                description: dec,
                catchRate: catchRate,
                genderRatioMale: maleRatio,
                genderRatioFemale: femaleRatio
            })
        })

    }



    render() {
        //let statsBox = '';
        let statsBox = this.state.statsData.map(el => {
            let statVal = ''
            if (el.base_stat >= 100) {
                statVal = 100;
            } else {
                statVal = el.base_stat
            }

            return <div key={el.stat.name} className="pokemon__statsBox">
                <div className="svgBox">
                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                        <path className="circle-bg" d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        <path className="circle" strokeDasharray={`${statVal}, 100`} d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831" stroke={this.state.themecolor}></path>
                        <text x="18" y="20.35" className="percentage">{statVal}%</text>
                    </svg>
                </div>
                <h4>{el.stat.name}</h4>
            </div>
        });
        let typeSpan = this.state.types.map(el => {
            return <span key={el} style={{ backgroundColor: `#${TYPE_COLORS[el]}` }}>{el}</span>
        });


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
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.state.id}.svg`} alt={this.state.name} />
                            </div>
                            <h2 className="pokemon__name">{this.state.name}</h2>
                        </div>
                        <div className="pokemon__body--right">
                            <div className="pokemon__para">
                                <p>{this.state.description}</p>
                            </div>
                            <div className="pokemon__stats">
                                {statsBox}
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
                                    <span className="left">Height:</span>
                                    <div className="right">
                                        <span>{this.state.height} <em>ft</em></span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="left">Weight:</span>
                                    <div className="right">
                                        <span>{this.state.weight} <em>lbs</em></span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="left">Catch Rate:</span>
                                    <div className="right">
                                        <span>{this.state.catchRate}<em>%</em></span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="left">Gender Ratio:</span>
                                    <div className="right">
                                        <span> <em className="icon female"></em> {this.state.genderRatioFemale}<em>%</em> </span>
                                        <span> <em className="icon male"></em> {this.state.genderRatioMale}<em>%</em> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pokemon__profile--right">
                                <div className="pokemon__profileCard">
                                    <span className="left">Egg Groups:</span>
                                    <div className="right">
                                        <span>{this.state.eggGroups}</span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="left">Hatch Steps:</span>
                                    <div className="right">
                                        <span>{this.state.hatchSteps}</span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="left">Abilities:</span>
                                    <div className="right">
                                        <span>{this.state.abilities}</span>
                                    </div>
                                </div>
                                <div className="pokemon__profileCard">
                                    <span className="left">EVs:</span>
                                    <div className="right">
                                        <span>{this.state.evs}</span>
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
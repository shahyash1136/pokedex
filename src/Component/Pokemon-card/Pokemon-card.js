import React from 'react';
import './Pokemon-card.scss';
import { NavLink } from "react-router-dom";
const pokemoncard = (props) => {
    return (
        <div className="card">
            <NavLink to={`/pokemon/${props.number}`} className="card__container">
                <div className="card__top">
                    <div className="card__imgBox">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.number}.svg`} alt={props.name} />
                    </div>
                </div>
                <div className="card__bottom">
                    <span className="card__name">{props.name}</span>
                    <span className="card__number"><em>#</em>{props.number}</span>

                </div>
            </NavLink>
        </div>
    )
}

export default pokemoncard;
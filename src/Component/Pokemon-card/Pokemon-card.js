import React from 'react';
import './Pokemon-card.scss';
const pokemoncard = (props) => {
    return (
        <div className="card">
            <a href="#" className="card__container">
                <div className="card__top">
                    <div className="card__imgBox">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.number}.svg`} alt={props.name} />
                    </div>
                </div>
                <div className="card__bottom">
                    <span className="card__name">{props.name}</span>
                    <span className="card__number"><em>#</em>{props.number}</span>

                </div>
            </a>
        </div>
    )
}

export default pokemoncard;
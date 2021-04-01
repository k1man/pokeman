import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

function PokeCard({ pokemon }) {
  const [inPokedex, setInPokedex] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const pokeDex = JSON.parse(localStorage.getItem("pokeDex"));
    let totalPokemon = 0;
    if (pokeDex) {
      for (let i = 0; i < pokeDex.length; i++) {
        if (pokeDex[i].name === pokemon.name) {
          totalPokemon += 1;
        }
      }
    }
    setInPokedex(totalPokemon);
  }, []);

  return (
    <button
      className={css`
        display: flex;
        flex-direction: column;
        width: 240px;
        align-items: center;
        border-style: solid;
        border-radius: 15px;
        border-color: #10ac84;
        margin-top: 25px;
        margin-right: 10px;
        margin-bottom: 10px;
        background-color: white;
        color: black;
      `}
      onClick={(e) => {
        e.preventDefault();
        history.push(`/details/${pokemon.name}`);
      }}
    >
      <img
        className={css`
          width: 150px;
          margin-right: auto;
          margin-left: auto;
          @media (min-width: 600px) {
            width: 200px;
          }
        `}
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div
        className={css`
          margin: 10px;
        `}
      >
        <h5
          className={css`
            text-align: center;
          `}
        >
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </h5>
        <p className="card-text">Owned In PokeDex: {inPokedex}</p>
      </div>
    </button>
  );
}

export default PokeCard;

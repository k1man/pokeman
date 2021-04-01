import { useContext } from "react";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";
import { ListPokeDex } from "../context";

function PokeDexCard({ pokemon }) {
  const history = useHistory();
  const { pokeDex, setPokeDex } = useContext(ListPokeDex);
  const releasePokemon = (e) => {
    e.preventDefault();
    const newPokeDex = pokeDex.filter((pokemonDex) => {
      return pokemonDex.nickname !== pokemon.nickname;
    });
    setPokeDex(newPokeDex);
  };
  return (
    <div
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
        onClick={(e) => {
          e.preventDefault();
          history.push(`/details/${pokemon.name}`);
        }}
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
          Nickname: {pokemon.nickname}
        </h5>
        <h5
          className={css`
            text-align: center;
          `}
        >
          Species: {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </h5>
        <button
          className={css`
            width: 200px;
            background-color: #ee5253;
            border-color: #ee5253;
            border-style: solid;
            color: white;
            margin-bottom: 15px;
            border-radius: 15px;
          `}
          onClick={releasePokemon}
        >
          Release
        </button>
      </div>
    </div>
  );
}

export default PokeDexCard;

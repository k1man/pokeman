import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

function PokeCard({ pokemon }) {
  const history = useHistory();
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
        <h5 className="card-title">
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </h5>
        <p className="card-text">Owned Total: 0</p>
      </div>
    </button>
  );
}

export default PokeCard;

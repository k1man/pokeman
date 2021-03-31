import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import logo from "../assets/logo.png";
import backgroundLogo from "../assets/backgroundLogo.png";
import LoadingLogo from "../assets/loadingLogo.gif";
import PokeCard from "../components/PokeCard";
import { getPokemons } from "../queries";
import { useHistory } from "react-router-dom";

function Home() {
  const { loading, error, data } = useQuery(getPokemons);
  const history = useHistory();

  return (
    <Fragment>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: url(${backgroundLogo});
          height: 450px;
          @media (min-width: 600px) {
            height: 500px;
          }
        `}
      >
        <img
          className={css`
            width: 250px;
            margin: 0 auto;
            @media (min-width: 600px) {
              width: 400px;
            }
          `}
          src={logo}
          alt="pokeman"
        />
        <h3
          className={css`
            color: white;
            text-align: center;
          `}
        >
          Project Assignment for
          <br />
          Web Platform Engineers - Tokopedia
        </h3>
        <button
          type="button"
          className="btn btn-primary btn-lg mt-2"
          onClick={(e) => {
            e.preventDefault();
            history.push("/pokedex");
          }}
        >
          PokeDex
        </button>
      </div>
      <h1
        className={css`
          margin-top: 40px;
          text-align: center;
          color: #4a5568;
        `}
      >
        Pokemon List
      </h1>
      {loading ? (
        <div
          className={css`
            display: flex;
            align-items: center;
          `}
        >
          <img
            className={css`
              width: 300px;
              margin-right: auto;
              margin-left: auto;
              @media (min-width: 600px) {
                width: 350px;
              }
            `}
            src={LoadingLogo}
            alt="loadingPokemon"
          />
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {data.pokemons.results.map((pokemon) => {
            return <PokeCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      )}
    </Fragment>
  );
}

export default Home;

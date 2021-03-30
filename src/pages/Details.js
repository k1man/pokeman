import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getPokemon } from "../queries";
import { css } from "@emotion/css";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ModalForm from "../components/ModalForm";
import LoadingLogo from "../assets/loadingLogo.gif";
import CatchingLogo from "../assets/catchingLogo.gif";

function Details() {
  const [loadingCatch, setLoading] = useState(false);
  const [catchPokemon, setCatchPokemon] = useState({
    success: false,
    failed: false,
  });
  const { name } = useParams();
  const { loading, error, data } = useQuery(getPokemon, {
    variables: { name: `${name}` },
  });
  const catchPoke = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (Math.round(Math.random())) {
        console.log("ketangkep");
        setCatchPokemon({ ...catchPokemon, success: true });
        setLoading(false);
      } else {
        console.log("ga ketangkep");
        setCatchPokemon({ ...catchPokemon, failed: true });
        setLoading(false);
      }
    }, 3000);
  };
  return (
    <div>
      <Navbar />
      {catchPokemon.success && <ModalForm name={data.pokemon.name} />}
      {loading ? (
        <img
          className={css`
            width: 300px;
            align-items: center;
            @media (min-width: 600px) {
              width: 350px;
            }
          `}
          src={LoadingLogo}
          alt="loadingPokemon"
        />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <div
          className={css`
            text-align: center;
          `}
        >
          <h1
            className={css`
              margin-top: 25px;
            `}
          >
            {data.pokemon.name[0].toUpperCase() + data.pokemon.name.slice(1)}
          </h1>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              @media (min-width: 600px) {
                flex-direction: row;
              }
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
              src={
                loadingCatch ? CatchingLogo : data.pokemon.sprites.front_default
              }
              alt={data.pokemon.name}
            />
            <button
              className={css`
                width: 300px;
                background-color: #ee5253;
                border-color: #ee5253;
                border-style: solid;
                color: white;
                margin-bottom: 15px;
                border-radius: 15px;
              `}
              onClick={catchPoke}
            >
              {loadingCatch ? "Catching...." : "Catch"}
            </button>
            <div
              className={css`
                width: 300px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
                text-align: left;
                border-radius: 15px;
                background-color: #00b894;
                @media (min-width: 600px) {
                  width: 350px;
                }
              `}
            >
              <div
                className={css`
                  margin: 15px;
                  color: white;
                `}
              >
                <h3>Height</h3>
                <h5
                  className={css`
                    color: black;
                  `}
                >
                  {data.pokemon.height} feet
                </h5>
              </div>
              <div
                className={css`
                  margin: 15px;
                  color: white;
                `}
              >
                <h3>Weight</h3>
                <h5
                  className={css`
                    color: black;
                  `}
                >
                  {data.pokemon.weight} lbs
                </h5>
              </div>
              <div
                className={css`
                  margin: 15px;
                  color: white;
                `}
              >
                <h3>Abilities</h3>
                {data.pokemon.abilities.map((ability, index) => {
                  return (
                    <h5
                      className={css`
                        color: black;
                      `}
                      key={index}
                    >
                      - {ability.ability.name}
                    </h5>
                  );
                })}
              </div>
              <div
                className={css`
                  margin: 15px;
                  color: white;
                `}
              >
                <h3>Types</h3>
                {data.pokemon.types.map((type, index) => {
                  return (
                    <h5
                      className={css`
                        color: black;
                      `}
                      key={index}
                    >
                      - {type.type.name}
                    </h5>
                  );
                })}
              </div>
            </div>
            <div
              className={css`
                width: 300px;
                margin-top: 15px;
                border-radius: 15px;
              `}
            >
              <h3>Moves</h3>
              <div
                className={css`
                  width: 300px;
                  border-radius: 15px;
                  background-color: #0984e3;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  padding: 15px;
                  margin-bottom: 15px;
                `}
              >
                {data.pokemon.moves.map(({ move }, index) => {
                  return <p key={index}> - {move.name}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;

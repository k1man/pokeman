import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/css";
import CatchingLogo from "../assets/catchingLogo.gif";
import Pokedex from "../assets/pokedex.gif";
import { CatchPokemon } from "../context";

function ModalForm({ pokemon }) {
  const history = useHistory();
  const [nickname, setNickname] = useState("");
  const [pokeDex, setPokeDex] = useState([]);
  const [successAdd, setSuccessAdd] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const { catchPokemon, setCatchPokemon } = useContext(CatchPokemon);

  useEffect(() => {
    const pokeDex = JSON.parse(localStorage.getItem("pokeDex")) || [];
    setPokeDex(pokeDex);
  }, []);

  useEffect(() => {
    localStorage.setItem("pokeDex", JSON.stringify(pokeDex));
  }, [pokeDex]);

  const input = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const addPokeDex = (e) => {
    let count = 0;
    e.preventDefault();
    for (let i = 0; i < pokeDex.length; i++) {
      if (pokeDex[i].nickname.toLowerCase() === nickname.toLowerCase()) {
        count += 1;
      }
    }

    if (!count) {
      setPokeDex([
        ...pokeDex,
        {
          nickname,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
        },
      ]);
      setSuccessAdd(true);
    } else {
      setDuplicate(true);
    }
  };

  return (
    <div>
      {successAdd ? (
        <div
          className={css`
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
          `}
        >
          <div
            className={css`
              background: white;
              border-radius: 5px;
              width: 300px;
              padding: 20px;
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 1;
              text-align: center;
            `}
          >
            <img
              className={css`
                width: 200px;
                margin: 15px;
              `}
              src={Pokedex}
              alt="PokeBall"
            />
            <h4>
              Success Adding{" "}
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} to PokeDex
            </h4>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/pokedex");
                }}
              >
                Go To PokeDex
              </button>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setCatchPokemon({ ...catchPokemon, success: false });
                }}
              >
                Catch Again
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={css`
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
          `}
        >
          <div
            className={css`
              background: white;
              border-radius: 5px;
              width: 300px;
              padding: 20px;
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 1;
              text-align: center;
            `}
          >
            <img
              className={css`
                width: 250px;
              `}
              src={CatchingLogo}
              alt="PokeBall"
            />
            <h4>
              Success Catch{" "}
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            </h4>
            <form onSubmit={addPokeDex}>
              <div className="mb-3">
                {duplicate && (
                  <button
                    className={css`
                      width: 250px;
                      background-color: #ee5253;
                      border-color: #ee5253;
                      border-style: solid;
                      color: white;
                      margin-bottom: 15px;
                      border-radius: 15px;
                    `}
                    disabled="disabled"
                  >
                    Duplicate Nickname
                  </button>
                )}
                <label className="form-label">Nickname</label>
                <input
                  type="text"
                  className="form-control"
                  value={nickname}
                  onChange={input}
                  required
                />
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                `}
              >
                <button type="submit" className="btn btn-primary">
                  Add to PokeDex
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    setCatchPokemon({ ...catchPokemon, success: false });
                  }}
                >
                  Release
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalForm;

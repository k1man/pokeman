import React, { useContext } from "react";
import { css } from "@emotion/css";
import Pokeball from "../assets/emptyPokeball.gif";
import { CatchPokemon } from "../context";

function ModalFailed({ name }) {
  const { catchPokemon, setCatchPokemon } = useContext(CatchPokemon);
  return (
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
          `}
          src={Pokeball}
          alt="PokeBall"
        />
        <h4>You Failed Catch {name[0].toUpperCase() + name.slice(1)}</h4>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            setCatchPokemon({ ...catchPokemon, failed: false });
          }}
        >
          Catch Again
        </button>
      </div>
    </div>
  );
}

export default ModalFailed;

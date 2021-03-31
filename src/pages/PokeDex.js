import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Navbar from "../components/Navbar";
import PokedexCard from "../components/PokeDexCard";
import Pokedex from "../assets/errorPokedex.gif";
import { ListPokeDex } from "../context";

function PokemonDex() {
  const [pokeDex, setPokeDex] = useState([]);

  useEffect(() => {
    const pokeDex = JSON.parse(localStorage.getItem("pokeDex")) || [];
    setPokeDex(pokeDex);
  }, []);

  useEffect(() => {
    localStorage.setItem("pokeDex", JSON.stringify(pokeDex));
  }, [pokeDex]);

  return (
    <div>
      <ListPokeDex.Provider value={{ pokeDex, setPokeDex }}>
        <Navbar />
        <h2
          className={css`
            margin-top: 15px;
            text-align: center;
          `}
        >
          My PokeDex
        </h2>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {pokeDex.length === 0 ? (
            <div
              className={css`
                text-align: center;
              `}
            >
              <img
                className={css`
                  width: 200px;
                  margin: 15px;
                  @media (min-width: 600px) {
                    width: 350px;
                  }
                `}
                src={Pokedex}
                alt="PokeBall"
              />
              <h3>PokeDex Empty</h3>
              <h4>Please Catch a Pokemon and add to PokeDex</h4>
            </div>
          ) : (
            pokeDex.map((pokemon, index) => {
              return <PokedexCard pokemon={pokemon} key={index} />;
            })
          )}
        </div>
      </ListPokeDex.Provider>
    </div>
  );
}

export default PokemonDex;

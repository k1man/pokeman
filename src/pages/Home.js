import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { getPokemon } from "../queries/getPokemons";

function Home() {
  const { loading, error, data } = useQuery(getPokemon);

  return (
    <Fragment>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>{JSON.stringify(data.pokemons)}</div>
      )}
    </Fragment>
  );
}

export default Home;

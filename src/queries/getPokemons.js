import { gql } from "@apollo/client";

export const getPokemon = gql`
  query pokemons {
    pokemons(limit: 20) {
      results {
        url
        name
        image
      }
    }
  }
`;

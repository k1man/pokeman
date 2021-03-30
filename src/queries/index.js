import { gql } from "@apollo/client";

export const getPokemons = gql`
  query pokemons {
    pokemons(limit: 15) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export const getPokemon = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      moves {
        move {
          url
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      height
      weight
      species {
        name
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

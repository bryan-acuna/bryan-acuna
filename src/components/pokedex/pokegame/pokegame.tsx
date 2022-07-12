import Pokedex, { PokedexProps } from "../pokedex/Pokedex";
import { PokecardProps } from "../pokecard/Pokecard";

const Pokegame = ({ pokemon }: PokedexProps) => {
  const newArray = [...pokemon].sort(() => 0.5 - Math.random());
  const calculateTotal = (pokemonList: PokecardProps[]) => {
    return pokemonList.reduce((p, c) => {
      return p + c.base_experience;
    }, 0);
  };
  const pokemon1 = newArray.slice(0, 4);
  const pokemon2 = newArray.slice(4);

  return (
    <div>
      <Pokedex
        total={calculateTotal(pokemon1)}
        pokemon={pokemon1}
        isWinner={calculateTotal(pokemon1) > calculateTotal(pokemon2)}
      />
      <Pokedex
        total={calculateTotal(pokemon2)}
        pokemon={pokemon2}
        isWinner={calculateTotal(pokemon2) > calculateTotal(pokemon1)}
      />
    </div>
  );
};

export default Pokegame;

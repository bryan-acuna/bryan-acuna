import Pokedex from "./pokedex/Pokedex";
import styles from "./MainPokedex.module.css";
import Pokegame from "./pokegame/pokegame";

const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const MainPokedex = () => {
  return (
    <div>
      <Pokegame pokemon={pokemon} />
    </div>
  );
};

export default MainPokedex;

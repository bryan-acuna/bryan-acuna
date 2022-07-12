import Pokecard, { PokecardProps } from "../pokecard/Pokecard";
import styles from "../MainPokedex.module.css";

export interface PokedexProps {
  pokemon: PokecardProps[];
  total?: number;
  isWinner?: boolean;
}

const Pokedex = ({ pokemon, total, isWinner }: PokedexProps) => {
  return (
    <div className={styles.pokedex}>
      <p className={isWinner ? styles.pokedex_winner : styles.pokedex_lost}>
        {isWinner ? "Winner" : "Loser"}
      </p>
      <p>Total Experience {total}</p>

      <div className={styles.pokedex_cards}>
        {pokemon.length > 0 &&
          pokemon.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          ))}
      </div>
    </div>
  );
};

export default Pokedex;

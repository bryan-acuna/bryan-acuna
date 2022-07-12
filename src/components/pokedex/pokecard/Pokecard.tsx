import styles from "../MainPokedex.module.css";

export interface PokecardProps {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

const Pokecard = ({ id, name, base_experience, type }: PokecardProps) => {
  const newId = id < 10 ? `00${id}` : id > 10 && id < 100 ? `0${id}` : id;
  return (
    <div className={styles.pokecard}>
      <h1 className={styles.pokecard_title}>{name}</h1>
      <div className={styles.pokecard_image}>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`}
          alt=""
        />
      </div>
      <p className={styles.pokecard_data}>{`Type: ${type}`}</p>
      <p className={styles.pokecard_data}>{`EXP: ${base_experience}`}</p>
    </div>
  );
};

export default Pokecard;

import styles from "./HomeHeaders.module.css";

interface HomeHeadersProps {
  main: string;
  sub: string;
}

const HomeHeaders = ({ main, sub }: HomeHeadersProps) => {
  return (
    <>
      <h5 className={styles.header__h5}>{main}</h5>
      <h2 className={styles.header__h2}>{sub}</h2>
    </>
  );
};

export default HomeHeaders;

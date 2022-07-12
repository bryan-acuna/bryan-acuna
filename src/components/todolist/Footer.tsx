import styles from "./ToDoList.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.notes_footer}>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;

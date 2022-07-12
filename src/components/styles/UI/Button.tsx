interface Props {
  children: string;
}

const Button: React.FC<Props> = ({ children }) => {
  return <button type="submit">{children}</button>;
};

export default Button;

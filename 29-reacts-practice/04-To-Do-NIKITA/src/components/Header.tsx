import "../index.css";

interface ITitle {
  title: string;
}

const Header = ({ title }: ITitle) => {
  return (
    <header className="header">
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

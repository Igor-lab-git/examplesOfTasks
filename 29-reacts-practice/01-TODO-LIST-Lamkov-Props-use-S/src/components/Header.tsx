interface ITitlte {
    title: string;
}

const Header = ({title}: ITitlte) => {
  return (
    <>
      <h1 className="todo__title">{title}</h1>
    </>
  );
};

export default Header;

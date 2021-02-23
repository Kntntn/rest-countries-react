const Header = ({toggleTheme}) => {
  return (
    <header>
      <h2>Where in the world?</h2>
      <div className="darkmode-toggle">
        <i className="fas fa-moon"></i>
        <button onClick={toggleTheme}>Dark Mode</button>
      </div>
    </header>
  );
};

export default Header;

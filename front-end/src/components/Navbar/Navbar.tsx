import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src="src\assets\logo.svg" alt="" className="navbar-logo" />
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">Home</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">Patrimônios</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">Relátorios</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">Configurações</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">Ajuda</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">Sair</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src="src\assets\logo.svg" alt="" className="navbar-logo" />
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="http://localhost:5173/">Home</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="http://localhost:5173/cadastro">Cadastro de Patrimônios</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="http://localhost:5173/consulta">Consulta de Patrimônios</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">#####</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">#####</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\config.svg" alt="" />
          <a href="#">#####</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

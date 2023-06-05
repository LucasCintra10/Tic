import "./Navbar.css";

/*Função principal do componente de navbar. */
function Navbar() {
  return (
    
    <div className="navbar-container">
      {/*Botões que redirecionam para as páginas de cadastro e consulta. */}
      <img src="src\assets\logo.svg" alt="" className="navbar-logo" />
      <ul className="navbar-list">
        <li className="navbar-item">
          <img src="src\assets\home-icon.svg" alt="" />
          <a href="http://localhost:5173/">Home</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\cad-icon.svg" alt="" />
          <a href="http://localhost:5173/cadastro">Cadastro de Patrimônios</a>
        </li>
        <li className="navbar-item">
          <img src="src\assets\consult-icon.svg" alt="" />
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

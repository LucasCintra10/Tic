import "./Form.css";
import { useState, FormEvent } from "react";
import api from "../../lib/axios";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [id, setID] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState(0);
  const [dataEntrada, setDataEntrada] = useState("");
  const [estadoConservacao, setEstadoConservacao] = useState("Execelente");
  const [valor, setValor] = useState(0);
  const [localizacao, setLocalizacao] = useState(0);

  const patrimonio = {
    id,
    descricao,
    categoria,
    dataEntrada,
    estadoConservacao,
    valor,
    localizacao,
    status: "Ativo",
  };

  function createPatrimonio(event: FormEvent) {
    event.preventDefault();
    api
      .post("/cadastro", patrimonio)
      .then(() => toast.success("Patrimônio cadastrado com sucesso!"))
      .catch(() => toast.error("Erro ao cadastrar patrimônio!"));
  }

  return (
    <div className="form-container">
      <div>
        <Toaster />
      </div>
      <form className="form-list" onSubmit={createPatrimonio}>
        <ul>
          <li className="form-item">
            <label>ID do Patrimonio</label>
            <input
              type="string"
              onChange={(event) => setID(parseInt(event.target.value))}
            />
          </li>
          <li className="form-item">
            <label>Descrição</label>
            <input
              type="text"
              onChange={(event) => setDescricao(event.target.value)}
            />
          </li>
          <li className="form-item">
            <label>Categoria</label>
            <input
              type="text"
              onChange={(event) => setCategoria(parseInt(event.target.value))}
            />
          </li>
          <li className="form-item">
            <label>Data de entrada</label>
            <input
              type="date"
              onChange={(event) => setDataEntrada(event.target.value)}
            />
          </li>
          <li className="form-item">
            <label>Estado de conservação</label>
            <select
              onChange={(event) => setEstadoConservacao(event.target.value)}
            >
              <option value="Execelente">Execelente</option>
              <option value="Otimo">Ótimo</option>
              <option value="Regular">Regular</option>
              <option value="Ruim">Ruim</option>
              <option value="Pessimo">Péssimo</option>
            </select>
          </li>
          <li className="form-item">
            <label>Valor</label>
            <input
              type="text"
              onChange={(event) => setValor(parseInt(event.target.value))}
            />
          </li>
          <li className="form-item">
            <label>Localização</label>
            <input
              type="text"
              onChange={(event) => setLocalizacao(parseInt(event.target.value))}
            />
          </li>
        </ul>
        <button type="submit" className="form-btn">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Form;

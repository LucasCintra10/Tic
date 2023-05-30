import "./FormUpdate.css";
import { useState, useEffect, FormEvent } from "react";
import { TableData } from "../../models/table-data";
import { CategoryData, LocationData } from "../../models/auxiliary-data";
import toast, { Toaster } from "react-hot-toast";
import api from "../../lib/axios";

function FormUpdate(props: TableData) {
  const [categorias, setCategorias] = useState<CategoryData[]>([]);

  function getCategorias() {
    api.get("/consulta/categoria").then((response) => {
      setCategorias(response.data);
    });
  }

  const [localizacoes, setLocalizacoes] = useState<LocationData[]>([]);

  function getLocalizacoes() {
    api.get("/consulta/localizacao").then((response) => {
      setLocalizacoes(response.data);
    });
  }

  useEffect(() => {
    getCategorias(), getLocalizacoes();
  }, []);

  const [placa, setPlaca] = useState(props.placa);
  const [descricao, setDescricao] = useState(props.descricao);
  const [categoria, setCategoria] = useState(props.id_categoria);
  const [dataEntrada, setDataEntrada] = useState(props.dataEntrada);
  const [estadoConservacao, setEstadoConservacao] = useState(props.estado);
  const [valor, setValor] = useState(props.valor);
  const [status, setStatus] = useState(props.status);
  const [localizacao, setLocalizacao] = useState(props.id_localizacao);

  const patrimonioUpdate = {
    id: props.id,
    placa,
    descricao,
    categoria,
    dataEntrada,
    estadoConservacao,
    valor,
    localizacao,
    status,
  };

  function updatePatrimonio(event: FormEvent) {
    event.preventDefault();
    
    api
    .patch("/atualizar", patrimonioUpdate)
    .then(() => toast.success("Patrimônio atualizado com sucesso!"))
    .catch(() => toast.error("Erro ao atualizar patrimônio!"));
  }

  return (
    <div className="form-update-container">
      <div>
        <Toaster />
      </div>
      <form className="form-update" onSubmit={updatePatrimonio}>
        <ul>
          <li className="form-update-item">
            <label htmlFor="placa">Placa</label>
            <input
              type="text"
              name="placa"
              id="placa"
              value={placa}
              onChange={(event) => {
                setPlaca(event.target.value);
              }}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="descricao">Descricao</label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              value={descricao}
              onChange={(event) => {
                setDescricao(event.target.value);
              }}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="categoria">Categoria</label>
            <select
              onChange={(event) => setCategoria(parseInt(event.target.value))}
            >
              {categorias.map((categoria) => (
                <option value={categoria.id}>{categoria.nm_categoria}</option>
              ))}
            </select>
          </li>
          <li className="form-update-item">
            <label htmlFor="dataEntrada">Data de Entrada</label>
            <input
              type="string"
              name="dataEntrada"
              id="dataEntrada"
              value={new Date(dataEntrada).toLocaleDateString()}
              onChange={(event) => {
                setDataEntrada(event.target.value);
              }}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="estado">Estado</label>
            <select
              onChange={(event) => {
                setEstadoConservacao(event.target.value);
              }}
            >
              <option value="Execelente">Execelente</option>
              <option value="Otimo">Ótimo</option>
              <option value="Regular">Regular</option>
              <option value="Ruim">Ruim</option>
              <option value="Pessimo">Péssimo</option>
            </select>
          </li>
          <li className="form-update-item">
            <label htmlFor="valor">Valor</label>
            <input
              type="text"
              name="valor"
              id="valor"
              value={valor}
              onChange={(event) => {
                setValor(parseInt(event.target.value));
              }}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="status">Status</label>
            <select
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </li>
          <li className="form-update-item">
            <label htmlFor="localizacao">Localizacao</label>
            <select
              onChange={(event) => setLocalizacao(parseInt(event.target.value))}
            >
              {localizacoes.map((localizacao) => (
                <option value={localizacao.id}>{localizacao.nm_sala}</option>
              ))}
            </select>
          </li>
        </ul>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default FormUpdate;

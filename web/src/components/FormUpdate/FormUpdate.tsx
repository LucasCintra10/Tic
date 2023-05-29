import "./FormUpdate.css";
import { useState } from "react";
import { TableData } from "../../models/table-data";

function FormUpdate(props: TableData) {
    const [placa, setPlaca] = useState(props.placa);
  return (
    <div className="form-update-container">
      <form className="form-update">
        <ul>
          <li className="form-update-item">
            <label htmlFor="placa">Placa</label>
            <input type="text" name="placa" id="placa" value={props.placa} onChange={(event) => {setPlaca(event.target.value)}} />
          </li>
          <li className="form-update-item">
            <label htmlFor="descricao">Descricao</label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              value={props.descricao}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="categoria">Categoria</label>
            <input
              type="text"
              name="categoria"
              id="categoria"
              value={props.nm_categoria}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="dataEntrada">Data de Entrada</label>
            <input
              type="text"
              name="dataEntrada"
              id="dataEntrada"
              value={new Date(props.dataEntrada).toLocaleDateString()}
            />
          </li>
          <li className="form-update-item">
            <label htmlFor="estado">Estado</label>
            <input 
            type="text" 
            name="estado" 
            id="estado" 
            value={props.estado} />
          </li>
          <li className="form-update-item">
            <label htmlFor="valor">Valor</label>
            <input 
            type="text" 
            name="valor" 
            id="valor" 
            value={props.valor} />
          </li>
          <li className="form-update-item">
            <label htmlFor="status">Status</label>
            <input 
            type="text" 
            name="status" 
            id="status" 
            value={props.status} />
          </li>
          <li className="form-update-item">
            <label htmlFor="localizacao">Localizacao</label>
            <input
              type="text"
              name="localizacao"
              id="localizacao"
              value={props.nm_sala}
            />
          </li>
        </ul>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default FormUpdate;

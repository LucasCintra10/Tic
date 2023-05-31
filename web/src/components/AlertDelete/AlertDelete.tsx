import { TableData } from "../../models/table-data";
import "./AlertDelete.css";
import api from "../../lib/axios";

function AlertDelete(props: TableData) {
    
    const id = props.id;
    function deletePatrimonio() {
    
    api
      .delete(`/deletar/:${id}`)
      .then(() => alert("Patrimonio deletado com sucesso!"))
      .catch(() => alert("Erro ao deletar patrimonio!"));
  }

  return (
    <div className="alert-delete-container">
      <div className="alert-delete-content">
        <h1>Tem certeza que deseja excluir este patrimonio ?</h1>
        <p>Placa: {props.placa}</p>
        <div className="alert-delete-btns">
          <button onClick={deletePatrimonio}>Sim</button>
          <button>Não</button>
        </div>
      </div>
    </div>
  );
}

export default AlertDelete;

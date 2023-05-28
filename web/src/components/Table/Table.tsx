import api from "../../lib/axios";
import { useEffect, useState } from "react";
import "./Table.css";
import { TableData } from "../../models/table-data";

function Table() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  function getTableData() {
    api.get("/consulta").then((response) => setTableData(response.data));
  }

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead className="table-header">
          <tr>
            <th>Placa</th>
            <th>Descricao</th>
            <th>Categoria</th>
            <th>Data de Entrada</th>
            <th>Estado</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Localizacao</th>
          </tr>
        </thead>

        {tableData?.length > 0 ? (
          tableData.map((data) => (
            <tbody className="table-body">
              <tr>
                <td>{data.placa}</td>
                <td>{data.descricao}</td>
                <td>{data.nm_categoria}</td>
                <td>{new Date(data.dataEntrada).toLocaleDateString()}</td>
                <td>{data.estado}</td>
                <td>{data.valor}</td>
                <td>{data.status}</td>
                <td>{data.nm_sala}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <p>Nenhum dado encontrado</p>
        )}
      </table>
    </div>
  );
}

export default Table;

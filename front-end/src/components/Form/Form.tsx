import "./Form.css";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  id: number;
  descricao: string;
  categoria: string;
  dataEntrada: string;
  estadoConservacao: string;
  valor: number;
  localizacao: string;

}

function Form() {

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);



  return (
    <div className="form-container">
      <form className="form-list" onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li className="form-item">
            <label>ID do Patrimonio</label>
            <input type="text" {...register("id")}/>
          </li>
          <li className="form-item">
            <label>Descrição</label>
            <input type="text" {...register("descricao")} />
          </li>
          <li className="form-item">
            <label>Categoria</label>
            <input type="text" {...register("categoria")}/>
          </li>
          <li className="form-item">
            <label>Data de entrada</label>
            <input type="date" {...register("dataEntrada")}/>
          </li>
          <li className="form-item">
            <label>Estado de conservação</label>
            <select {...register("estadoConservacao")}>
              <option value="Execelente">Execelente</option>
              <option value="Otimo">Ótimo</option>
              <option value="Regular">Regular</option>
              <option value="Ruim">Ruim</option>
              <option value="Pessimo">Péssimo</option>
            </select>
          </li>
          <li className="form-item">
            <label>Valor</label>
            <input type="text" {...register("valor")}/>
          </li>
          <li className="form-item">
            <label>Localização</label>
            <input type="text"{...register("localizacao")} />
          </li>
        </ul>
        <button type="submit" className="form-btn">Cadastrar</button>
      </form>
      
    </div>
  );
}

export default Form;

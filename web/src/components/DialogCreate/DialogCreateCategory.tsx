import "./DialogCreate.css";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import api from "../../lib/axios";
import toast from "react-hot-toast";

function DialogCreateCategory(props : any) {

    const [categoria, setCategoria] = useState("");

    const novaCategoria = {
        categoria
    }

    function createCategoria() {
        
        api
        .post(`/cadastro/${props.tipo}`, novaCategoria)
        .then(() => toast.success("Categoria cadastrada com sucesso!"))
        .catch(() => toast.error("Erro ao cadastrar categoria!"))
    }
    

  return (
    <Dialog.Root>
      <Dialog.Trigger type="button" className="modal-trigger">+</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <Dialog.DialogClose className="modal-btn-close">X</Dialog.DialogClose>
          <Dialog.DialogTitle className="modal-title">Adicionar nova {props.tipo}</Dialog.DialogTitle>
          <div>
          <label>Nome da nova {props.tipo}:</label>
          <input type="text" onChange={(event) => setCategoria(event.target.value)} />
          </div>
          <button type="submit" onClick={createCategoria}>Adicionar</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogCreateCategory;

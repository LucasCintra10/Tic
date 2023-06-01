import "./DialogCreate.css";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import api from "../../lib/axios";
import toast from "react-hot-toast";

function DialogCreateLocation(props : any) {

    const [localizacao, setLocalizacao] = useState("");

    const novaLocalizacao = {
        localizacao
    }

    function createLocalizacao() {
        
        api
        .post(`/cadastro/Localizacao`, novaLocalizacao)
        .then(() => toast.success("Localização cadastrada com sucesso!"))
        .catch(() => toast.error("Erro ao localização categoria!"))
    }
    

  return (
    <Dialog.Root>
      <Dialog.Trigger type="button" >+</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <Dialog.DialogClose className="modal-btn-close">X</Dialog.DialogClose>
          <Dialog.DialogTitle className="modal-title">Adicionar nova {props.tipo}</Dialog.DialogTitle>
          <div>
          <label>Nome da nova {props.tipo}:</label>
          <input type="text" onChange={(event) => setLocalizacao(event.target.value)} />
          </div>
          <button type="submit" onClick={createLocalizacao}>Adicionar</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogCreateLocation;

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./AlertDelete.css";
import { TableData } from "../../models/table-data";
import api from "../../lib/axios";
import toast, { Toaster } from "react-hot-toast";

function AlertDelete(props: TableData) {
  function deletePatrimonio() {
    api
      .delete(`/deletar/${props.id}`)
      .then(() => toast.success("Patrimonio deletado com sucesso!"))
      .catch(() => toast.error("Erro ao deletar patrimonio!"));
  }

  return (
    <AlertDialog.Root>
      <div>
        <Toaster />
      </div>
      <AlertDialog.Trigger asChild>
        <button className="Button violet">
          <img src="src\assets\delete-icon.svg" alt="" />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="alert-overlay" />
        <AlertDialog.Content className="alert-content">
          <AlertDialog.Title className="alert-title">
            Você tem certeza que deseja excluir o registro ?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Está ação não pode ser desfeita. O patrimonio: {props.placa} será
            excluido permanentemente.
          </AlertDialog.Description>
          <div>
            <AlertDialog.Action asChild>
              <button className="alert-btn" onClick={deletePatrimonio}>
                Sim, excluir o registro
              </button>
            </AlertDialog.Action>
            <AlertDialog.Cancel asChild>
              <button className="alert-btn">Cancelar</button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default AlertDelete;


import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './AlertDelete.css';
import { TableData } from '../../models/table-data';
import api from '../../lib/axios';
import toast, { Toaster } from 'react-hot-toast';

function AlertDelete (props : TableData) {
  
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
      <button className="Button violet">X</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="alert-overlay" />
      <AlertDialog.Content className="alert-content">
        <AlertDialog.Title className="AlertDialogTitle">Você tem certeza que deseja excluir o registro ?</AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          Está ação não pode ser desfeita. O patrimonio: {props.placa} será excluido permanentemente.
        </AlertDialog.Description>
        <div>
          <AlertDialog.Cancel asChild>
            <button>Cancelar</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button onClick={deletePatrimonio}>Sim, excluir o registro</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
  )
  }

export default AlertDelete;

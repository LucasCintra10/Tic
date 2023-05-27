import { SyntheticEvent } from 'react';
import api from '../../lib/axios';
import './Table.css';

function Table() {

    async function receberDados(){
       
        const retorno = await api.get('/consulta').then((response) => {
            return response.data;
        })
        return retorno;
    }
    console.log(receberDados())

    return (
       
        <div className="table-container">
            
        </div>
    )
}

export default Table;
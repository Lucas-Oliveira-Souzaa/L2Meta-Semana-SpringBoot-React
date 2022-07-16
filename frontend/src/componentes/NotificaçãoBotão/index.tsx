import axios from 'axios';
import icon from '../../assets/img/notificimagem.png'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
        console.log("Sucesso");
    })
}

function NotificaçãoBotão( {saleId} :Props) {
    return (
        <div className="l2meta-blue-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificaçãoBotão
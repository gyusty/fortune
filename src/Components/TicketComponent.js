import {PDFDownloadLink} from '@react-pdf/renderer';
import PdfComponent from '../Components/PdfComponent';


function TicketComponent({user, closeModal}) {

    return(
        <div className="modal-container">
            <div className="ticket-body"> 
                <div className="title-section">
                    <div className="background-circle"></div>
                    <span className="title">Sorteo</span>
                    <span className="subtitle">Freidora de Aire Oster</span>
                </div>
                <div className="info-section">
                    <span className="date">Fecha del Sorteo : 25/10/2022</span>
                    <span className="user-data-container">Nombre: {user? user.name : ''}</span>
                    <span className="user-data-container">Direccion: {user? user.address : ''}</span>
                    <span className="user-data-container">Telefono: {user? user.phone : ''}</span>
                    <span className="user-data-container">Email: {user? user.email : ''}</span>
                    <span className="ticket-number">Ticket N°: {user? user.ticketNumber : ''}</span>
                </div>
            </div>

            <div className="button-container">
                <button onClick={(e) => closeModal()} className="close">Cerrar</button>
                <PDFDownloadLink document={<PdfComponent user={user} fileName='test.pdf'></PdfComponent>}>
                    <button className="accept">Imprimir</button>
                </PDFDownloadLink>
            </div>
        </div>
        ) 
}

export default TicketComponent
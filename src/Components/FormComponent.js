import React, {useState} from "react";


function FormComponent({getUserForm}) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [ticketNumber, setTicketNumber] = useState(0);

    const showValues = () => { 
      getUserForm({
        name:name,
        phone:phone,
        email:email,
        address:address,
        ticketNumber:ticketNumber,
      })
    }

    const checkForm = () => { 
      if (!name || !phone || !email || !address || !ticketNumber) {
        return true;
      }

      return false;
    }


    return(
        <div className='form-container'>
          <div className='header'>
            <h1>Formulario de Rifa</h1>
          </div>
          <div className='form-body'>
            <div className='input-container'>
              <h4>Nombre Completo</h4>
              <input value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='input-container'>
              <h4>Telefono</h4>
              <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <div className='input-container'>
              <h4>Email</h4>
              <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='input-container'>
              <h4>Direccion</h4>
              <input value={address} onChange={(e) => setAddress(e.target.value)}></input>
            </div>
            <div className='input-container'>
              <h4>Numero de Ticket</h4>
              <input type="number" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)}></input>
            </div>
          </div>
          <div className='footer'>
            <button className={`${checkForm() ? 'disabled' : ''}`} disabled={checkForm()} onClick={() => showValues()}>Registrar</button>
          </div>
        </div>
    )
}

export default FormComponent
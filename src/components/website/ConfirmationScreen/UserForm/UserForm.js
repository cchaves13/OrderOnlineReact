import React from 'react'
import { Field, reduxForm } from 'redux-form'


const onSubmit = values =>{
  alert(JSON.stringify(values));
}
const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div>
    <div>
      {touched && error && <span className="span-error">{error}</span>}
      <input {...input} placeholder={placeholder} type={type} className={ touched && error ? 'input-error beauty-input' : 'beauty-input'}/>     
    </div>
  </div>
)

const required  = value => {
  if(!value || value === '')
    return 'Requerido';
  return undefined;
}

const validateEmail = email=> {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(String(email).toLowerCase()))
    return 'Formato Invalido';
  return undefined;
}
const validateName = name =>{
  if(!name || !isNaN(name))
    return 'Escribe tu nombre';
  return undefined;
}
const validatePhone = phoneNumber =>{
  if(isNaN(phoneNumber) || phoneNumber.length !== 8)
    return 'Número invalido, Ejemplo: 83710654';
  return undefined;
}

const mapSytle = {
  width:"100%",
  height: "300px",
}


let UserForm = ({handleSubmit, valid})=>(
  <div className="info-user">
   <form onSubmit={handleSubmit}>
    <div className="form-control">
          <label>Nombre:</label>
          <Field name="name" placeholder="Ejem: Ana Apellidos" component={renderField} type="text" className="beauty-input" validate={[required, validateName]}/>
      </div>
      <div className="form-control">
          <label>Correo:</label>
          <Field placeholder="Ejem: tucorreo@gmail.com" name="mail" component={renderField} type="text" className="beauty-input" validate={[required, validateEmail]}/>
      </div>
      <div className="form-control">
          <label>Telefono:</label>
          <Field placeholder="Ejem: 83710654" name="phone" component={renderField} type="text" className="beauty-input" validate={[required, validatePhone]}/>
      </div>
      <div className="form-control">
          <label>Ubicacion:</label>
          <input src="" placeholder="Escoge la ubicacion de entrega"
              className="beauty-input" disabled></input>     
      </div>
        <div id="googleMap" style={mapSytle}></div>        
      <button type="submit" disabled={!valid} className="beauty-btn green ordenalo">Ordenalo!</button>
   </form>
  </div>
)

UserForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  onSubmit,
})(UserForm)

export default UserForm;
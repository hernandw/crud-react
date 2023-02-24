import React, { useState } from "react";
import Error from "./Error";

const Form = ({ constellationList }) => {
  const [name, setName] = useState("");
  const [constellation, setConstellation] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    //Validamos el Formulario
    if([name, constellation].includes('')){
      setError(true)
    }
  }
  return (
    <>
      <h1>CRUD con React</h1>
      {error && <Error message='Todos los campos son obligatorios' /> }
      <form onSubmit={handleSubmit}>
        <div className="container__form">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Agrega tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container__form">
          <label htmlFor="constellation">Constellation</label>
          <input
            type="text"
            placeholder="Agrega tu constellation"
            value={constellation}
            onChange={(e) => setConstellation(e.target.value)}
          />
        </div>
        <div className="btn__container">
          <button className="btn">Agregar</button>
          <button className="btn">Limpiar</button>
        </div>
      </form>
    </>
  );
};

export default Form;

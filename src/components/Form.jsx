import React from "react";

const Form = () => {
  return (
    <>
      <h1>CRUD con React</h1>
      <form>
        <div className="container__form">
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Agrega tu nombre" />
        </div>
        <div className="container__form">
          <label htmlFor="constellation">Constellation</label>
          <input type="text" placeholder="Agrega tu constellation" />
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

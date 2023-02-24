import React, { useEffect, useState } from "react";
import Error from "./Error";
import { getId } from "../assets/getId";
const Form = ({ constellationList, setConstellationList, edit, setEdit }) => {
  

  const [name, setName] = useState("");
  const [constellation, setConstellation] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Object.keys(edit).length > 0) {
      setName(edit.name);
      setConstellation(edit.constellation);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validamos el Formulario
    if ([name, constellation].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Creamos un objetos con los datos del formulario
    const getData = {
      name,
      constellation,
    };
    //actualizamos los datos al presionar Editar
    if (edit.id) {
      setError(false)
      getData.id = edit.id;
      const datoUpdate = constellationList.map((datoState) =>
        datoState.id === getData.id ? getData : datoState
      );
      setConstellationList(datoUpdate);
      setEdit('')
    } else {
      //agregamos a la lista
      getData.id = getId();
      setConstellationList([...constellationList, getData]);
    }

    //Limpiamos el formulario
    setName("");
    setConstellation("");
  };
  return (
    <>
      <h1>CRUD con React</h1>
      {error && <Error message="Todos los campos son obligatorios" />}
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
          <button className="btn">{Object.entries(edit).length === 0 ? 'Agregar' : 'Editar'}</button>
          <button className="btn">Limpiar</button>
        </div>
      </form>
    </>
  );
};

export default Form;

import React from "react";

const TableRow = ({data, setEdit, deleteUser}) => {
    const {name, constellation, id} = data
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={()=>setEdit(data)}>Editar</button>
        <button onClick={()=> deleteUser(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TableRow;

import React from "react";

const TableRow = ({data}) => {
    const {name, constellation, id} = data
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default TableRow;

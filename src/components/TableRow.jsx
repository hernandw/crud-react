import React from "react";

const TableRow = ({ data, setEdit, deleteUser }) => {
  console.log(("data", Object.entries(data).length === 0));
  const { name, constellation, id } = data;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setEdit(data)}>Editar</button>
          <button onClick={() => deleteUser(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
964001256;

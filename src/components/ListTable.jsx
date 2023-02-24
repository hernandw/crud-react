import React from "react";
import TableRow from "./TableRow";

const ListTable = ({ constellationList }) => {
  return (
    <>
      <h2>Listado de Constelaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {constellationList.map(item => <TableRow key={item.id} />)}
        </tbody>
      </table>
    </>
  );
};

export default ListTable;

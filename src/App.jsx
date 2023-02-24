import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import ListTable from "./components/ListTable";
import { initialDB } from "./assets/db";

const App = () => {
  const [constellationList, setConstellationList] = useState(initialDB);
  const [edit, setEdit] = useState({});

  const deleteUser = (id) => {
    
    const Update = constellationList.filter(item => item.id != id)
    
      setConstellationList(Update)
      setEdit('')
        
  };
  return (
    <div className="container">
      <Form
        constellationList={constellationList}
        setConstellationList={setConstellationList}
        edit={edit}
        setEdit={setEdit}
        
      />
      <ListTable
        constellationList={constellationList}
        setEdit={setEdit}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default App;

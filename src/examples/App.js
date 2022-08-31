import React from "react";
import { Modal } from "../lib";

const App = ({show, setShow}) => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Modal show={show} setShow={setShow} closeAnywhere={true} showIcon={true} sectionStyle={{ fontWeight: "bold", fontFamily: "Arial" }}>
            <span>L'employé a bien été enregistré</span>
        </Modal>
  </div>
);

export default App;

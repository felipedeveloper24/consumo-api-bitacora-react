import React from "react";

import "./content.style.css";
import Tareas from "../tareas/tareas.component";
const Content = ()=>{
    return (
        <div className="content">
            <h1>Listado de tareas obtenidas API</h1>
            <Tareas/>
        </div>
    );
};

export default Content;
import React, { useEffect, useState } from "react";
import "./tareas.style.css";
import axios from "axios";

import logo from "../../assets/giphy.gif";

const Tareas = ()=>{

    const BASE_API = "http://localhost:8000/api";
    const [tareas,setTareas] = useState([]);
    const [loading,setLoading] = useState(false);

    const getAllTasks = async()=>{
        const response = await axios.get(`${BASE_API}/tareas`);
        console.log(response.data);
        setTareas(response.data);
        setLoading(true);
    };  

    useEffect(()=>{
        getAllTasks();
    },[]);

    if(loading==true){
        return(
            <div className="tareas">
                {
                    tareas.map((tarea,idx)=>{
                        return(
                        <div key={idx} className="tarea">
                            <h1>{tarea.titulo}</h1>
                            <p>{tarea.descripcion}</p>
                            <cite>{tarea.fecha}</cite>
                        </div>
                        );
                    })
                }
            </div>
        );
    }else{
        return(
            <div className="tareas">
               <img src={logo} width="200px" alt=""  />
            
               </div>
        );
    }
    
};


export default Tareas;
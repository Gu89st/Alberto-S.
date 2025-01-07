import React from "react";
import Sobre from "../Componentes/Sobre";
import Certificaciones from "./Certificaciones";
import Inicio from "./Inicio";
import Proyectos from "../Componentes/Proyectos";
import Contactame from "./Mensaje";



const Connection=[
        
        { path: '/Sobre', element: <Sobre /> , label:"Sobre Mi"},
        { path: '/Certificaciones', element: <Certificaciones />, label:"Mis cetirificaciones" },
        { path: '/Inicio', element: <Inicio />, label:"Inicio" },
        { path: '/Proyectos', element: <Proyectos />, label:"Proyectos" },
        { path: '/Contactame', element: <Contactame />, label:"Contactame" }
]
export default Connection
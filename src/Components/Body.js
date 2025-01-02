import React from "react";

function Navbar (){
    return(
        
         <div class="navigationbar">
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Sobre Mi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Mis certificaciones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Proyectos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contactames</a>
                </li>
                
            </ul>
        </div>   
     
        
    );
}
export default Navbar;


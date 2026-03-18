"use client"; // Indica que este componente se ejecuta en el navegador.
// Es necesario para usar hooks como useState o manejar eventos.
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); //Para que sirve el useState
    return (
        <>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <AlignLeft className="text-black hover:text-primary-hover hoverEffect md:hidden hover:cursor-pointer"/>
        </button>
        <div className="md:hidden">   
            <SideMenu 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)}/>
        </div>
        </>
    );
}

export default MobileMenu;
//creo que este es el 2 tambien
//qu es y hace onClick={() => setIsSidebarOpen(!isSidebarOpen) ?
//onClick es un evento que se dispara cuando el usuario hace clic en el botón. En este caso, se utiliza para alternar el estado de isSidebarOpen entre true y false. Cuando el usuario hace clic en el botón, se llama a la función setIsSidebarOpen con el valor opuesto al estado actual, lo que permite abrir o cerrar el menú lateral (SideMenu) dependiendo de su estado actual.

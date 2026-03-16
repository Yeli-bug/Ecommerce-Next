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
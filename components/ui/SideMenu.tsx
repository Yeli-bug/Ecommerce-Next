import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
    // Define any props you want to pass to the SideMenu component here
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose); // Custom hook to detect clicks outside the sidebar
    return (
        <div
            className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>  
            <div  ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-gray-500 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-5">
                    <Logo className="text-white"/>
                    <button 
                        onClick={onClose}
                        className="hover:text-primary-hover">
                        <X />
                    </button>
                </div>
                <div className="flex flex-col space-y-3.5 font-semibold tracking-wide text-white/80">
                        {headerData?.map((item) => (
                            <Link 
                            href={item?.href} 
                            key={item?.title}
                            className={`hover:text-primary-hover transition-colors duration-300 ${ pathname === item?.href && "text-primary-light"}`}>
                                {item?.title}
                            </Link>
                            ))}
                </div>
                <SocialMedia />
            </div>
        </div>
    );
};

export default SideMenu;
//creo que este es el 3, que le sigue al MobileMenu

//que es FC y para que sirve?
//FC es un tipo de componente funcional en React que se utiliza para definir componentes que reciben props. Es una abreviatura de "Function Component". Al usar FC, puedes especificar el tipo de las props que el componente espera recibir, lo que ayuda a mejorar la legibilidad y la seguridad del código al proporcionar autocompletado y verificación de tipos en el editor. En este caso, FC<SidebarProps> indica que el componente SideMenu es un componente funcional que espera recibir props del tipo SidebarProps.

//por que el className debe tener {} y cuando no solo""
//ESTILO gap que hace?
//a que se refiere y para que sirve el  FC<SidebarProps> 

//Esto es lo mismo que: ${ pathname === item?.href ? "text-primary-light" : "" }`
//  ${ pathname === item?.href && "text-primary-light"}
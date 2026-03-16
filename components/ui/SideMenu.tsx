import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

interface SidebarProps {
    // Define any props you want to pass to the SideMenu component here
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>  
            <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-gray-500 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-5">
                    <Logo className="text-white"/>
                    <button 
                        onClick={onClose}
                        className="hover:text-primary-hover">
                        <X />
                    </button>
                </div>
                <div className="text-white">
                        IDK
                </div>
            </div>
        </div>
    );
};

export default SideMenu;


//por que el className debe tener {} y cuando no solo""
//ESTILO gap que hace?
//a que se refiere y para que sirve el  FC<SidebarProps> 
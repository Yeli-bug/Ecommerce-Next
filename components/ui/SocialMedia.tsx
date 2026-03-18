import { Facebook, Instagram, Youtube } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
};

const socialMediaLinks = [
    {
        title: 'Facebook',
        href: 'https://www.facebook.com',
        icon: <Facebook className="w-6 h-6" />
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com',
        icon: <Instagram className="w-6 h-6" />
    },
    {
        title: 'YouTube',
        href: 'https://www.youtube.com/?app=desktop',
        icon: <Youtube className="w-6 h-6" />
    }
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return <TooltipProvider>
                <div className={cn("flex items-center gap-4",
                    className)}>
                    {socialMediaLinks?.map((item) => (
                        <Tooltip key={item?.title}>
                            <TooltipTrigger asChild>
                            <Link 
                            key={item?.title}
                            href={item?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("p-2 border rounded-full hover:text-primary-hover hover:border-primary-hover hoverEffect",
                                iconClassName
                            )}
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn("bg-primary text-primary-foreground font-semibold", tooltipClassName)}>
                            {item?.title}
                        </TooltipContent>
                        </Tooltip>
                        
                    ))}
                </div> 
            </TooltipProvider>
};

export default SocialMedia;
//creo que este es el 4, que le sigue al SideMenu

//que es TooltipProvider y para que sirve?
//TooltipProvider es un componente que se utiliza para proporcionar funcionalidad de tooltip (información emergente) a los elementos hijos. Permite mostrar información adicional cuando el usuario pasa el cursor sobre un elemento, lo que mejora la experiencia del usuario al proporcionar contexto o detalles adicionales sin ocupar espacio adicional en la interfaz.
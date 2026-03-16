import { cn } from "@/lib/utils";

const Container = ({
    children,
    className,
}:{
    children: React.ReactNode;
    className?: string;
}) => {
    return (    
        <div className={cn("max-w-screen-xl mx-auto px-4", 
        className)}>
            {children}
            {/* Aquí puedes colocar el contenido de tu aplicación */}
        </div>
    )
}

export default Container;
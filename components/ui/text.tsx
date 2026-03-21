import { cn } from "@/lib/utils";

const Title = ({ 
    children, 
    className 
}: {
    children: React.ReactNode; 
    className?: string 
}) => {
    return (
        <h2 className={cn("text-3xl font-semibold capitalize tracking-wide", 
        className)}>
            {children}
        </h2>
    );
};

const SubTitle = ({
    children,
    className
}: {
    children:React.ReactNode;
    className?: string
}) => {
    return (
        <h3 className={cn("font-semibold text-black/80 font-sans", className)}>
            {children}
        </h3>
    );
}

const SubText = ({ 
    children, 
    className 
}: {
    children: React.ReactNode; 
    className?: string 
}) => {
    return (
        <p className={cn("text-black/60 text-sm", 
        className)}>
            {children}
        </p>
    );
}




//por que lo exportamos asi??
export { Title, SubTitle, SubText };

//que es el children? es una propiedad especial en React que representa el contenido que se encuentra entre las etiquetas de un componente cuando se utiliza. Por ejemplo, si tienes un componente llamado <Title> y lo usas así: <Title>Hola Mundo</Title>, entonces "Hola Mundo" es el children del componente Title. Esto permite que el componente Title pueda renderizar cualquier contenido que se le pase entre sus etiquetas, haciendo que sea más flexible y reutilizable.
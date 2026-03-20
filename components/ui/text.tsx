import { cn } from "@/lib/utils";

const Title = ({ 
    children, 
    className 
}: {
    children: React.ReactNode; 
    className?: string 
}) => {
    return (
        <h1 className={cn("text-3xl font-semibold capitalize tracking-wide", className)}>
            {children}
        </h1>
    );
}

//por que lo exportamos asi??
export { Title };

//que es el children? es una propiedad especial en React que representa el contenido que se encuentra entre las etiquetas de un componente cuando se utiliza. Por ejemplo, si tienes un componente llamado <Title> y lo usas así: <Title>Hola Mundo</Title>, entonces "Hola Mundo" es el children del componente Title. Esto permite que el componente Title pueda renderizar cualquier contenido que se le pase entre sus etiquetas, haciendo que sea más flexible y reutilizable.
import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>
(callback: () => void) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }   
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [callback]);
    return ref;
}


// El hook useOutsideClick es un hook personalizado de React que se utiliza para detectar clics fuera de un elemento específico. Este hook es útil para cerrar menús desplegables, modales u otros componentes cuando el usuario hace clic fuera de ellos.

// El hook toma una función de callback como argumento, que se ejecutará cuando se detecte un clic fuera del elemento referenciado. El hook utiliza useRef para crear una referencia al elemento que se desea monitorear y useEffect para agregar y limpiar el evento de clic en el documento. Cuando se hace clic en cualquier parte del documento, la función handleClickOutside verifica si el clic ocurrió fuera del elemento referenciado y, si es así, ejecuta la función de callback proporcionada.
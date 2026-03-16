import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//para que sirbe utils? Sirve para colocar funciones que se van a usar en varias partes de la aplicación, como por ejemplo la función cn que se encarga de combinar clases de Tailwind CSS y eliminar las clases duplicadas. De esta manera, podemos evitar tener que escribir la misma función en cada componente que necesite combinar clases.
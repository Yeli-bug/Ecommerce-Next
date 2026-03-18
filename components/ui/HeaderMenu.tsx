"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className="group relative hover:text-primary transition-colors duration-300"
        >
          {item?.title}

          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-primary-hover group-hover:w-1/2 group-hover:left-0 transition-all duration-300"></span>

          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-primary-hover group-hover:w-1/2 group-hover:right-0 transition-all duration-300"></span>

        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;

//creo que este es el 2
//use client es una directiva que se coloca al inicio de un archivo de componente en Next.js para indicar que ese componente debe ser renderizado en el cliente (navegador) en lugar de en el servidor. Esto es necesario cuando el componente utiliza características específicas del navegador, como hooks de React (useState, useEffect, etc.) o eventos que solo están disponibles en el entorno del cliente. Al usar "use client", Next.js sabe que este componente no debe ser renderizado durante la generación estática o en el servidor, sino que debe ser manejado completamente en el lado del cliente.
//que es el cliente en este contexto?
//En este contexto, el "cliente" se refiere al navegador web del usuario que está interactuando con la aplicación. Cuando un componente se marca con "use client", significa que ese componente se ejecutará y renderizará en el navegador del usuario, en lugar de ser procesado en el servidor durante la generación de la página. Esto permite que el componente utilice funcionalidades específicas del navegador, como hooks de React o eventos, que no están disponibles en el entorno del servidor.
//que es el server en este contexto?
//En este contexto, el "servidor" se refiere al entorno donde se ejecuta el código de la aplicación antes de enviarlo al cliente (navegador). En Next.js, el servidor es responsable de procesar las solicitudes, generar las páginas y enviar el HTML resultante al cliente. Cuando un componente no está marcado con "use client", se renderiza en el servidor durante la generación de la página, lo que significa que su contenido se incluye en el HTML enviado al navegador. Esto es útil para mejorar el rendimiento y la optimización SEO, ya que el contenido está disponible inmediatamente sin necesidad de esperar a que se ejecute JavaScript en el cliente. Sin embargo, los componentes que requieren interactividad o acceso a características específicas del navegador deben marcarse con "use client" para asegurarse de que se ejecuten correctamente en el entorno del cliente.
//que es el usePathname y para que sirve?
//usePathname es un hook proporcionado por Next.js que permite acceder a la ruta actual del navegador. Es útil para determinar qué página está activa y aplicar estilos o lógica condicional en función de la ruta. En este código, se utiliza para comparar la ruta actual con las rutas definidas en headerData y aplicar un estilo diferente al enlace correspondiente a la página activa.
//para que sirve el className "group" y "group-hover" en el span?
//El className "group" se utiliza para agrupar elementos relacionados, y "group-hover" se aplica a los elementos hijos cuando el elemento padre (con class "group") está siendo hovered. En este caso, cuando el usuario pasa el cursor sobre el enlace, los spans dentro del enlace cambiarán su ancho y posición para crear un efecto visual de subrayado.
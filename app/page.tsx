//Se renderiza toda la aplicación en este componente, es el punto de entrada de la aplicación
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React from 'react'; //En Next.js moderno → no es necesario.

const Home = () => {
  return (
    <Container className="p-10 bg-surface">
      <h2 className="text-2xl font-bold text-amber-50">Home</h2>
      <p className="text-amber-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button>Comprar ahora</Button>
    </Container>
  );
};

export default Home;
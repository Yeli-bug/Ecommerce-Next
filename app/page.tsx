//Se renderiza toda la aplicación en este componente, es el punto de entrada de la aplicación
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import React from 'react'; //En Next.js moderno → no es necesario.
import HomeBanner from '@/components/HomeBanner';

const Home = () => {
  return (
    <Container className="p-10 bg-surface">
      <HomeBanner/>
    </Container>
  );
};

export default Home;
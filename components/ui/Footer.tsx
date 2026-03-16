import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <Container>
        <p className="text-center">&copy; {new Date().getFullYear()} Diseños Emperador. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;

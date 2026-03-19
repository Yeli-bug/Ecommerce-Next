import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import CustomSignIn from "./CustomSignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";

const Header = async () => {
  const user = await currentUser();
  console.log("user:", user);
  return (
    <header className="py-5 border-b border-b-black/50">
        <Container className="flex items-center justify-between text-primary">
            <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0 ">
              <MobileMenu/>
              <Logo/>
            </div>
            <HeaderMenu/>
            <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                <SearchBar/>
                <CartIcon/>
                <FavoriteButton/>
                <CustomSignIn/>
            </div>
        </Container>
    </header>
  );
};

export default Header;
//creo que primero es este 1
//que es py-5? es un padding en el eje y de 5 unidades, lo que significa que hay un espacio de 5 unidades entre el contenido del header y su borde superior e inferior.


//sign in - iniciar secion boton en el header
//si no tienes cuenta le puedes dar clik a sign up y te lleva a la pagina de registro
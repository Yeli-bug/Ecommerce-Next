import Container from "./Container";
import FooterTip from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import Link from "next/link";
import {quickLinksData, categoriesData} from "@/constants/data"
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTip/>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo/>
            <SubText>Here you will find a wide variety of school clothes and much more!</SubText>
            <SocialMedia className="text-black/60"/>
          </div>
          <div>
            <SubTitle>
              Quick Links
            </SubTitle>
            <ul className="space-y-0.5 mt-3 text-black/60 text-sm">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                    <Link href={item?.href} className="hover:text-primary-hover hoverEffect:">{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>
              Categories
            </SubTitle>
            <ul className="space-y-0.5 mt-3 text-black/60 text-sm">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                    <Link href={`category/${item?.href}`} className="hover:text-primary-hover hoverEffect:">{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>Subscribe to our newsletter to receive excclusive offers.</SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required/>
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
                 {/* Bottom copyright section */}
        <div className="py-6 border-t text-center text-sm text-black/70">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-dark-color font-black tracking-wider uppercase hover:text-primary-hover  hoverEffect group font-sans">
              Disenos Emperador</span>. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

//pro que en la etiqueta li y en el Link tenemos que ponerle el item.title dos veces???
//key={item.title} Para: React,	Función: Identificación interna
//{item.title}	Para:Usuario,	Funcion:Texto visible
//de preferencia que key sea un id unico
"use client"
import Image from "next/image";
import Link from "next/link";
import BgHeaderHero from "./assets/bgHero.jpg";
import LogoMp from "./assets/logoMp.svg";
import PhoneIcon from "./assets/phone.svg";
import BigLogoMp from "./assets/bigLogoMp.svg";
import ArrowDown from "./assets/arrowDown.svg";
import CeoMp from "./assets/ceoMP.png";
import BgOurServices from "./assets/ourServices.svg";
import HeartMp from "./assets/iconCard1.svg";
import MedicalFees from "./assets/iconCard2.svg";
import Support from "./assets/iconCard3.svg";
import ArrowRight from "./assets/arrowRight.svg";
import Asks from "./assets/asks.svg";
import Card1 from "./assets/card1.svg";
import Card2 from "./assets/card2.svg";
import Phone from "./assets/phoneIcon.svg";
import Mail from "./assets/mailIcon.svg";
import CardsVerticais from "./assets/cardsVerticais.svg"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#pagina-inicial", label: "Página inicial" },
  { href: "#sobre-nos", label: "Sobre nós" },
  { href: "#nossos-servicos", label: "Nossos Serviços" },
  { href: "#perguntas-frequentes", label: "Perguntas frequentes" },
];

const services = [
  {
    title: "Agendamento cirúrgico",
    text: "Responsável pelo contato com hospitais e centros cirúrgicos, organização de documentação e acompanhamento de datas e horários.",
    icon: HeartMp,
    color: "bg-white text-[#333]",
  },
  {
    title: "Gestão de honorários médicos",
    text: "Atuação na preparação e envio de documentação, controle de repasses hospitalares, acompanhamento financeiro e regularização de pendências administrativas.",
    icon: MedicalFees,
    color: "bg-white/10 text-white",
  },
  {
    title: "Suporte burocrático geral",
    text: "Responsável pelo preenchimento de formulários e protocolos, interface com planos de saúde, clínicas e hospitais, além da orientação sobre fluxos e exigências legais.",
    icon: Support,
    color: "bg-white/10 text-white",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  return (
    <div className="bg-white">
      {/* ===== HEADER ===== */}
      <header
        id="header"
        className="w-full h-[560px] md:h-screen bg-cover bg-center rounded-b-[40px]"
        style={{ backgroundImage: `url(${BgHeaderHero.src})` }}
      >
        <div className="flex items-center justify-between p-4 md:px-10 md:py-5">
          <nav className="flex items-center justify-between w-full bg-[#275C52] p-2 rounded-full relative">

            {/* Links Esquerda (desktop) */}
            <div className="hidden md:flex gap-4">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 rounded-full text-[18px] text-white hover:bg-white hover:text-[#275C52] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo Central */}
            <Image src={LogoMp} alt="Logotipo MP" width={70} className="ml-5" />

            {/* Botão hamburguer (visível só no mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
              aria-label="Abrir menu"
            >
              {open ? <X size={40} /> : <Menu size={40} />}
            </button>
            {/* Links Direita (desktop) */}
            <div className="hidden md:flex gap-4">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 rounded-full text-[18px] text-white hover:bg-white 
                  hover:text-[#275C52] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Menu mobile (dropdown) */}
          {open && (
            <div
              className="md:hidden absolute
                top-[100px] mt-2 bg-[#275C52] rounded-2xl 
                shadow-lg flex flex-col items-center py-4 space-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-[18px] w-[380px] py-2 px-4 rounded-full hover:bg-white hover:text-[#275C52] text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="https://w.app/hlzfhk"
            target="_blank"
            className="ml-5 p-4 rounded-full bg-[#275C52] hover:bg-[#367D70] transition hidden md:block"
          >
            <Image src={PhoneIcon} alt="Ícone de telefone" width={50} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center h-[80%] gap-8 text-center">
          <Image src={BigLogoMp} alt="Logo grande MP" className="w-[90%] md:w-[70%]" />
          <Link href="#nossos-servicos" className="flex items-center justify-center gap-4 pl-3 md:pl-7 pr-2 py-2 
            rounded-full bg-[#275C52] 
            text-[18px] md:text-2xl text-white hover:bg-[#367D70] transition
            
            "
          >
            Saiba Mais
            <Image src={ArrowDown} alt="Seta para baixo" width={40} />
          </Link>
        </div>
      </header>

      {/* ===== SOBRE NÓS ===== */}
      <section id="sobre-nos" className="py-10 px-5 md:py-20 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-[#333] text-heading-lg md:text-5xl font-bold">Quem somos</h2>
          <p className="text-[#333] text-lg md:text-heading-sm leading-relaxed">
            Somos uma empresa especializada em assessoria médica, oferecendo suporte completo aos profissionais da
            saúde na organização da rotina, otimizando o tempo e garantindo tranquilidade e segurança em todos os
            processos.
          </p>

          <hr className="w-full bg-[#c3c3c3] h-0.5 rounded-full" />

          <h2 className="text-[#333] text-heading-lg md:text-5xl font-bold">Nossos Serviços</h2>
          <p className="text-[#333] text-lg md:text-heading-sm leading-relaxed">
            Oferecemos uma solução completa para médicos e cirurgiões, cuidando do processo de agendamento cirúrgico,
            gestão de honorários médicos e suporte burocrático geral. Garantimos eficiência, organização e tranquilidade
            na rotina profissional.
          </p>
        </div>

        <Image
          src={CeoMp}
          alt="Imagem de Victoria Isis, fundadora da MP Medical Care"
          width={580}
          className="rounded-2xl"
        />
      </section>

      {/* ===== NOSSOS SERVIÇOS ===== */}
      <section
        id="nossos-servicos"
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgOurServices.src})` }}
      >
        <div className="flex flex-col gap-5 md:gap-16 p-4 md:p-10 items-center justify-center h-full text-center md:text-left">
          <h2 className="text-heading-lg md:text-5xl font-semibold text-white">Descubra Nossos Serviços</h2>

          <div className="flex flex-col lg:flex-row gap-5 md:gap-8 items-stretch w-full max-w-6xl">
            {services.map(({ title, text, icon, color }) => (
              <div
                key={title}
                className={`flex flex-col justify-between gap-5 p-5 md:gap-6 md:p-8 rounded-3xl w-full lg:w-1/3 ${color} shadow-md hover:scale-[1.02] transition`}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-heading-md md:text-3xl">{title}</h3>
                  <p className=" text-heading-xs md:text-[18px] leading-relaxed">{text}</p>
                </div>
                <Image src={icon} alt={title} width={60} height={60} className="hidden md:block" />
              </div>
            ))}
          </div>

          <Link
            href="https://w.app/hlzfhk"
            target="_blank"
            className="flex items-center gap-4 md:gap-5 text-heading-sm md:text-2xl bg-white text-[#333] font-medium py-1 md:py-2 pl-4 md:pl-6 pr-1 md:pr-2 rounded-full hover:bg-[#367D70] hover:text-white transition"
          >
            Quero saber mais sobre
            <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#275C52] rounded-full">
              <Image src={ArrowRight} alt="Seta para direita" width={30} />
            </div>
          </Link>
        </div>
      </section>
      {/* ===== PERGUNTAS FREQUENTES ===== */}
      <section className="flex flex-col justify-center items-center py-10 px-5 md:py-16 md:px-6 gap-8 text-center">
        <h2 className="text-[#333] font-bold text-heading-lg md:text-5xl">Perguntas Frequentes</h2>
        <Image src={Asks} alt="Perguntas Frequentes" className="hidden md:block" />
        <Image src={CardsVerticais} alt="" className="block md:hidden" />
      </section>

      {/* ===== NOSSOS PACOTES ===== */}
      <section className="flex flex-col items-center py-10 px-5 md:py-16 md:px-6 gap-5 md:gap-8 text-center">
        <h2 className="text-[#333] font-bold text-heading-lg md:text-5xl">Nossos Pacotes</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start justify-center  md:py-10">
          <Image src={Card1} alt="Pacote 1" className="w-full md:w-[45%]" />
          <Image src={Card2} alt="Pacote 2" className="w-full md:w-[45%]" />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#275C52] w-full flex flex-col items-center gap-4 py-8 md:py-10 px-3 
        md:px-6 rounded-t-[40px] text-center"
      >
        <h2 className="text-white font-bold text-heading-lg md:text-5xl">Fale conosco</h2>

        <div className="flex flex-col gap-3 text-white items-center">
          <div className="flex items-center gap-3">
            <Image src={Phone} alt="Telefone" width={30} />
            <p className="text-heading-sm sm:text-heading-md">(11) 96189-0248</p>
          </div>

          <div className="flex items-center gap-3">
            <Image src={Mail} alt="E-mail" width={30} />
            <p className="text-heading-sm sm:text-heading-md">admcaremedical@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

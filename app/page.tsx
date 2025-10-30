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
import { useState } from "react";

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
        className="w-full h-screen bg-cover bg-center rounded-b-3xl"
        style={{ backgroundImage: `url(${BgHeaderHero.src})` }}
      >
        <div className="flex items-center justify-between px-10 py-5">
          <nav className="flex items-center justify-between w-full bg-[#275C52] p-2 rounded-full">
            
            <div className="flex gap-4">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 rounded-full text-[20px] text-white hover:bg-white hover:text-[#275C52] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Image src={LogoMp} alt="Logotipo MP" width={70} />

            <div className="flex gap-4">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 rounded-full text-[20px] text-white hover:bg-white hover:text-[#275C52] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <Link
            href="https://w.app/hlzfhk"
            target="_blank"
            className="ml-5 p-4 rounded-full bg-[#275C52] hover:bg-[#367D70] transition"
          >
            <Image src={PhoneIcon} alt="Ícone de telefone" width={50} />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center h-[80%] gap-8 text-center">
          <Image src={BigLogoMp} alt="Logo grande MP" className="w-[80%] max-w-[700px]" />
          <Link href="#nossos-servicos" className="flex items-center justify-center gap-4 pl-10 pr-2 py-2 
            rounded-full bg-[#275C52] 
            text-2xl text-white hover:bg-[#367D70] transition"
          >
            Saiba Mais
            <Image src={ArrowDown} alt="Seta para baixo" width={40} />
          </Link>
        </div>
      </header>

      {/* ===== SOBRE NÓS ===== */}
      <section id="sobre-nos" className="py-20 px-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-[#333] text-5xl font-bold">Quem somos</h2>
          <p className="text-[#333] text-lg leading-relaxed">
            Somos uma empresa especializada em assessoria médica, oferecendo suporte completo aos profissionais da
            saúde na organização da rotina, otimizando o tempo e garantindo tranquilidade e segurança em todos os
            processos.
          </p>

          <hr className="w-full bg-[#c3c3c3] h-0.5 rounded-full" />

          <h2 className="text-[#333] text-5xl font-bold">Nossos Serviços</h2>
          <p className="text-[#333] text-lg leading-relaxed">
            Oferecemos uma solução completa para médicos e cirurgiões, cuidando do processo de agendamento cirúrgico,
            gestão de honorários médicos e suporte burocrático geral. Garantimos eficiência, organização e tranquilidade
            na rotina profissional.
          </p>
        </div>

        <Image
          src={CeoMp}
          alt="Imagem de Victoria Isis, fundadora da MP Medical Care"
          width={580}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* ===== NOSSOS SERVIÇOS ===== */}
      <section
        id="nossos-servicos"
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgOurServices.src})` }}
      >
        <div className="flex flex-col gap-16 p-10 items-center justify-center h-full">
          <h2 className="text-5xl md:text-2xl font-semibold text-white">Descubra Nossos Serviços</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full max-w-6xl">
            {services.map(({ title, text, icon, color }) => (
              <div
                key={title}
                className={`flex flex-col justify-between gap-6 p-8 md:p-4 rounded-3xl w-full lg:w-1/3 ${color} hover:scale-[1.02] transition`}
              >
                <div>
                  <h3 className="font-bold text-3xl mb-3 md:text-heading-sm">{title}</h3>
                  <p className="text-[18px] leading-relaxed">{text}</p>
                </div>
                <Image src={icon} alt={title} width={60} height={60} />
              </div>
            ))}
          </div>

          <Link
            href="https://w.app/hlzfhk"
            target="_blank"
            className="flex items-center gap-5 text-2xl bg-white text-[#333] font-medium py-2 pl-6 pr-2 rounded-full hover:bg-[#367D70] hover:text-white transition"
          >
            Quero saber mais sobre
            <div className="flex items-center justify-center w-14 h-14 bg-[#275C52] rounded-full">
              <Image src={ArrowRight} alt="Seta para direita" width={30} />
            </div>
          </Link>
        </div>
      </section>
      {/* ===== PERGUNTAS FREQUENTES ===== */}
      <section className="flex flex-col justify-center items-center py-16 px-6 sm:px-10 gap-8 text-center">
        <h2 className="text-[#333] font-bold text-3xl sm:text-4xl">Perguntas Frequentes</h2>
        <Image src={Asks} alt="Perguntas Frequentes" className="" />
      </section>

      {/* ===== NOSSOS PACOTES ===== */}
      <section className="flex flex-col items-center py-16 px-6 sm:px-10 gap-8 text-center">
        <h2 className="text-[#333] font-bold text-3xl sm:text-4xl">Nossos Pacotes</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-10">
          <Image src={Card1} alt="Pacote 1" className="w-[90%] md:w-[45%]" />
          <Image src={Card2} alt="Pacote 2" className="w-[90%] md:w-[45%]" />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#275C52] w-full flex flex-col items-center gap-6 py-16 px-6 sm:px-10 rounded-t-[40px] text-center">
        <h2 className="text-white font-bold text-3xl sm:text-4xl">Fale conosco</h2>

        <div className="flex flex-col gap-3 text-white items-center">
          <div className="flex items-center gap-3">
            <Image src={Phone} alt="Telefone" width={30} />
            <p className="text-[20px] sm:text-[24px]">(11) 96189-0248</p>
          </div>

          <div className="flex items-center gap-3">
            <Image src={Mail} alt="E-mail" width={30} />
            <p className="text-[20px] sm:text-[24px]">admcaremedical@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

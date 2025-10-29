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
import Support from "./assets/iconCard3.svg"
import ArrowRight from "./assets/arrowRight.svg";

export default function Home() {
  return (
    <div className="bg-white">
      <header id="header" className="w-full py-5 px-10 bg-cover bg-center h-screen rounded-b-3xl"
        style={{
          backgroundImage: `url(${BgHeaderHero.src})`
        }}>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <nav className="w-full flex justify-between  bg-[#275C52] p-1 rounded-full">
              <div className="flex gap-4">
                <Link href={"#pagina-inicial"} className="p-4 rounded-full text-[20px] hover:bg-white hover:text-[#275C52] transition duration-200">
                  Página inicial
                </Link>
                <Link href={"#sobre-nos"} className="p-4 rounded-full text-[20px] hover:bg-white hover:text-[#275C52] transition duration-200">
                  Sobre nós
                </Link>
              </div>
              <Image src={LogoMp} alt="logotipo MP svg" />
              <div className="flex gap-4">
                <Link href={"#nossos-servicos"} className="p-4 rounded-full text-[20px] hover:bg-white hover:text-[#275C52] transition duration-200">
                  Nossos Serviços
                </Link>
                <Link href={"#perguntas-frequentes"} className="p-4 rounded-full text-[20px] hover:bg-white hover:text-[#275C52] transition duration-200">
                  Perguntas frequentes
                </Link>
              </div>
            </nav>
          </div>
          <div>
            <Link href={"https://w.app/hlzfhk"}>
              <div className="p-4 rounded-full bg-[#275C52] hover:bg-[#367D70] transition duration-250">
                <Image src={PhoneIcon} alt="" width={40} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center h-full">
          <Image src={BigLogoMp} alt="" className="w-[80%]" />
          <div className="flex">
            <Link href={"#nossos-servicos"} className="flex items-center justify-center gap-5 pl-5 pr-[5px] py-[5px] rounded-full bg-[#275C52] text-[20px] transition duration-200 hover:bg-[#367D70]">
              Saiba Mais
              <Image src={ArrowDown} alt="" width={40} />
            </Link>
          </div>
        </div>
      </header>
      <section id="sobre-nos" className="overflow scroll">
        <div>
          <div className="flex justify-between gap-10 py-[80] px-10">
            <div className="flex flex-col gap-8 w-[50%]">
              <h2 className="text-[#333] text-6xl font-bold">Quem somos</h2>
              <p className="text-[#333] text-[20px]">Somos uma empresa especializada em assessoria médica, com foco em oferecer suporte
                completo aos profissionais da saúde na organização da sua rotina, otimizando o tempo e garantindo
                tranquilidade e segurança em todos os processos. Nosso objetivo é que o médico possa dedicar-se totalmente
                ao cuidado com seus pacientes, enquanto nós cuidamos de toda a parte burocrática.
              </p>
              <hr className="w-full bg-[#c3c3c3] h-0.5 rounded-full" />
              <h2 className="text-[#333] text-6xl font-bold">Nossos Serviços</h2>
              <p className="text-[#333] text-[20px]">
                Oferecemos uma solução completa para médicos e cirurgiões, cuidando de todo o processo de agendamento cirúrgico, desde o
                contato com hospitais e operadoras até o envio e controle da documentação necessária. Também realizamos a gestão de honorários
                médicos, acompanhando valores, reembolsos e pagamentos com transparência e organização.
                <br />
                <br />
                Além disso, prestamos suporte burocrático geral, auxiliando em tarefas administrativas e garantindo mais agilidade, eficiência e
                tranquilidade na rotina profissional.
              </p>
            </div>
            <div>
              <Image
                src={CeoMp}
                alt="Imagem de Victoria Isis, fundadora da MP Medical Care"
                width={580}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="nossos-servicos">
        <div className="w-full h-screen bg-cover" style={{
          backgroundImage: `url(${BgOurServices.src})`
        }}>
          <div className="flex flex-col gap-10 p-10 items-center justify-center h-screen">
            <h2 className="text-6xl font-semibold">Descubra Nossos Serviços</h2>
            <div>
              <div className="flex flex-col gap-10 items-center">
                <div className="flex gap-10">
                  <div className="flex flex-col justify-between gap-8 p-8 bg-white rounded-3xl w-[33%]">
                    <h2 className="text-[#333] font-bold text-3xl">Agendamento cirúrgico</h2>
                    <p className="text-[#666] text-[20px]">
                      Responsável pelo contato com hospitais e centros cirúrgicos,
                      organização de documentação e acompanhamento de datas e horários.
                    </p>
                    <div className="w-full flex justify-between">
                      <Image src={HeartMp} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-8 p-5 bg-white/10 rounded-3xl w-[33%]">
                    <h2 className="text-white font-bold text-3xl">Gestão de honorários médicos</h2>
                    <p className="text-white text-[20px]">
                      Atuação na preparação e envio de documentação, controle de repasses hospitalares,
                      acompanhamento financeiro e regularização de pendências administrativas.
                    </p>
                    <Image src={MedicalFees} alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-8 p-5 bg-white/10 rounded-3xl w-[33%]">
                    <h2 className="text-white font-bold text-3xl">Suporte burocrático geral</h2>
                    <p className="text-white text-[20px]">
                      Responsável pelo preenchimento de formulários e protocolos, interface com planos de saúde,
                      clínicas e hospitais, além da orientação sobre fluxos e exigências legais.
                    </p>
                    <Image src={Support} alt="" />
                  </div>
                </div>
                <div>
                  <Link href={"https://w.app/hlzfhk"}  className="flex justify-between items-center gap-5 text-2xl bg-white text-[#333] font-medium py-1 pl-5 pr-1 rounded-full transition duration-300 hover:bg-[#367D70] hover:text-white">
                    Quero saber mais sobre
                    <div className="flex items-center justify-center w-16 h-16 bg-[#275C52] rounded-full">
                      <Image src={ArrowRight} alt="" width={40}/>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

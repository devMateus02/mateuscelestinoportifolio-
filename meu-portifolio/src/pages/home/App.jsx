import {useEffect} from "react";
import Navbar from "../../components/nav-bar/nav-bar";
import Projetos from "../../components/projeto/projetos";
import "./App.css";
import Contato from "../../components/contato/contato";
import SkillBar from "../../components/skillBar/SkillBar";
import AOS from "aos";
import "aos/dist/aos.css";
import linkedin from "../../assets/Linkedin.png"
import github from "../../assets/GitHub.png"
function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms
      once: false,     // se true, anima só 1 vez
    });
  }, []);
  return (
    <>
      <div className="relative flex flex-col text-center justify-center">
        <Navbar />

        <div className="  relative">
          <a
            href="https://wa.me/5521987501858?text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed  bottom-9 sm:bottom-6 right-4 z-[1000] sm;right-[2em] flex items-center gap-2  px-4 py-4 bg-green-500 rounded-full hover:bg-green-600 transition duration-[.5s] ease-in-out"
          >
            <img
              className="w-[40px] h-[40px]  transition duration-[.5s] ease-in-out group-hover:scale-125 "
              src="whatsapp-70.png"
              alt=""
            />
          </a>

          <header
            id="home"
            className="bg overflow-hidden pt-[10%] min-h-[100vh] relative flex items-center  justify-center flex-col sm:h-[75vh] h-[90vh] px-4"
          >
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
            <div class="triangle"></div>
          

            <div className="container-hero z-10 flex flex-col items-center">
              <h1 data-aos='fade-up' className=" titulo text-[2em] sm:text-[2.5em] md:text-[3.5em] font-medium text-white  w-full sm:w-[90%] md:w-[70%] text-center">
                Olá, me chamo Mateus. Sou um dev fullstack.
              </h1>

              <p data-aos='fade-up' data-aos-delay='200' className="sub-text text-[1em]  font-normal sm:text-[1.2em] text-center mt-4">
                Crio experiências completas – do servidor à tela.
              </p>

              <a data-aos='fade' data-aos-delay='350'
                className="btn-hero mb-[5%] bg-[rgb(118,18,211)] text-white font-medium text-[1.2em] sm:text-[1.5em] py-[.5rem] px-[2rem] rounded-[10px] transition-all duration-[.5s] ease-in-out mt-[2em]"
                href="#portifolio"
              >
                Portifólio
              </a>

              <span className="desheader"></span>
            </div>

            <div className="absolute  flex-col left-0 top-[35%] bg-transparent hidden  md:flex :">
              
                  <a data-aos='fade-right' data-aos-delay="100"
                    className="link-social"
                    target="_blank"
                    href="https://www.linkedin.com/in/mateus-celestino-a3b535367/"
                  >
                    <img src={linkedin} alt="link do linkedIn" />
                  </a>
               
             
                  <a data-aos='fade-right'  data-aos-delay="250"
                    className="link-socia"
                    target="_blank"
                    href="https://github.com/devMateus02"
                  >
                    <img src={github} alt="link para o github" />
                  </a>
               
              
                  <a data-aos='fade-right'  data-aos-delay="300"
                    className="link-social"
                    target="_blank"
                    href="https://www.instagram.com/mateus_celestino_12/"
                  >
                    <img src="/Instagram.png" alt="link para o instagram" />
                  </a>
             
             
            </div>
          </header>

          <section
            id="sobre"
            className="flex justify-center flex-col items-center  px-4  "
          >
            <h2 data-aos='fade-up' className="mt-2 md:text-[2em] font-normal">Sobre</h2>
            <p data-aos='fade-up' data-aos-delay="100"className="frase-sobre max-w-[80ch] mb-[3em] text-center">
              Aqui você encontrará mais informações sobre mim, o que faço e
              minhas habilidades atuais, principalmente em termos de programação
              e tecnologia.
            </p>

            <div className="container-sobre flex flex-col lg:flex-row justify-around items-center md:items-start  gap-8 w-full max-w-7xl">
              <div className="seção-conhecer flex flex-col gap-4 text-left w-full lg:w-1/2">
                <h3 data-aos='fade-right' className="font-semibold text-[1.5em]">
                  Venha me conhecer!!
                </h3>
                <p data-aos='fade-right' data-aos-delay="100">
                  Olá! Me chamo Mateus Celestino e sou um{" "}
                  <span>desenvolvedor Fullstack</span> apaixonado por
                  transformar ideias em soluções reais. Atuo tanto no front-end,
                  criando interfaces modernas e responsivas, quanto no back-end,
                  estruturando lógicas robustas e eficientes para garantir o
                  funcionamento completo das aplicações.
                </p>
                <p data-aos='fade-right' data-aos-delay="200">
                  Tenho foco em escrever código limpo, reutilizável e de fácil
                  manutenção, sempre buscando aprender novas tecnologias e boas
                  práticas de desenvolvimento. Gosto de enfrentar desafios e
                  estou em constante evolução como profissional e como pessoa.
                </p>
                <p data-aos='fade-right' data-aos-delay="300">
                  Estou aberto a oportunidades de <span>emprego</span> nas quais
                  eu possa contribuir, aprender e crescer. Se você tiver uma boa
                  oportunidade que corresponda às minhas habilidades e
                  experiência, não hesite em <span>entrar em contato</span>.
                </p>
              </div>

              <img data-aos='fade-left' data-aos-delay="150"
                className="h-[400px] rounded-2xl"
                src="sobremin.jpeg"
                alt=" mateus desenvolvedor fullstack"
              />
            </div>

            <div className="tecnologia w-full ml-[15px] mr-[15px]  text-left flex flex-col justify-center items-center gap-6">
              <h2 data-aos='fade-up' className="mt-2 md:text-[2em] font-normal">Tecnologia</h2>
              <div className="tec-secao flex flex-row flex-wrap md:flex-nowrap justify-around gap-6 w-full">
                <div className="front w-[100%] md:w-[50%] flex flex-col justify-start">
                  <h4 data-aos='fade-right'  className="text-[1.2em] font-semibold">Frontend:</h4>
                  <div className="tec ">
                    <div data-aos='fade-right' data-aos-delay="" className="card">
                      <img src="html.png" alt="html" />
                      <SkillBar technology="html " percent={100} />
                    </div>
                    <div data-aos='fade-right' data-aos-delay="50" className="card">
                      <img src="css.png" alt="css" />
                      <SkillBar technology="CSS " percent={95} />
                    </div>
                    <div data-aos='fade-right' data-aos-delay="150" className="card">
                      <img src="js.png" alt="js" />
                      <SkillBar technology="javaScript " percent={85} />
                    </div>
                    <div data-aos='fade-right' data-aos-delay="250" className="card">
                      <img src="tailwind.png" alt="tailwind" />
                      <SkillBar technology="Tailwind " percent={100} />
                    </div>
                    <div data-aos='fade-right' data-aos-delay="350" className="card">
                      <img src="react.png" alt="react" />
                      <SkillBar technology="react" percent={90} />
                    </div>
                    <div data-aos='fade-right' data-aos-delay="450" className="card">
                      <img src="nextjs.png" alt="react" />
                      <SkillBar technology="Nextjs" percent={50} />
                    </div>
                  </div>
                </div>
                <div className="back w-[100%] md:w-[50%]">
                  <h4 data-aos='fade-left'  className="text-[1.2em] font-semibold">Backend:</h4>
                  <div className="tec flex flex-col flex-wrap gap-[1em]">
                    <div data-aos='fade-left' data-aos-delay="50" className="card">
                      <img src="node.png" alt="node" />{" "}
                      <SkillBar technology="Node.js " percent={80} />
                    </div>
                    <div data-aos='fade-left' data-aos-delay="150" className="card">
                      <img src="mongo.png" alt="mongo" />
                      <SkillBar technology="MongoDB " percent={90} />
                    </div>
                    <div data-aos='fade-left' data-aos-delay="250" className="card">
                      <img src="mysql.png" alt="mysql" />
                      <SkillBar technology="MySql " percent={60} />
                    </div>
                    <div data-aos='fade-left' data-aos-delay="350" className="card">
                      <img src="prisma.png" alt="prisma" />
                      <SkillBar technology="Primas " percent={70} />
                    </div>
                    <div data-aos='fade-left' data-aos-delay="450" className="card">
                      <img src="java.png" alt="java" />
                      <SkillBar technology="Java " percent={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
             <Projetos/>
             <Contato/>
          <footer className="bg-black text-white">
            <div className="border-b-[1px] border-white/30 flex flex-col  items-start gap-12 mb-8 py-5 px-4 sm:flex-row sm:justify-between sm:px-[5em]">
              <div className="  text-white text-left">
                <h1 className="font-semibold text-[1.5em] mb-[1em] ">
                  Mateus Celestino
                </h1>
                <p className="t">
                  Crio experiências completas – do servidor à tela.
                </p>
              </div>
              <div className="social  bg-transparent flex flex-col gap-4 ">
                <h3 className="text-[1.5em] text-white font-semibold">
                  Social
                </h3>
                <ul className="pl-[.5em] gap-[1em] bg-transparent flex flex-row">
                  <li>
                    <a
                      className="link-social "
                      target="_blank"
                      href="https://www.linkedin.com/in/mateus-celestino-a3b535367/"
                    >
                      <img
                        className="w-[30px] bg-amber-50 rounded-2xl"
                        src="linkedin-60.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-social"
                      target="_blank"
                      href="https://github.com/devMateus02"
                    >
                      <img
                        className="w-[30px] bg-amber-50 rounded-2xl"
                        src="github-96.png"
                        alt="link para o github"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-[.8em] pb-[1.5em]">
              © Copyright 2025 . Made by{" "}
              <a className="underline font-semibold " href="home">
                Mateus Celestino
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

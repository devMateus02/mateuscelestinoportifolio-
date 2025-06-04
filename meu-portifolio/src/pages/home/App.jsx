import React from 'react'
import Navbar from "../../components/nav-bar/nav-bar"
import Projetos from '../../components/projeto/projetos'
import "./App.css"
import Contato from '../../components/contato/contato'

function App() {
  return (
    <>
    <div className="h-[100dvh] overflow-x-hidden relative">
      <a
         href="https://wa.me/5521987501858?text=Olá!%20Gostaria%20de%20mais%20informações."
         target="_blank"
        rel="noopener noreferrer"
        className="group fixed  bottom-9 sm:bottom-6 right-4 sm;right-[2em] flex items-center gap-2  px-4 py-4 bg-green-500 rounded-full hover:bg-green-600 transition duration-[.5s] ease-in-out"
>
  <img className='w-[40px] h-[40px]  transition duration-[.5s] ease-in-out group-hover:scale-125 ' src="whatsapp-70.png" alt="" />
</a>

       <Navbar/>
     <header  id='home' className='relative flex items-center justify-center flex-col sm:h-[75vh] h-[90vh] px-4'>
           <div className='container-hero flex flex-col items-center'>

            <h1 className='text-[2em] sm:text-[2.5em] md:text-[3.5em] font-semibold w-full sm:w-[90%] md:w-[70%] text-center'>
              Olá, me chamo Mateus. Sou um <span className='text-[rgb(123,31,209)]'>dev fullstack.</span>
            </h1>

            <p className='frase-hero text-[1em] sm:text-[1.2em] text-center mt-4'>Crio experiências completas – do servidor à tela.</p>

            <a className="btn-hero bg-[rgb(165,84,241)] text-white font-medium text-[1.2em] sm:text-[1.5em] py-[.5rem] px-[2rem] rounded-[10px] transition duration-[.5s] ease-in-out transform hover:translate-y-[-5px] mt-[2em]" href="#portifolio">Portifólio</a>
           </div>

           <div className='social absolute left-0 bg-transparent hidden  md:flex :'>
            <ul className='pl-[.5em] bg-transparent'>
                <li><a className='link-social' target='_blank' href="https://www.linkedin.com/in/mateus-celestino-a3b535367/"><img src="linkedin.png" alt="" /></a></li>
                <li><a className='link-social' target='_blank' href="https://github.com/devMateus02"><img src="github.png" alt="link para o github"/></a></li>
            </ul>
           </div>
     </header>

     <section id='sobre' className='flex justify-center flex-col items-center min-h-[100vh] px-4 sm:h-[110vh] '> 
      <h2 className='text-[2em] font-normal'>Sobre</h2>
      <p className='frase-sobre max-w-[80ch] mb-[3em] text-center'>
        Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia.
      </p>

      <div className='container-sobre flex flex-col lg:flex-row justify-around items-start gap-8 w-full max-w-7xl'>
        <div className='seção-conhecer flex flex-col gap-4 text-left w-full lg:w-1/2'>
          <h3 className='font-semibold text-[1.5em]'>Venha me conhecer!!</h3>
          <p>Olá! Me chamo Mateus Celestino e sou um <span>desenvolvedor Fullstack</span> apaixonado por transformar ideias em soluções reais. Atuo tanto no front-end, criando interfaces modernas e responsivas, quanto no back-end, estruturando lógicas robustas e eficientes para garantir o funcionamento completo das aplicações.</p>
          <p>Tenho foco em escrever código limpo, reutilizável e de fácil manutenção, sempre buscando aprender novas tecnologias e boas práticas de desenvolvimento. Gosto de enfrentar desafios e estou em constante evolução como profissional e como pessoa.</p>
          <p>Estou aberto a oportunidades de <span>emprego</span> nas quais eu possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em <span>entrar em contato</span>.</p>
        </div>

        <div className='tecnologia w-full lg:w-1/2 text-left flex flex-col gap-6'>
            <h3 className='font-semibold text-[1.5em]'>Tecnologias</h3>
            <div className='tec-secao flex flex-col gap-6'>
              <div className="front">
                <h4 className='text-[1.2em] font-semibold'>Frontend:</h4>
                <div className='tec flex flex-wrap gap-[1em]'>
                  <div className="card"><img src="html.png" alt="html" /><h4>HTML</h4></div>
                  <div className="card"><img src="css.png" alt="css" /><h4>CSS</h4></div>
                  <div className="card"><img src="js.png" alt="js" /><h4>JavaScript</h4></div>
                  <div className="card"><img src="tailwind.png" alt="tailwind" /><h4>Tailwind</h4></div>
                  <div className="card"><img src="react.png" alt="tailwind" /><h4>React</h4></div>
                </div>
              </div>
              <div className='back'>
                <h4 className='text-[1.2em] font-semibold'>Backend:</h4>
                <div className="tec flex flex-wrap gap-[1em]"> 
                  <div className="card"><img src="node.png" alt="node" /><h4>Node.js</h4></div>
                  <div className="card"><img src="mongo.png" alt="mongo" /><h4>MongoDB</h4></div>
                  <div className="card"><img src="mysql.png" alt="mysql" /><h4>MySQL</h4></div>
                  <div className="card"><img src="prisma.png" alt="prisma" /><h4>Prisma</h4></div>
                </div>
              </div>
            </div>
        </div>
      </div>
     </section>
     <Projetos/>
     <Contato/>
     <footer className='bg-black !text-white'>
     <div className='border-b-[1px] border-white/30 flex flex-col  items-start gap-12 mb-8 py-5 px-4 sm:flex-row sm:justify-between sm:px-[5em]' >
       <div className='  text-white text-left'>
          <h1 className='font-semibold text-[1.5em] mb-[1em] '>Mateus Celestino</h1>
          <p className='t'>Crio experiências completas – do servidor à tela.</p>
      </div>
          <div className='social  bg-transparent flex flex-col gap-4 '>
               <h3 className='text-[1.5em] text-white font-semibold'>Social</h3>
            <ul className='pl-[.5em] gap-[1em] bg-transparent flex flex-row'>
               <li><a className='link-social ' target='_blank' href="https://www.linkedin.com/in/mateus-celestino-a3b535367/"><img className='w-[30px] bg-amber-50 rounded-2xl' src="linkedin-60.png" alt="" /></a></li>
                <li><a className='link-social' target='_blank' href="https://github.com/devMateus02"><img  className='w-[30px] bg-amber-50 rounded-2xl' src="github-96.png" alt="link para o github"/></a></li>
            </ul>
           </div>
     </div>
           <p className='text-[.8em] pb-[1.5em]'>© Copyright 2025 . Made by <a className='underline font-semibold ' href="home">Mateus Celestino</a></p>
      </footer>
    </div>
   </>
  )
}

export default App

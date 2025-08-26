import React, { useRef, useState } from 'react';
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://mateuscelestinoportifolio.onrender.com',
});

const Contato = ({ getUsers }) => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputText = useRef();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  async function postUsers(e) {
    e.preventDefault();
    const name = inputName.current.value.trim();
    const message = inputText.current.value.trim();
    const email = inputEmail.current.value.trim();

    if (!name || !message || !email) {
      setError('Preencha todos os campos.');
      setMessage('');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email inválido.');
      setMessage('');
      return;
    }

    try {
      await Api.post('/send-email', { name, message, email });

      setMessage('enviado com sucesso');
      setError('');
      if (getUsers) getUsers();

      inputName.current.value = '';
      inputText.current.value = '';
      inputEmail.current.value = '';
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.error);
      } else {
        setError('Erro ao enviar.');
      }
      setMessage('');
    }
  }

  return (
    <section
      id="contato"
      className="container-contato mb-8 flex flex-col  pt-5 justify-center items-center px-4"
    >
      <h2 className="text-2xl font-normal">contato</h2>

     <div className='flex flex-col md:flex-row w-[100%] gap-10 mt-5 justify-center'>
       <div data-aos='fade-right' className="cot w-[100%] flex justify-center items-center mt-4">
        <form className="form-cont w-[100%] flex flex-col justify-center items-center gap-6  max-w-3xl ">
          <input
            ref={inputName}
            type="text"
            placeholder="Nome"
            className="w-full sm:w-1/2 h-[2em] p-2.5 border-none focus:outline-[rgb(165,84,241)]"
          />

          <input
            ref={inputEmail}
            type="email"
            placeholder="Email"
            className="w-full sm:w-1/2 h-[2em] p-2.5 border-none focus:outline-[rgb(165,84,241)]"
          />

          <textarea
            ref={inputText}
            placeholder="Mensagem"
            className="w-full sm:w-1/2 h-[10em] p-2.5 border-none resize-none focus:outline-[rgb(165,84,241)]"
          />

          {message && <p style={{color:'green'}}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}


          <button
            onClick={postUsers}
            className="bg-[rgb(165,84,241)] text-white font-medium py-2 px-8 rounded-[10px] border-none cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 w-[50%]"
          >
            Enviar
          </button>
        </form>
      </div>

      <div data-aos='fade-left' className='w-[100%] mb-16'>
           <div className='sm:w-[350px] h-[250px] flex flex-col  items-start justify-center bg pl-2.5 rounded-2xl'>
            <p className='text-white font-normal'>
            <span className='font-semibold  '>Email:</span> devmateusfullstack@gmail.com
           </p>
           <p className='text-white font-normal'><span className='font-semibold '>Contato:</span> 55+ (21)987501858</p>
          <div className='flex flex-row justify-center'> 
            <a
             className="transition-all duration-[.5s] ease-in-out scale-[0.8] hover:scale-[1]"
             target="_blank"
             href="https://www.instagram.com/mateus_celestino_12/"
           >
            <img src="Instagram.png" alt="link para o github" />
              </a>
             <a 
            href="https://wa.me/5521987501858?text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-[.5s] ease-in-out scale-[0.7] hover:scale-[0.9]"
          >
            <img
              className="w-[45px] h-[45px]"
              src="whatsapp-70.png"
              alt=""
            />
          </a>
           <a className="transition-all duration-[.5s] ease-in-out scale-[0.8] hover:scale-[1]"
              target="_blank"
                    href="https://www.linkedin.com/in/mateus-celestino-a3b535367/"
                  >
                    <img src="LinkedIn.png" alt="" />
                  </a>
          </div>
           </div>
      </div>
     </div>
    </section>
  );
};

export default Contato;

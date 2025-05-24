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
      className="container-contato flex flex-col justify-center items-center min-h-[90vh] px-4"
    >
      <h2 className="text-2xl mb-1.5 font-normal">contato</h2>

      <div className="cot w-full h-[40vh] flex justify-center items-center mt-4">
        <form className="form-cont flex flex-col justify-center items-center gap-6 w-full max-w-3xl ">
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
    </section>
  );
};

export default Contato;

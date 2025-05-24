import { useEffect, useState } from 'react';
import axios from 'axios';


function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  useEffect(() => {
    axios.get('https://mateuscelestinoportifolio.onrender.com/projetos')
      .then(res => setProjetos(res.data))
      .catch(err => console.error(err));
  }, []);

  const abrirModal = (proj) => setProjetoSelecionado(proj);
  const fecharModal = () => setProjetoSelecionado(null);

  return (
    <section id='portifolio h-[80vh]' className='flex flex-col justify-center items-center px-4'>
      <h2>Portifólio</h2>

      <div className='w-full max-w-7xl'>
        {projetos.map((proj, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row mt-4 mb-[6em] justify-around items-center flex-wrap gap-6"
          >
            <img
              src={proj.src}
              alt={proj.alt}
              className="w-full md:w-[50%] h-auto object-contain"
            />

            <div className="flex flex-col items-start w-full md:w-[30%] gap-4">
              <h3 className='text-[1.4em]'>{proj.nome}</h3>
              <p className='text-left text-[.9em]'>{proj.descricao}</p>
              <button
                className="bg-[rgb(165,84,241)] text-white font-medium text-[1.5em] py-[.5rem] px-[2rem]
                  rounded-[10px] border-none cursor-pointer transition duration-[.5s] ease-in-out transform hover:translate-y-[-5px]"
                onClick={() => abrirModal(proj)}
              >
                Ver Projeto
              </button>
            </div>
          </div>
        ))}
      </div>

      {projetoSelecionado && (
     <div
  className="fixed top-10 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[999] p-4 overflow-auto"
  onClick={fecharModal}
>
  <div
    className="flex justify-center flex-col bg-white p-[2em] rounded-[10px] max-w-[90%] md:max-w-[50%] w-full items-center relative"
    onClick={e => e.stopPropagation()}
  >
    <span
      className="absolute top-[-0.5rem] right-[1rem] cursor-pointer text-[2.5rem] w-[20px] h-[20px] hover:text-red-600"
      onClick={fecharModal}
    >
      &times;
    </span>

    <h3 className="p-2 font-semibold text-[1.5em] border-b-[1.5px] border-[rgb(165,84,241)]">
      {projetoSelecionado.nome}
    </h3>

    <img
      className="max-w-full h-auto my-[1rem] mx-0"
      src={projetoSelecionado.src}
      alt={projetoSelecionado.alt}
    />

    {/* Tecnologias usadas */}
    {projetoSelecionado.tecnologias && (
      <div className="w-full flex flex-wrap justify-center gap-2 my-2">
        {projetoSelecionado.tecnologias.map((tec, i) => (
          <span
            key={i}
            className="bg-[rgb(165,84,241)] text-white px-3 py-1 rounded-full text-sm"
          >
            {tec}
          </span>
        ))}
      </div>
    )}

    <div className="modal-buttons flex w-full justify-around mt-[1rem] gap-4">
      <a
        href={projetoSelecionado.link}
        target="_blank"
        rel="noopener noreferrer"
        className="modal-btn bg-[rgb(165,84,241)] text-white py-[.5rem] px-[1rem] rounded-[10px]"
      >
        GitHub
      </a>
      <a
        href={projetoSelecionado.site}
        target="_blank"
        rel="noopener noreferrer"
        className="modal-btn bg-[rgb(165,84,241)] text-white py-[.5rem] px-[1rem] rounded-[10px]"
      >
        Site
      </a>
    </div>
  </div>
</div>


      )}
    </section>
  );
}

export default Projetos;

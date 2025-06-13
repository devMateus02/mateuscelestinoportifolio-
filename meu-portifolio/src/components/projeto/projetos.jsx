import { useEffect, useState } from 'react';
import axios from 'axios';

function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(`https://mateuscelestinoportifolio.onrender.com/projetos?page=${pagina}&limit=3`)
      .then(res => {
        setProjetos(res.data.projetos || []);
        setTotalPaginas(res.data.pagination?.totalPages || 1);
      })
      .catch(err => {
        console.error(err);
        setError('Erro ao carregar projetos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pagina]);

  const abrirModal = (proj) => setProjetoSelecionado(proj);
  const fecharModal = () => setProjetoSelecionado(null);

  const proximaPagina = () => {
    if (pagina < totalPaginas) setPagina(pagina + 1);
  };

  const paginaAnterior = () => {
    if (pagina > 1) setPagina(pagina - 1);
  };

  return (
    <section className='flex flex-col justify-center items-center px-4' id='portifolio'>
      <h2>Portfólio</h2>

      <div className='w-full max-w-7xl'>
        {loading && <p>Carregando projetos...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && projetos.length === 0 && (
          <p>Nenhum projeto encontrado.</p>
        )}

        {!loading && !error && projetos.length > 0 && projetos.map(proj => (
          <div
            key={proj._id}
            className="flex flex-col md:flex-row mt-4 mb-[6em] justify-around items-center flex-wrap gap-6"
          >
            <img src={proj.src} alt={proj.nome} className="w-full md:w-[50%] h-auto object-contain" />
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

      {/* Paginação */}
      <div className="flex gap-4 my-4">
        <button
          onClick={paginaAnterior}
          disabled={pagina === 1}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="self-center">Página {pagina} de {totalPaginas}</span>
        <button
          onClick={proximaPagina}
          disabled={pagina === totalPaginas}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>

      {/* Modal do projeto */}
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

            <img className="max-w-full h-auto my-[1rem] mx-0" src={projetoSelecionado.src} alt={projetoSelecionado.nome} />

           {projetoSelecionado.tecnologias && (
  <div className="w-full flex  flex-col justify-center gap-5 my-2 text-left">
    <h4 className='font-semibold'>Tecnologias</h4>
    <div className='w-[100%] flex flex-wrap gap-2'>
       {Array.isArray(projetoSelecionado.tecnologias)
      ? projetoSelecionado.tecnologias.map((tec, i) => (
          <span key={i} className="bg-[rgb(165,84,241)] text-white px-3 py-1 rounded-full text-sm">
            {tec.trim()}
          </span>
        ))
      : projetoSelecionado.tecnologias.split(',').map((tec, i) => (
          <span key={i} className="bg-[rgb(172,161,138)] text-white px-3 py-1 rounded-full text-sm">
            {tec.trim()}
          </span>
        ))
    }
    </div>
    
  </div>
)}

            <div className="modal-buttons flex w-full justify-around mt-[1rem] gap-4">
              <a
                href={projetoSelecionado.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn bg-[rgb(103,41,161)] text-white py-[.5rem] px-[1rem] rounded-[10px]"
              >
                GitHub
              </a>
              <a
                href={projetoSelecionado.site}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn bg-[rgb(103,41,161)] text-white py-[.5rem] px-[1rem] rounded-[10px]"
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

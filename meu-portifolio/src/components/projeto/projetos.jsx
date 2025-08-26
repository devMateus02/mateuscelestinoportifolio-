import { useEffect, useState } from "react";
import axios from "axios";

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
      .get(
        `https://mateuscelestinoportifolio.onrender.com/projetos?page=${pagina}&limit=3`
      )
      .then((res) => {
        setProjetos(res.data.projetos || []);
        setTotalPaginas(res.data.pagination?.totalPages || 1);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao carregar projetos.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pagina]);

  const abrirModal = (proj) => setProjetoSelecionado(proj);
  const fecharModal = () => setProjetoSelecionado(null);

  

  return (
    <section
      className="flex flex-col justify-center items-center px-4"
      id="portifolio"
    >
      <h2>Portfólio</h2>

      <div className="w-full max-w-7xl">
        {loading && <p>Carregando projetos...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && projetos.length === 0 && (
          <p>Nenhum projeto encontrado.</p>
        )}

        {!loading &&
          !error &&
          projetos.length > 0 &&
          projetos.map((proj) => (
            <div
              key={proj._id}
              className="flex flex-col md:flex-row mt-4 mb-[6em] justify-around items-center flex-wrap gap-6"
            >
              <img data-aos='fade-right'
                src={proj.src}
                alt={proj.nome}
                className="w-full md:w-[50%] h-auto object-contain"
              />
              <div data-aos='fade-left' className="flex flex-col items-start w-full md:w-[30%] gap-4">
                <h3 className="text-[1.4em]">{proj.nome}</h3>
                <p className="text-left text-[.9em]">{proj.descricao}</p>
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
<div data-aos='fade-up' className="flex gap-2 my-6 flex-wrap justify-center items-center">
  {/* Botão Anterior */}
  <button
    onClick={() => setPagina((p) => Math.max(p - 1, 1))}
    disabled={pagina === 1}
    className="px-3 py-1 rounded bg-[rgb(165,84,241)] w-[30px] h-[30px] hover:bg-gray-400 disabled:opacity-70 cursor-pointer"
  >
    <span className="btn-anterior"></span>
  </button>

  {/* Números das páginas */}
  {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
    <button
      key={num}
      onClick={() => setPagina(num)}
      className={`px-3 py-1 rounded cursor-pointer ${
        pagina === num
          ? "bg-[rgb(165,84,241)] text-white"
          : "bg-gray-300 hover:bg-gray-400 text-black"
      }`}
    >
      {num}
    </button>
  ))}

  {/* Botão Próxima */}
  <button
    onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
    disabled={pagina === totalPaginas}
    className=" rounded bg-[rgb(165,84,241)] w-[30px] h-[30px] hover:bg-gray-400 disabled:opacity-70 cursor-pointer"
  >
    <span className="btn-proximo"></span>
  </button>
</div>
      {/* Modal do projeto */}
     {/*
  Modal SEMPRE no DOM, controlado por classe
*/}
<div
  className={`fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[999] p-4 overflow-auto transition-opacity duration-300
    ${projetoSelecionado ? "opacity-100 visible" : "opacity-0 invisible"}`}
  onClick={fecharModal}
>
  <div
    className="flex justify-center flex-col bg-white p-[2em] rounded-[10px] max-w-[90%] md:max-w-[50%] w-full items-center relative"
    onClick={(e) => e.stopPropagation()}
  >
    <span
      className="absolute top-[-0.5rem] right-[1rem] cursor-pointer text-[2.5rem] w-[20px] h-[20px] hover:text-red-600"
      onClick={fecharModal}
    >
      &times;
    </span>

    {projetoSelecionado ? (
      <>
        <h3 className="p-2 font-semibold text-[1.5em] border-b-[1.5px] border-[rgb(165,84,241)]">
          {projetoSelecionado.nome}
        </h3>

        <img
          className="max-w-full h-auto my-[1rem] mx-0"
          src={projetoSelecionado.src}
          alt={projetoSelecionado.nome}
        />

        {projetoSelecionado.tecnologias && (
          <div className="w-full flex  flex-col justify-center gap-5 my-2 text-left">
            <h4 className="font-semibold">Tecnologias</h4>
            <div className="w-[100%] flex flex-wrap gap-2">
              {Array.isArray(projetoSelecionado.tecnologias)
                ? projetoSelecionado.tecnologias.map((tec, i) => (
                    <span
                      key={i}
                      className="bg-[rgb(165,84,241)] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tec.trim()}
                    </span>
                  ))
                : projetoSelecionado.tecnologias
                    .split(",")
                    .map((tec, i) => (
                      <span
                        key={i}
                        className="bg-[rgb(172,161,138)] text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tec.trim()}
                      </span>
                    ))}
            </div>
          </div>
        )}

        <div className="modal-buttons flex w-full justify-end mt-[1rem] gap-1">
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
      </>
    ) : (
      <p className="text-gray-500">Selecione um projeto para visualizar.</p>
    )}
  </div>
</div>
      
    </section>
  );
}

export default Projetos;

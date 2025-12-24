import ItemLista from "./ItemLista";
import { useState, useRef } from "react";

function App() {
  const inputAdicionar = useRef();

  const [listaMercado, setListaMercado] = useState([]);
  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    novaLista.push(valorInput);
    setListaMercado(novaLista);

    inputAdicionar.current.value = "";
  };

  return (
    <>
      <h1>Lista de Compras</h1>
      <input ref={inputAdicionar} type="text" placeholder="Digite um item" />
      <button onClick={() => adicionarElementoNaLista()} type="button">
        Adicionar
      </button>
      {listaMercado.length > 0 ? (
        <ul>
          {listaMercado.map((itemLista, index) => (
            <ItemLista
              key={index}
              itemLista={itemLista}
              listaMercado={listaMercado}
              setListaMercado={setListaMercado}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhum item na lista</p>
      )}
    </>
  );
}

export default App;

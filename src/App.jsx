import ItemLista from "./ItemLista";
import { useState } from "react";

function App() {
  const [listaMercado, setListaMercado] = useState([]);

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    novaLista.push("Novo Item");
    console.log(novaLista);
    setListaMercado(novaLista);
  };

  return (
    <>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Digite um item" />
      <button onClick={() => adicionarElementoNaLista()} type="button">
        Adicionar
      </button>
      {listaMercado.length > 0 ? (
        <ul>
          {listaMercado.map((itemLista, index) => (
            <ItemLista key={index} itemLista={itemLista} />
          ))}
        </ul>
      ) : (
        <p>Nenhum item na lista</p>
      )}
    </>
  );
}

export default App;

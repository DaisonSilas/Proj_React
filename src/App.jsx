import ItemLista from "./ItemLista";

const listaMercado = ["Arroz", "Feijão", "Macarrão"];

function App() {
  return (
    <>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Digite um item" />
      <button type="button">Adicionar</button>
      <ul>
        {listaMercado.map((itemLista, index) => (
          <ItemLista key={index} itemLista={itemLista} />
        ))}
      </ul>
    </>
  );
}

export default App;

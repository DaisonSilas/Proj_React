import ItemLista from "./ItemLista";

function App() {
  return (
    <>
      <h1>Lista de Compras</h1>
      <input type="text" />
      <button type="button">Adicionar</button>

      <ul>
        <ItemLista />
        <ItemLista />
        <ItemLista />
      </ul>
    </>
  );
}

export default App;

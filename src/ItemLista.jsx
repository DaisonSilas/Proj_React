import React from "react";

const ItemLista = (props) => {
  return (
    <li>
      <p>{props.itemLista}</p>
      <button>Remover</button>
    </li>
  );
};

export default ItemLista;

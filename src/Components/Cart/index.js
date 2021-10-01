import { useState } from "react/cjs/react.development";

const Cart = ({ cartBuy, setCartBuy }) => {
  const totalPrice = cartBuy.reduce(function (acc, valorAtual) {
    return acc + valorAtual.price;
  }, 0);

  const totalDiscount = cartBuy.reduce(function (acc, valorAtual) {
    return acc + valorAtual.discount;
  }, 0);
  const handleRemove = (codeRemove) => {
    const filter = cartBuy.filter((product) => product.code !== codeRemove);
    setCartBuy(filter);
  };
  return (
    <div>
      <span>
        Preco dos itens:{" "}
        {totalPrice.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span>
        Desconto Obtido:{" "}
        {totalDiscount.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <h4>
        Preco total:{" "}
        {(totalPrice - totalDiscount).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>
      <span>Carrinho</span>
      <ul>
        {cartBuy.map((product) => (
          <li key={product.code}>
            <h3>Produto: {product.name}</h3>
            <span>Descricao: {product.description}</span>
            <h4>
              Preco:{" "}
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h4>
            <p>
              Desconto:{" "}
              {product.discount.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => handleRemove(product.code)}>
              Remover do Carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

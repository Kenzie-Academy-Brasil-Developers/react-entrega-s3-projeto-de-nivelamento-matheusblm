import { useState } from "react";

function Form({ products, setProducts }) {
  const [codeUser, setCodeUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [descriptionUser, setDescriptionUser] = useState("");
  const [priceUser, setPriceUser] = useState("");
  const [discountUser, setDiscountUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      code: codeUser,
      name: nameUser,
      description: descriptionUser,
      price: priceUser,
      discount: discountUser,
    };
    setProducts([...products, newProduct]);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={codeUser}
          onChange={(e) => setCodeUser(e.target.value)}
        />
        <input
          type="text"
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
        />
        <input
          type="text"
          value={descriptionUser}
          onChange={(e) => setDescriptionUser(e.target.value)}
        />
        <input
          type="text"
          value={priceUser}
          onChange={(e) => setPriceUser(e.target.value)}
        />
        <input
          type="text"
          value={discountUser}
          onChange={(e) => setDiscountUser(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default Form;

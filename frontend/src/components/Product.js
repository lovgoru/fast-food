import { useState } from "react";

const Product = ({ product }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const handleClick = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className="product-div" key={product._id}>
      <h3>{product.name}</h3>
      <img src={"/images/products/" + product.img_name} alt={product.name} />
      <h4
        className={showIngredients ? "clickable active" : "clickable"}
        onClick={handleClick}
      >
        Sastojci {showIngredients ? "▲" : "▼"}
      </h4>
      {showIngredients &&
        product.ingredients &&
        product.ingredients.map((ing) => <p key={ing}> {ing}</p>)}
      <p>
        <strong>{product.price} €(EUR)</strong>
      </p>
    </div>
  );
};

export default Product;

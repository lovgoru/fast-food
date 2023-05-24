import { useState, useEffect } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  const findCategories = (products) => {
    let categories = [];
    products.forEach((product) => {
      if (!categories.includes(product.type)) {
        categories.push(product.type);
      }
    });
    return categories;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080/api/foods/specials"
          : "https://fast-food-api.onrender.com/api/foods"
      );
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
        setCategories(findCategories(json));
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="filters">
        <h2>Izbornik</h2>
        {categories &&
          categories.map((cat) => (
            <div className="filter">
              <a href={"#" + cat}>{cat}</a>
            </div>
          ))}
      </div>
      <div className="categories">
        {categories &&
          categories.map((cat) => (
            <div key={cat} className="category" id={cat}>
              <h2 className="category-title">{cat}</h2>
              <div className="products-div">
                {products &&
                  products.map((product) =>
                    product.type === cat ? <Product product={product} /> : null
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;

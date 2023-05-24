const Special = ({ special }) => {
  return (
    <a href="/products">
      <div className="special-div">
        <h3>{special.name}</h3>
        <img src={"/images/products/" + special.img_name} alt={special.name} />
        <p>Cijena samo {special.price} EUR</p>
      </div>
    </a>
  );
};

export default Special;

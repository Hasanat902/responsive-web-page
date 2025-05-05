const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full h-58 object-cover"
        />
      </figure>
      <div className="card-body h-34">
        <h2 className="card-title">{product.name}</h2>
        <p>
          Price: <span>&#2547;</span>
          {product.price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-300 font-bold hover:bg-blue-400">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

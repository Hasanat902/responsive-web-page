import { Link } from "react-router";

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
      <div className="card-body h-36">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-lg font-bold text-gray-600">
          <span>&#2547;</span>
          {product.price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/product/${product.id}`} className="btn bg-blue-300 font-bold hover:bg-blue-400">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

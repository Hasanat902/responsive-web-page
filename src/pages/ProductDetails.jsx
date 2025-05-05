import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://admin.refabry.com/api/all/product/get")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.data.data.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(singleProduct);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center mt-24">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  const descriptionParts = product.short_desc
    .split("\n")
    .filter((part) => part.trim() !== "");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 my-14">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full h-screen object-cover rounded-lg"
      />
      <div className="bg-blue-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-3xl font-bold my-4 text-gray-600">
          <span className="mr-2">&#2547;</span>
          {product.price}
        </p>
        <div>
          {descriptionParts.map((part, index) => (
            <p key={index}>{part.trim()}</p>
          ))}
        </div>
        <button className="btn bg-blue-400 text-lg font-bold hover:bg-blue-500 mt-8 w-full">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

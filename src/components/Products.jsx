import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://admin.refabry.com/api/all/product/get")
      .then((res) => res.json())
      .then((data) => setProducts(data.data.data));
  }, []);

  console.log(products);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-5">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

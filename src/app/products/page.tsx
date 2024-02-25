import { Products } from "@/utils/mock";
import ProductCard from "@/components/ui/ProductCard";
import { StaticImageData } from "next/image";
const AllProducts = () => {
  return (
    <div>
      <div className="m-10 grid md:grid-cols-3 gap-10 rounded-md">
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};
export default AllProducts;

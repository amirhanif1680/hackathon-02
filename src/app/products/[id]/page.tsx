import Script from 'next/script';
import { Products } from "@/utils/mock";
import Image from "next/image";
import Quantity from "@/components/Quantity";

const getProductDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["XS", "S", "M", "L", "XL"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductDetail(params.id);

  return (
    <div className="flex flex-col">
      {result.map((product) => (
        <div key={product.id} className="min-h-screen gap-5 flex items-center">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              height={400}
              width={400}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Product Detail</h1>
            <div className="text-2xl font-bold mt-5">{product.name}</div>
            <div className="text-xl font-semibold text-gray-600 mt-2">
              Category: {product.tagline}
            </div>
            <div className="text-xl font-semibold mt-2">Select Size</div>
            <div className="flex mt-5 gap-5">
              {sizes.map((items, i) => (
                <span
                  key={i}
                  className="h-5 w-5 rounded-full text-xs bg-slate-100 border-2 flex justify-center items-center"
                >
                  {items}
                </span>
              ))}

            </div>
            <div className="flex items-center gap-5 mt-7">
              <div className="text-2xl font-bold gap-5">Quantity:</div>
             <Quantity/> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
import React from "react";
import Image, { StaticImageData } from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import { Products } from "@/utils/mock";
import { Button } from "@/components/ui/button";
function ProductList() {
  const productChunk = Products.slice(0, 3);

  return (
    <>
      <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-10 rounded-md">
        {productChunk.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))}

        {/* <ProductCard title="Brushed Raglan Sweatshirt" price={195} img={P1}/>
    <ProductCard title="Cameryn Sash Tie Dress" price={545} img={P2}/>
    <ProductCard title="Flex Sweatshirt" price={175} img={P3}/>
    <ProductCard title="Flex Sweatpants" price={175} img={P4}/>
    <ProductCard title="Pink Fleece Sweatpants" price={195} img={P5}/>
    <ProductCard title="Lite Sweatpants" price={150} img={P6}/>
    <ProductCard title="Imperial Alpaca Hoodie" price={525} img={P7}/>
    <ProductCard title="Muscle Tank" price={75} img={P8}/>
    <ProductCard title="Brushed Bomber" price={225} img={P9}/>
    <ProductCard title="Flex Push Button Bomber" price={225} img={P10}/>
    <ProductCard title="Raglan Sweatshirt" price={195} img={P11}/>
    <ProductCard title="Kiddy Red Frock" price={350} img={P12}/>
    <ProductCard title="Gilrs Skirt" price={425} img={P13}/> */}
      </div>
    </>
  );
}

export default ProductList;

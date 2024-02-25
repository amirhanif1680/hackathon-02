import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./button";
function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category:string;
  id:number;
}) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className="mt-5">
      <Image src={props.img} alt="product-image" />
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className=" flex gap-2 font-bold text-lg>">Category:<p className="text-base font-normal capitalize">{props.category}</p></p>
      <p className="font-bold text-lg>">${props.price}</p>
    </div>
    <Button>Add to Card</Button>
    </Link>
    
  );
}

export default ProductCard;

import { Products } from "@/utils/mock";
import ProductCard from "@/components/ui/ProductCard";
import { StaticImageData } from "next/image";

const getProductByCategory = (category:string)=>{
    return Products.filter((product)=>product.category=== category)
}

export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug)
    return <div className="m-10 grid md:grid-cols-3 gap-10 rounded-md">
   
   
   {
    result.length > 0 ? result.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
          
        />
      )) : <p>No Product Found</p>
   }
   
    
  </div>
  }

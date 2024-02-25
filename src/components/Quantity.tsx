"use client"

import { useState } from "react"

const Quantity = () => {

const [num, setNum] = useState(1)

console.log(num) 
    return <div>


        <div className="flex gap-5">
            <button className="flex justify-center items-center h-7 w-7 bg-gray-100 rounded-full text-black text-3xl"
            onClick={()=> setNum(num <= 1 ? 1 : num - 1)}>-</button>
            <div>{num}</div>
            <button className="flex justify-center items-center h-7 w-7 bg-gray-100 rounded-full text-black text-2xl"
            onClick={()=> setNum(num +1)} >+</button>
        </div>


    </div>
}
export default Quantity
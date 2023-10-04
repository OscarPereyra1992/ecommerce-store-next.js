"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps{
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="nt-3 flex-item-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            {/*Agregar descripción del producto aqui*/ }
            <div className="nt-10 flex items-center gap-x-3" >
                <Button className="flex items-center gap-x-2">
                    Agregar al carro
                    <ShoppingCart />
                </Button>

            </div>
        </div>
      );
}
 
export default Info;
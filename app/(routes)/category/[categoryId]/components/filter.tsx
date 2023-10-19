"use client";

import qs from "query-string";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps{
    
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
   
    name,
    valueKey,
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) =>{
        const current = qs.parse(searchParams.toString());
        

        const query = {
            ...current,
            [valueKey] : id
        };
        

        if(current[valueKey]=== id){
            query[valueKey] = null;
        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        },{
            skipNull: true,
        });

        router.push(url, { scroll: false });
    }

    return ( 
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4"/>
            
        </div>
     );
}
 
export default Filter;
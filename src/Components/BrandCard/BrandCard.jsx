import { useEffect, useState } from "react";
import Brand from "./Brand";



const BrandCard = () => {
    const [brands, setBrands ] = useState([])

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setBrands(data))
    },[])
    return (
        <div >
            <h1 className="text-center text-5xl font-bold my-10">Our special Brand</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default BrandCard;
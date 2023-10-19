import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";


const BrandsItems = () => {
    const products = useLoaderData(null)
    const { brand_name } = useParams();
    const [ brands, setBrands ] = useState([])

    useEffect( () => {
        const filterProduct = products?.filter(brand => brand.brand_name == brand_name)
        setBrands(filterProduct);

    },[products,brand_name])
    
    return (
        <div>
            <h3 className="text-5xl font-bold text-center">FEATURED PRODUCTS</h3>
           <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 my-10">
           {
                brands.map(product => <Product key={brands._id} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default BrandsItems;
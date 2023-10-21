import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";


const BrandsItems = () => {
    const products = useLoaderData(null)
    const { brand_name } = useParams();
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const filterProduct = products?.filter(brand => brand.brand_name == brand_name)
        setBrands(filterProduct);

    }, [products, brand_name])

    return (
        <div className="max-w-6xl mx-auto"> 
            <div className="carousel w-full my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/kxRmwhH/Dominos-Beshi-Kushi-App-carousles-together-29-202310191697689401-202310191697691663.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Wcq3gsf/images-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NLmhf7m/Friday-Specials-Meal-OLO-Banner-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/SmVtYbW/download.png" className="w-full bg-cover bg-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>           
            <h3 className="text-5xl font-bold text-center">FEATURED PRODUCTS</h3>
            
            <div className="  grid grid-cols-2 gap-8 my-10">
                {
                    brands.map(product => <Product key={brands._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default BrandsItems;
import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const myCartProduct = useLoaderData()
    return (
        <div >
            <h3 className="text-center text-3xl font-bold my-10">My Cart Product List </h3>
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
                {
                    myCartProduct.map(cart => <div key={cart._id} className="card w-96 glass">
                    <figure><img className="h-[300px]" src={cart.photo} alt="food!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cart.name}</h2>
                        <p>{cart.brand_name}</p>
                        <p>price : {cart.Price}</p>
                        <div className="card-actions flex items-center justify-between">
                            <button className="btn btn-primary">Order Now</button>
                            <button className="btn bg-red-700  ">X</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default MyCart;
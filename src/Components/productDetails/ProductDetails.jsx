import { Link, useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const productDetails = useLoaderData()
    const { _id, name, brand_name,Price, Rating, photo } = productDetails;
    const carts = { _id, name, brand_name,Price, Rating, photo }
    const handleAddCart = () => {
        fetch("http://localhost:5500/myCarts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(carts),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                  alert("data added")
              }
            });

    }
    // send to data in server
  
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold">Product Details</h2>
            <div className="relative flex w-full max-w-6xl mx-auto   my-12 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                   <div className="flex justify-between items-center">
                   <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {name}
                    </h6>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        {Rating}
                    </p>
                   </div>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {brand_name}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-semibold leading-relaxed text-gray-700">Price : {Price}</p>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aperiam ea voluptas deserunt nulla iste placeat error cum, nam porro.
                    </p>
                   <Link to={"/MyCart"}>
                   <a onClick={handleAddCart} className="inline-block" href="#">
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to Cart
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                   </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
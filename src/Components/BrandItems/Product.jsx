import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { name, brand_name, Type, Price, Rating, photo } = product;
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={photo} alt="Food" /></figure>
                <div className="card-body">
                    <div className="flex items-center  justify-around">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
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
                  <div className="text-xl ">
                  <p>Brand Name: {brand_name} </p>
                    <p>Price : {Price}</p>
                    <p>Type : {Type}</p>
                   
                  </div>
                  <p className="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, nesciunt.</p>

                    <div className="card-actions ">
                        <button className="btn btn-primary">More Details</button>
                      <Link to={`/singleProduct/${product._id}`}>
                      <button className="btn btn-primary">More Update</button>
                      </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
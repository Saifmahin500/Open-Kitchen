import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { brand_name, Image } = brand;
    return (
    
          <Link to={`/brandItems/${brand_name}`}>
            <div className="card w-96 bg-base-100 shadow-xl my-10">
                <figure><img className=" h-[200px]" src={Image} alt="Food" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-2xl font-bold">
                        {brand_name}
                    </h2>
                    <p className="font-medium">Let’s glow, Star Days</p>
                </div>
            </div>
          </Link>

    );
};

export default Brand;
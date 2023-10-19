

const Product = ({ product }) => {
    const { name, brand_name, Type, Price, Description, Rating, photo } = product;
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={photo} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {Price}</p>
                    <p>{Description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
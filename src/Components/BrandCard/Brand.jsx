

const Brand = ({ brand }) => {
    const { ID, Image, Brand_Name, Short_Description } = brand;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-10">
                <figure><img className=" h-[200px]" src={Image} alt="Food" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-2xl font-bold">
                        {Brand_Name}
                    </h2>
                    <p className="font-medium">Let’s glow, Star Days</p>
                </div>
            </div>
        </div>
    );
};

export default Brand;
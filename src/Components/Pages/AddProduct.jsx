
import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const Description = form.Description.value;
        const Rating = form.Rating.value;
        const photo = form.photo.value;
        const ProductItem = {name,brand_name,Type,Price,Description,Rating,photo}
        console.log(ProductItem);

        // send data on server
        fetch('https://food-shop-server-side-csim0mcdv-saif-mahins-projects.vercel.app/foods',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(ProductItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId > 1) {
                Swal.fire(
                    'Good job!',
                    'Your pr0duct added!',
                    'success'
                )
                
            }
        })
    }
    return (
        <div >         
            <div className="max-w-6xl mx-auto my-10 bg-[#e0b75a] p-24 " >
                <h2 className="text-3xl font-extrabold text-center mb-5">Add Product</h2>

                <form onSubmit={handleAddProduct}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-medium">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-medium">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand_name" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-medium">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-medium">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-medium">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Description" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-medium">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-red-700 font-bold" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;
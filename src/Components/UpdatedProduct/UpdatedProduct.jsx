import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedProduct = () => {
    const singleData = useLoaderData()
    const { _id, name, brand_name, Type, Price, Description, Rating, photo } = singleData;
    console.log(singleData);
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const Description = form.Description.value;
        const Rating = form.Rating.value;
        const photo = form.photo.value;
        const updatedItem = { name, brand_name, Type, Price, Description, Rating, photo }
        console.log(updatedItem);

        // send data on server
        fetch(`http://localhost:5500/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )

                }
            })
    }
    return (
        <div>
            <div >
                <div className="max-w-6xl mx-auto my-10 bg-[#e0b75a] p-24 " >
                    <h2 className="text-3xl font-extrabold text-center mb-5">Update Product</h2>

                    <form onSubmit={handleUpdateProduct}>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-medium">Product Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-medium">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand_name" defaultValue={brand_name} placeholder="Brand Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-medium">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Type" defaultValue={Type} placeholder="Type" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-medium">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-medium">Short Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Description" defaultValue={Description} placeholder="Short Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-medium">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Rating" defaultValue={Rating} placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium">Photo</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Update Product" className="btn btn-block bg-red-700 font-bold" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedProduct;
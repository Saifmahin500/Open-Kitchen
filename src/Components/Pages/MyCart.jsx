import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const myCartProduct = useLoaderData()
    const [carts, setCarts] = useState(myCartProduct)
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

        fetch(`http://localhost:5500/myCarts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>  {
        console.log(data);
        if (data.deletedCount > 0) {
              Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          const reamingUsers = carts.filter(user => user._id !== id)
          setCarts(reamingUsers);
            
            
        }
    })
}
})
}
    return (
        <div >
            <h3 className="text-center text-3xl font-bold my-10">My Cart Product List </h3>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                {
                    carts.map(cart => <div key={cart._id} className="card w-96 glass">
                    <figure><img className="h-[300px]" src={cart.photo} alt="food!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cart.name}</h2>
                        <p>{cart.brand_name}</p>
                        <p>price : {cart.Price}</p>
                        <div className="card-actions flex items-center justify-between">
                            <button className="btn btn-primary">Order Now</button>
                            <button onClick={ () => handleDelete(cart._id)} className="btn bg-red-700  ">Delete</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default MyCart;
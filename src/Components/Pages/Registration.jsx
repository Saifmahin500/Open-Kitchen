import { useContext } from "react";
import { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Registration = () => {
    const [error,setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleAddRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,email,password}
        console.log(user);

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            return setError("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
         }
         else {
             setError(" ")
         }

         createUser(email,password)
         .then(() =>{
             toast.success('Successfully Registration!')
             navigate(location?.state ? location.state : "/")
         })
         .catch(() =>{
             toast.error("already used this account");
         })
    }
    return (
        <div>
            <div className="flex justify-center my-10">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Registration now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleAddRegistration}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input type="text" name="userName" placeholder="UserName" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" required className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        <p>{error}</p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-error">Registration</button>
                                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                            Already have an account?
                                            <Link to="/login">
                                                <a
                                                    className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                                    href="#"
                                                >
                                                    Login
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
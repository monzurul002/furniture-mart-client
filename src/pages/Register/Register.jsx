import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [error, setError] = useState(null);
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const { name, email, password, confirm } = data;
        if (password !== confirm) {
            return setError("Passowrd does n't match")
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    updateUserInfo(name)
                        .then(() => {
                            navigate("/")
                            return Swal.fire({
                                title: "Good job!",
                                text: "User Succesfully has been created.",
                                icon: "success"
                            });
                        })
                }
            }).then(error => {
                console.log(error);
            })

        // emailPassowrdSignIn()
        // .then(result=>{
        //     const user =result.user;
        //     console.log(user);
        // }).then(error)=>{
        //     console.log(error);
        // }




    }

    return (
        <div>
            <div className="hero bg-base-200  pt-7 md:pt-12">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center ">
                        <h1 className="text-4xl font-bold">Register now!</h1>

                    </div>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Your  name" className="input input-bordered" />

                        </div>
                        {errors.name?.type === "required" && (
                            <p className="text-red-600" role="alert">Name is required</p>
                        )}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        {errors.email?.type === "required" && (
                            <p className="text-red-600" role="alert">Email is required</p>
                        )}



                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: true,
                                pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                            })} type="password" placeholder="password" className="input input-bordered" />


                        </div>
                        {errors.password?.type === "required" && (
                            <p className="text-red-600" role="alert">Password is required</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600" role="alert">password at least 6 charecter, at least one uppercase , 1 number , 1 speacial charecter</p>
                        )}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Passowrd</span>
                            </label>
                            <input type="password" {...register("confirm", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <p className="text-red-500">{error}</p>

                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                        </label>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
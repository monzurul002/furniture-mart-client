import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [error, setError] = useState(null);
    const { emailPassowrdSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const { email, password, } = data;
        emailPassowrdSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/")
            }).then(error => {
                setError(error)
                console.log(error);
            })

    }



    return (
        <div >
            <div className="hero bg-base-200  pt-7 md:pt-12">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Login now!</h1>

                        </div>
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
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        {
                            errors.password?.type === "required" && <p className="text-red-600" role="alert">Password is required</p>
                        }
                        <p className="text-red-500">{error?.message}</p>
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
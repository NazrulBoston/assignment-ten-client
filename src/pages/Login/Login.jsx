import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";





const Login = () => {
    const { signInUser, signInWithGoogle, } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get(('email'))
        const password = form.get(('password'))
        console.log(email, password)

        if (password.length < 6) {
            toast("Password is less than 6 characters")
            return
        } else if (!/[A-Z]/.test(password)) {
            toast('Password do not have a capital letter');
            return
        } else if (!/[!@#$%^&*]/.test(password)) {
            toast('Password do not have a special character');
            return
        }

        //create user
        signInUser(email, password)
            .then(result => {
                toast.success('User created successfully!')
                navigate('/')
                console.log(result);
            })
            .then(error => {
                console.log(error);
            })


    }

    const handleSocial = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successfully")
                navigate("/")

            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center mb-3">Please Login </h2>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={() => handleSocial(signInWithGoogle)} className="btn btn-primary mt-6">Google</button>
                        </div>
                    </form>
                    <p className="text-center mb-6">Do not have an account <Link to="/register"><span className="border-2 rounded bg-slate-200 text-blue-600 px-1">Register</span></Link></p>
                    
                </div>
            </div>

        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);

        const name = form.get(('name'));
        const photo = form.get(('photo'));
        const email = form.get(('email'));
        const password = form.get(('password'))

        console.log(name, photo, email, password)

      
    }

    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center mb-3">Please Register</h2>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-6">Already have an account <Link to="/login"><span className="border-2 rounded bg-slate-200 text-blue-600 px-1">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
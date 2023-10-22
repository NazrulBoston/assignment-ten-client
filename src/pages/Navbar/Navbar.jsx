import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out successfully')
                toast.success("Logout Successfully")
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>

            <div className="">
                <nav className="flex flex-col gap-8 md:flex-row mx-5 lg:flex-row justify-between items-center py-6">

                    <Link to="/register">
                        <div className="flex">
                            <p className="mt-4 text-purple-400">Verified</p>
                            <img className="w-18 h-12" src="https://i.ibb.co/X5Zb3Pg/save-energy.png" alt="" />
                            <p className="mt-4 text-purple-400">Electrical</p>

                        </div>
                    </Link>


                    <ul className="flex gap-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                                }
                            >
                                Home
                            </NavLink>

                        </li>

                        <li>
                            <NavLink
                                to="/addproduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                                }
                            >
                                Add Product
                            </NavLink>


                        </li>
                        <li>
                            <NavLink
                                to="/mycart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                                }
                            >
                                My Cart
                            </NavLink>


                        </li>



                        {
                            user ?
                                <div className=" flex space-x-3">
                                    <p className="font-bold uppercase  bg-yellow-300 p-2 rounded-lg">{user?.displayName || user?.email}</p>
                                    <img className="w-12 h-12 rounded-full hidden lg:flex" src={user?.photoURL} alt="" />
                                    <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                                </div> :

                                <div className="flex gap-4">
                                    <li>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                                            }
                                        >
                                            Login
                                        </NavLink>


                                    </li>
                                    <li>
                                        <NavLink
                                            to="/register"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
                                            }
                                        >
                                            Register
                                        </NavLink>


                                    </li>
                                </div>

                        }
                    </ul>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
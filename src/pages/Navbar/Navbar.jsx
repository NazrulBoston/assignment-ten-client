import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>

            <div className="">
                <nav className="flex flex-col gap-8 md:flex-row mx-5 lg:flex-row justify-between items-center py-6">

                    {/* <img src="/Logo.png" alt="" /> */}
                    <h2>OUR COMPANY</h2>

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
                    </ul>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;

import { Link } from "react-router-dom";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>

            <div className="mb-8">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/ZTQMkDZ/banner.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">An electrical company is a business or organization that specializes in providing a wide range of electrical services, products, and solutions to residential, commercial, and industrial customers</p>
                            <Link to="/register">
                                <button className="btn btn-primary">Get Started</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Features></Features>
            </div>
          
            <div className="mt-8">
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;
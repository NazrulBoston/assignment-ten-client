
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
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
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
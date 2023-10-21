import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const ProductDetails = () => {


    const productDetails = useLoaderData();
    const { name, brandName, description, price, image } = productDetails;
    console.log(productDetails)


    return (
        <div className="w-10/12 mx-auto ">
            <Navbar></Navbar>

            <div className="max-w-5xl mx-auto space-y-5 mb-12">
                <div className="">
                    <img className="w-full h-[60vh]" src={image} alt="" />

                </div>
                <div>
                    <div className="flex items-center gap-12 text-xl font-bold ">
                        <h2>{name}</h2>
                        <p>{brandName}</p>
                        <p>${price}</p>
                    </div>
                    <p>{description}</p>
                    <button className="btn btn-primary mt-8">Add to cart</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
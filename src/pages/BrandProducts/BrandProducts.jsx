import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const BrandProducts = () => {
    const brandProducts = useLoaderData();
    const { id } = useParams();
    const filterProducts = brandProducts.find(brand => brand.id == id)
    console.log(filterProducts)
    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <div className="carousel w-full h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={filterProducts.commercial_image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={filterProducts.commercial_image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={filterProducts.commercial_image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default BrandProducts;
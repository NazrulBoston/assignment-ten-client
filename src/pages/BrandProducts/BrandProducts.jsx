import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";





const BrandProducts = () => {
    const brandProducts = useLoaderData();
    const { id } = useParams();
    const filterProducts = brandProducts.find(brand => brand.id == id)
    console.log(filterProducts)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://assignment-ten-server-phi-ecru.vercel.app/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const brandCards = products.filter(brandProduct => brandProduct.brandName == filterProducts.name)
    console.log(brandCards);


    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <div className="carousel w-3/4 h-[60vh] lg:ml-40 mt-8 mb-12">
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
            <div>
                {
                    brandCards.length === 0 ? <p className="mt-8 mb-8 text-center text-5xl font-bold">Product not found</p>:
                        <div className="grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {
                                 brandCards.map(brandCard => <ProductCard
                                    key={brandCard._id} brandCard={brandCard}
                                    ></ProductCard>)
                            }
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;
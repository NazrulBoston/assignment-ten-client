import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const {user} = useContext(AuthContext)

    const[allCarts, setAllCarts] = useState([])

    const productDetails = useLoaderData();
    const { name, brandName, description, price, image, type, rating } = productDetails;
    console.log(productDetails)
    const data = {name, brandName, type, description, price, rating, image}


    useEffect(() => {
        fetch(`https://assignment-ten-server-phi-ecru.vercel.app/cart`)
            .then(res => res.json())
            .then(data => setAllCarts(data))
    }, [allCarts])

    const handleAddToCart = () => {
        
        // console.log(product);
        const getCartCards = allCarts || []
        const isExist = getCartCards.find(cartCard => cartCard._id === productDetails._id)
        if (!isExist) {
            const cartData = {...data, email: user?.email}
            fetch(`https://assignment-ten-server-phi-ecru.vercel.app/cart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        return (
                            Swal.fire({
                                title: 'Success!',
                                text: 'Added to Cart Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        )
                        
                    }
                })
        }
        else{
            return (
                Swal.fire({
                    title: 'Error!',
                    text: 'Duplicate Item',
                    icon: 'error',
                    confirmButtonText: 'Go back'
                })
            )
        }

    }

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
                    <button onClick={handleAddToCart} className="btn btn-primary mt-8">Add to cart</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
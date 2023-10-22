import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartCard from "../CartCard/CartCard";


const MyCart = () => {
    const cartData = useLoaderData()
    console.log(cartData)
    return (
        <div>
            <Navbar></Navbar>
            <p className="text-center font-bold text-2xl mt-8">Total Cart: {cartData.length}</p>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 mb-8">
                {
                    cartData.map(cart => <CartCard
                    key={cart._id} cart={cart}
                    ></CartCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;
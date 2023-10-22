import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartCard from "../CartCard/CartCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyCart = () => {
    const{user} = useContext(AuthContext);
    const cartData = useLoaderData()
    console.log(cartData)
    const cartListData = cartData.filter(cart => cart.email === user.email)

    const [data, setData] = useState(cartListData)
    return (
        <div>
            <Navbar></Navbar>
            <p className="text-center font-bold text-2xl mt-8">Total Cart: {data.length}</p>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 mb-8">
                {
                    data.map(cart => <CartCard
                    key={cart._id} cart={cart} data={data} setData={setData}
                    ></CartCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;
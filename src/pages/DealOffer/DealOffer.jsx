import { Link } from "react-router-dom";


const DealOffer = () => {
    return (
        <div className="w-10/12 mx-auto mt-20">
            <h1 className="text-4xl text-blue-700 my-12 text-center ">Special Offer for Holidays</h1>
            <div className=" lg:flex justify-between items-center gap-4">
                <div>
                    <h1 className="text-4xl text-center">Up to 50% sale whole store. Select your item and get the deal.</h1>
                    <Link to='/register'>
                        <div className="text-center">
                            <button className="btn btn-primary mt-4">Begin here</button>
                        </div>

                    </Link>

                </div>
                <div>
                    <img src="https://i.ibb.co/b1R17gD/sale.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DealOffer;
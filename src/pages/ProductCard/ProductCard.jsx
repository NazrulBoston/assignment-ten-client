import { Link } from "react-router-dom";


const ProductCard = ({ brandCard }) => {
    const { name, brandName, type, description, price, rating, image, _id } = brandCard;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full h-[250px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{brandName}</div>
                </h2>
                <p>${price}</p>
                <p>{type}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">

                    <Link to = {`/update/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>

                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
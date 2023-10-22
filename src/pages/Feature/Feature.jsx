import { Link } from "react-router-dom";




const Feature = ({ feature }) => {
    const { image, name, id } = feature;
    return (



        <div>

            <Link to={`/feature/${id}`}>

                <div className="card card-compact  h-72 bg-base-100 shadow-xl">
                    <figure><img src={feature.image} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h2 className="card-title mx-auto ">{feature.name}</h2>

                    </div>
                </div>
            </Link>

        </div>

    );
};

export default Feature;
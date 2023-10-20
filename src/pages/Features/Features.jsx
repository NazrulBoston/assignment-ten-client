import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";


const Features = () => {

    const[features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFeatures(data));
    },[])

    return (
        <div>
            <h2 className="text-4xl text-blue-700 my-12 text-center">Our Exclusive Brands</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    features.map(feature => <Feature key={feature.id} feature={feature}></Feature> )
                }
            </div>
        </div>
    );
};

export default Features;
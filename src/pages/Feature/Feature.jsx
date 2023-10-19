

const Feature = ({feature}) => {
    const{image, name} = feature;
    return (
        <div className="card card-compact  h-72 bg-base-100 shadow-xl">
        <figure><img src={feature.image} alt="Shoes" /></figure>
        <div className="card-body">
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <h2 className="card-title">{feature.name}</h2>
        
        </div>
      </div>
    );
};

export default Feature;
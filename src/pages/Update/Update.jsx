import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";


const Update = () => {
    const updateProducts = useLoaderData()
    const{name, brandName, type, description, price, rating, image, _id} = updateProducts;
    console.log(updateProducts);

    const handleUpdateProduct = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updateProduct = {name, brandName, type, description, price, rating, image}
        console.log(updateProduct)


        //send data to server
        fetch(`http://localhost:501/products/${_id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0 ){
                Swal.fire({
                    title: 'success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  }) 
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className=" bg-[#c9c3ee] p-24 ">
                    <h2 className="text-3xl font-bold">Update Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                        {/* form row */}
                        <div className="md:flex mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={brandName} name="brandName" placeholder="brand name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={type} name="type" placeholder="type" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={description} name="description" placeholder="description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={price} name="price" placeholder="price" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={rating} name="rating" placeholder="rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form photo url row */}
                        <div className=" mb-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={image} name="image" placeholder="photo url" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Update Product" name="submit" className="btn btn-block border-none bg-blue-400 text-white" />
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;
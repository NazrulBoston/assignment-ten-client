import Swal from "sweetalert2";


const CartCard = ({ cart, data, setData }) => {
    const { image, name, price, type, brandName, _id } = cart;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:501/cart/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = data.filter(card => card._id !== _id)
                            setData(remaining)

                        }
                        

                    })

            }
        })
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brandName}</p>
                <p>{price}</p>
                <p>{type}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(_id)} className="btn btn-primary">Delete
                        </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
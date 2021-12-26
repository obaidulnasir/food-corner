import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("add event successfully!")
                    reset()
                }
            });
    };
    return (
        <div>
            <div className="container">
                <h3 className="text-center">Add a Product</h3>
                <div className="w-75 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Title</label>
                                <input {...register("title", { required: true })} type="text" className="form-control" placeholder="Product title.." />
                            </div>
                        </div>
                        <div className="form-group w-50">
                            <label>Price</label>
                            <input {...register("price", { required: true })} type="number" className="form-control" placeholder="price" />
                        </div>
                        <div className="form-group w-50">
                            <label>Image Link</label>
                            <input {...register("imgLink",{ required: true })} type="text" className="form-control" placeholder="Image bb link" />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="form-group w-50">
                            <label>Description</label>
                            <textarea  {...register("description", { required: true })} className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const data = useLoaderData();
  const { quantity, price, description,  _id } =
    data;
    // get data and update
const formData = (even) => {
  event.preventDefault();
  const data = event.target;
  const price = data.price.value;
  const quantity = data.quantity.value;
  const description = data.description.value;

  const dock = {
    price,
    quantity,
    description,
  };

  fetch(`https://kids-toys-server.vercel.app/UpdateToy/${_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dock),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Add Toy successfully',
          icon: 'success',
          confirmButtonText: 'close'
        })
      }
    });
};

    return (
        <div className="w-4/6 mx-auto">
          <h1 className="text-4xl font-bold text-primary text-center">Update Toy</h1>
            <form onSubmit={formData}  className="w-full mb-8 mt-6 px-4">
                    <h1 className="text-base mb-2 mt-2">Price</h1>
                    <input
                      className="w-full h-10 border-2 rounded-md pl-3 text-black"
                      placeholder="Price"
                      type="text"
                      name="price"
                      defaultValue={price}
                      required
                    />
                    <br />
                    <h1 className="text-base mb-2 mt-6">Quantity</h1>
                    <input
                      className="w-full border-2 h-10 rounded-md pl-3 text-black"
                      placeholder="Quantity"
                      type="text"
                      name="quantity"
                      defaultValue={quantity}
                      required
                    />
                    <br />
                    <label>
                      <h1 className="text-base mb-2 mt-6">
                        Detail Description
                      </h1>
                      <textarea
                        className="w-full border-2 h-20 rounded-md pl-3 text-black"
                        placeholder="Description..........."
                        type="text"
                        name="description"
                        defaultValue={description}
                        required
                      />
                    </label>
                    <br />
                    <button className="bg-green-500 py-2 text-xl text-center text-white rounded-lg hover:bg-green-700 block w-full mt-10">
                      Update
                    </button>
                  </form>
        </div>
    );
};

export default Update;




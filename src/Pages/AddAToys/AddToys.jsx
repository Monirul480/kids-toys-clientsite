import React, { useContext ,  useState} from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";



const AddToys = () => {

  useTitle('AddAToys')

  const [selectedValue, setSelectedValue] = useState("car");
  const {user} = useContext(AuthContext);
  const name = user?.displayName;
  const email = user?.email;

  const toast = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Add Toy successfully',
      icon: 'success',
      confirmButtonText: 'close'
    })
  }

  const handleSelect = (event) => {
    event.preventDefault();
    const data = event.target;
    const photo = data.photo.value;
    const name = data.name.value;
    const sellerName = data.sellerName.value;
    const price = parseInt( data.price.value);
    const description = data.description.value;
    const rating = data.rating.value;
    const email = data.email.value;
    const quantity = data.quantity.value;

    const fromDt = {
      photo,
      name,
      price,
      description,
      rating,
      email,
      quantity,
      sellerName,
      selectedValue
    };
    console.log(fromDt);
    fetch("https://kids-toys-server.vercel.app/AddToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fromDt),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast()
        data.reset();
      });
    console.log(data);
  };


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="bg-slate-200 my-auto lg:h-[calc(100vh-20vh)]">
      <div className="w-2/3 p-5 mx-auto">
        <h1 className="text-center text-3xl pt-11 text-blue-500 font-semibold">
          Add A toys
        </h1>
        <form onSubmit={handleSelect}>
          <div className="flex">
            <div className="w-full">
              <h1 className="text-base  mb-2 mt-2">Tyo Photo</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="Photo"
                type="text"
                name="photo"
                required
              />
            </div>

            <div className="ml-3 w-1/3">
              <h1 className="text-base mb-2 mt-2">Seller name</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="seller name"
                type="text"
                required
                defaultValue={name ? name : ''}
                name="sellerName"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/3">
              <h1 className="text-base mb-2 mt-2">Tyo Name</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
            </div>

            <div className="ml-4 w-1/3">
              <h1 className="text-base mb-2 mt-2">Email</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="Email"
                type="email"
                name="email"
                defaultValue={email}
                readOnly
              />
            </div>
            <div className="ml-5">
              <h1 className="text-base mb-2 mt-2">Category</h1>
              <select
                onChange={handleSelectChange}
                className="py-2 w-24 text-center rounded-md"
              >
                <option value="car">Car</option>
                <option value="track">Track</option>
                <option value="train">Train</option>
              </select>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/3">
              <h1 className="text-base mb-2 mt-2">Price</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="Price"
                type="number"
                name="price"
                required
              />
            </div>
            <div className="ml-4 w-1/3">
              <h1 className="text-base mb-2 mt-2">Raging</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="Rating"
                type="number"
                step="0.01"
                name="rating"
                required
              />
            </div>
            <div className="ml-5">
              <h1 className="text-base mb-2 mt-2">Quantity</h1>
              <input
                className="w-full h-10 rounded-md pl-3 text-black"
                placeholder="Quantity"
                type="number"
                name="quantity"
                required
              />
            </div>
          </div>
          <div>
            <h1 className="text-base mb-2 mt-2">Description</h1>
            <textarea
              className="w-full h-20 pt-2 rounded-md pl-3 text-black"
              placeholder="Description......."
              type="text"
              name="description"
              required
            />
          </div>
          <div className="text-center">
            <input
              className="text-white hover:bg-green-700 bg-primary py-2 px-3 rounded-md mt-5"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ViewDetail = () => {
  const data = useLoaderData();
  const {
    name,
    quantity,
    price,
    description,
    selectedValue,
    photo,
    rating,
    email,
    sellerName,
  } = data;
  console.log(data);
  return (
    <div className=" grid grid-cols-2 min-h-[calc(100vh-40vh)] ">
      <img className="w-full h-[calc(100vh-40vh)]  rounded-md" src={photo} alt="Album" />

      <div className="card-body h-[calc(100vh-40vh)] mt-10">
        <h2 className="card-title">
          <span className="font-bold">SellerName: </span>
          {sellerName}
        </h2>
        <h2 className="card-title">
          <span className="font-bold">Quantity: </span>
          {quantity}
        </h2>
        <h2 className="card-title">
          <span className="font-bold">Toy Name: </span>
          {name}
        </h2>
        <h2 className="card-title">
          <span className="font-bold">Price:$ </span>
          {price}
        </h2>
        <h2 className="card-title">
          <span className="font-bold">Email: </span>
          {email}
        </h2>
        <h2 className="card-title">
          <span className="font-bold">Category: </span>
          {selectedValue}
        </h2>
        <p>
          <span className="font-bold">Description: </span>
          {description}
        </p>
        <div className="justify-between flex">
          <div className="flex mt-3 items-center">
            <p>Rating : {rating}</p>
            <Rating style={{ maxWidth: 150 }} readOnly value={rating} />
          </div>
          <button className="btn btn-primary">
            <Link to="/allToys">Back</Link>
          </button>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ViewDetail;

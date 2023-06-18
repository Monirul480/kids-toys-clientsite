import React, { useContext } from "react";
import Swal from "sweetalert2";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const SingleCard = ({ data }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const btnDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Are you sure Login?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });
    }
    else{
        navigate(`/viewDetails/${_id}`)
    }
  };

  const {
    name,
    quantity,
    price,
    _id,
    description,
    selectedValue,
    photo,
    rating,
    email,
    sellerName,
  } = data;

  return (
    <div className="card bg-slate-300 glass">
      <figure>
        <img className="lg:h-[calc(100vh-50vh)] h-72" src={photo} alt="car!" />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <div className="flex mt-3 items-center">
            <p>Rating : {rating}</p>
            <Rating style={{ maxWidth: 150 }} readOnly value={rating} />
          </div>
          <button onClick={btnDetails} className="btn normal-case btn-primary">
            {/* <Link className="hover:text-white" to={`/viewDetails/${_id}`}> */}
              Details
            {/* </Link> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;


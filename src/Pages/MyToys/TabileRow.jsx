import React, {  useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TabileRow = ({ index, data, deletState }) => {
  const { name, quantity, price, description, selectedValue, _id, photo } =
    data;


  // delete toy
  const deleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kids-toys-server.vercel.app/Delete/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              deletState(id);
            }
            console.log(result);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}.</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="font-bold">{name}</td>
      <td className="font-bold">${price}</td>
      <td className="font-bold">{quantity}</td>
      <th>
        <button className="bg-primary hover:bg-green-800 text-white py-1 px-3 rounded-md">
        <Link className="hover:text-white" to={`/update/${_id}`}>
            Update
          </Link> 
        </button>
      </th>
      <th>
        <button
          onClick={() => deleteToy(_id)}
          className="bg-red-500 hover:bg-red-800 text-white py-1 px-3 rounded-md"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default TabileRow;

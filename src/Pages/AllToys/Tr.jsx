import React from "react";
import { Link } from "react-router-dom";

const Tr = ({ data, index }) => {
  const { name, sellerName, quantity, price, selectedValue, _id } = data;
  return (
    <tr>
      <th>{index + 1}.</th>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{selectedValue}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <button className="bg-primary hover:bg-green-800 text-white py-1 px-3 rounded-md">
          <Link className="hover:text-white" to={`/viewDetail/${_id}`}>
            View
          </Link>
        </button>
      </td>
    </tr>
  );
};

export default Tr;

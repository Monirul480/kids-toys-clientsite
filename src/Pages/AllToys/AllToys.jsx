import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tr from "./Tr";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {

  useTitle('AllToys')

  const [searchQuery, setSearchQuery] = useState("");
  const data = useLoaderData();
  const [toys, setToys] = useState(data);



const handleSearch = () => {
  fetch(`https://kids-toys-server.vercel.app/searchText/${searchQuery}`)
    .then((res) => res.json())
    .then((data) => {
      setToys(data);
    });
};

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search or any other action with the search query
    console.log(searchQuery);
  };

  return (
    <div className="bg-slate-200 my-auto max:h-[calc(100vh-20vh)]">
      <h1 className="text-center text-3xl pt-6 text-blue-500 font-semibold">
        All Toys
      </h1>
      <form className="text-center my-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          className="pl-2 py-2 rounded-md"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button
          className="bg-primary ml-4 hover:bg-green-800 text-white py-2 px-3 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      <div className="overflow-x-auto mx-6">
        <table className="table w-full">
          {/* head*/}
          <thead>
          
            <tr>
              <th className="normal-case text-xl">#</th>
              <th className="normal-case text-xl">Seller Name</th>
              <th className="normal-case text-xl">Toy Name</th>
              <th className="normal-case text-xl">Sub-category</th>
              <th className="normal-case text-xl">Price</th>
              <th className="normal-case text-xl">Available Quantity</th>
              <th className="normal-case text-xl">Details</th>
            </tr>
          </thead>
          <tbody>
            
            {
                toys.map((data, i) => <Tr key={data._id} data={data} index={i}></Tr>) 
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

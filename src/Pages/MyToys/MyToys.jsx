import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TabileRow from "./TabileRow";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {

  useTitle('MyToys')
  const { user } = useContext(AuthContext);
  const [state, SetState] = useState(null)
  const email = user?.email;
  const url = `https://kids-toys-server.vercel.app/MyToys?email=${email}`;
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

  const deletState = (id) => {
    console.log(id);
    const remaining = toys.filter((data) => data._id !== id);
    setToys(remaining);
    console.log(toys.length);
  };


  const handleSort = (event) => {
    const value = (event.target.value);
    console.log(value);
    
      fetch(`https://kids-toys-server.vercel.app/sort?email=${email}&state=${value === 'small' ? 'small' : "large"}`)
      .then(res => res.json())
      .then(data => setToys(data))
   
    // // else if(value === "largeToSmall"){
    // //   fetch(`https://kids-toys-server.vercel.app/MyToys?email=${email}`)
    // //   .then(res => res.json())
    // //   .then(data => setToys(data))
      
    // // }

  };

  return (
    <div className="min-h-[calc(100vh-20vh)]">
      <div className="text-end mr-5 mb-5">
        <select
        onChange={handleSort}
         className="select mt-4 select-info w-full max-w-xs">
          <option disabled selected>
            Sort Price
          </option>
          <option value={"small"}>Small to large</option>
          <option value={"large"}>Large to small</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="normal-case text-xl">No</th>
              <th className="normal-case text-xl">picture</th>
              <th className="normal-case text-xl">Toy Name</th>
              <th className="normal-case text-xl">Price</th>
              <th className="normal-case text-xl">Quantity</th>
              <th className="normal-case text-xl">Update</th>
              <th className="normal-case text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((data, i) => (
              <TabileRow
                deletState={deletState}
                key={data._id}
                data={data}
                index={i}
              ></TabileRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

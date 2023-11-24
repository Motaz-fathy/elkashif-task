import React, { useEffect, useState } from "react";
import { Button } from "../utilts/Button";

import { ToastContainer, toast } from 'react-toastify';

export const UserAddForm = ({ handleSubmit, newUser, handleInputChange , errors  }) => {

  const [disable , setDisable] = useState(true)
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    if(newUser?.name.trim() !== '' &&  newUser?.phone.trim() !== ''  && isValidEmail(newUser?.email) ) {
     setDisable(false)
    } else {
      setDisable(true)
    }
    
  } , [newUser]) 

  return (
    <div>
      <h1 className="text-[24px] font-[500] text-[#8a8a8a]">add new user </h1>
     <ToastContainer />
      <div className=" w-[100%] h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <form
          className="bg-white  rounded px-10 pt-6 pb-8 mb-4 "
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col items-start">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
            {!!errors?.name && <span className="text-red-400 text-[12px]">{errors?.name}</span>}
          </div>
          <div className="mb-4 flex flex-col items-start">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
            />
            {!!errors?.email && <span className="text-red-400 text-[12px]">{errors?.email}</span>}
          </div>

          <div className="mb-4 flex flex-col items-start">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="phone"
              name="phone"
              value={newUser.phone}
              onChange={handleInputChange}
            />
            {!!errors?.phone && <span className="text-red-400 text-[12px]">{errors?.phone}</span>}
          </div>
          <div className="flex items-center justify-center">
            <Button
            onClick={handleSubmit}
            disabled={disable}
            width={"50%"}
            height={"40px"}
            className={`${disable === true ? 'bg-[#eda061]' : ' bg-[#e36c0b]'}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            >
             add user
            </Button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

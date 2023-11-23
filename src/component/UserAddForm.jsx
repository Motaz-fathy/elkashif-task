import React from "react";

export const UserAddForm = ({ handleSubmit, newUser, handleInputChange }) => {

  return (
    <div>
      <h1 className="text-[24px] font-[500] text-[#8a8a8a]">add new user </h1>

      <div class=" w-[100%] h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <form
          class="bg-white  rounded px-10 pt-6 pb-8 mb-4 "
          onSubmit={handleSubmit}
        >
          <div class=" flex flex-col items-start">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
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
          </div>
          <div class="mb-4 flex flex-col items-start">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
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
          </div>

          <div class="mb-4 flex flex-col items-start">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
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
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-[#e36c0b]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

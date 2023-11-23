import React from "react";

export const UserDetails = ({ selectedUser, isFavorite, setIsFavorite }) => {
  const handleFavoriteToggle = () => {
    setIsFavorite(prev => !prev);
  };

  return (
   
      <>
      <h1 className="text-[24px] font-[500] text-[#8a8a8a]">{selectedUser ? "user details" : "plz select user !!"} </h1>
      {selectedUser &&
        <div class="w-[100%] h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <div class="flex justify-end px-4 pt-4 ">
        
        </div>
        <div class="flex flex-col items-center pb-10">
          <div class="w-24 h-24 mb-3 rounded-full shadow-lg bg-[#c7ebe8]" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 ">
          {selectedUser?.name}
          </h5>
          <span class="text-sm text-gray-500 ">
          Email: {selectedUser?.email}
          </span>

          <span class="text-sm text-gray-800 ">
          Phone: {selectedUser?.phone}
          </span>

          <span class="text-sm text-gray-800 ">
          company: {selectedUser?.company?.name}
          </span>

          <span class="text-sm text-gray-400 ">
          catchPhrase: {selectedUser?.company?.catchPhrase}
          </span>

          <div class="flex mt-4 md:mt-6">
            <div onClick={handleFavoriteToggle} className={`inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 
             ${isFavorite ? 'bg-[#e36c0b]' : 'bg-[#f7cfad] '}
            `} >
            {isFavorite ? "Unmark as Favorite" : "Mark as Favorite"}
            </div>
          </div>
        </div>
      </div>
        }

      </>
    
   
  );
};

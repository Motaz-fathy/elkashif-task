import React from 'react'
import { FavoriteIcon } from './FavoriteIcon'

export const Search = ({searchText , setSearchText , handleSearch , searchResults , handleUserClick , isFavorite , selectedUser}) => {
  return (
    <div>


    <ul>
      {searchResults.map((person) => (
          <li key={person.id} className="flex justify-between gap-x-6 py-5 cursor-pointer bg-gray-100" onClick={() => handleUserClick(person)}>
            <div className="flex min-w-0 gap-x-4">
              <div className="h-12 w-12 flex-none rounded-full bg-gray-200" > </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.phone}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.website}</p>
            
                <div className="mt-1 flex items-center">
                 
                  <p className="text-xs leading-5 text-gray-500 max-sm:translate-x-[-100px]">{isFavorite && selectedUser && selectedUser.id === person.id && <span> <FavoriteIcon /> </span>}</p>
                </div>
              
            </div>
          </li>
        ))}
    </ul>
  </div>
  )
}

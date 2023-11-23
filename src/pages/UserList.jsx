import React, { useState, useEffect } from 'react';
import { UserDetails } from './UserDetails';
import { UserAddForm } from '../component/UserAddForm';
import {FavoriteIcon} from '../component/FavoriteIcon'
import { Helmet } from "react-helmet";
import { Header } from '../component/Header';
function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });
  const [switcher , setSwitcher] = useState("detalis")

  const handleDetails = (divName) => {
    if(divName === "detalis") {
        setSwitcher("detalis")
    }else {
        setSwitcher("addUser")
    }
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers(prev => [...prev, data]);
        setNewUser({ name: '', email: '', phone: '' });
      });
  };

  return (
    <div >
      	   <Helmet>
				<title>{selectedUser ? selectedUser?.name : "kashif"} </title>
			</Helmet>
    <Header />
      <h1 className='text-[#fffff] text-[30px] font-[900] my-10'> User List </h1>
   
     <main className='w-[90%] flex justify-center items-start gap-3 max-sm:flex-col m-auto '>

        <section className='w-[50%] max-sm:w-full'>
        <div className='h-[600px] max-sm:h-[300px] overflow-y-scroll	no-scrollbar  p-2 rounded-xl bg-gray-100'>
      <ul role="list" className="divide-y divide-gray-50 bg-white ">
      {users.map((person) => (
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
        </section>

        <section className='w-[50%] flex flex-col items-center w-[40%] max-sm:w-full gap-3 h-[100%] max-sm:bg-gray-200 max-sm:rounded-2xl max-sm:my-5 max-sm:py-5'>
         <div className='w-full h-[50px] flex justify-center items-center gap-3'>
         <span className='px-3 py-2 bg-gray-200 rounded-2xl cursor-pointer text-sm font-bold text-gray-600 ' onClick={() => handleDetails("detalis")}> user details </span>
         <span className='px-3 py-2 bg-gray-200 rounded-2xl cursor-pointer text-sm font-bold text-gray-600 ' onClick={() => handleDetails("addUser")}> add new user  </span>
         </div>
         {
            switcher === "detalis" ? <UserDetails selectedUser={selectedUser} isFavorite={isFavorite} setIsFavorite={setIsFavorite} className="w-full " /> : 
              <UserAddForm handleSubmit={handleSubmit} newUser={newUser}  handleInputChange={handleInputChange} className="w-full"/> 

         }
         
        </section>

     </main>

    </div>
  );
}

export default UserList;
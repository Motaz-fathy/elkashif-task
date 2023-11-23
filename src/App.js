import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom'

import './App.css';
import UserList from './pages/UserList.jsx';
import { UserDetails } from './pages/UserDetails.jsx';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

      <Route exact path='/' element={<UserList />} />
      <Route exact path='/user/:id' element={<UserDetails />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

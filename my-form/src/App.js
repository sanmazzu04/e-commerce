import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navegation from "./components/navegation/Navegation";
import Productos from './components/Productos/Productos';
import UserForm from './components/Formulario/UserForm';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Productos2 from './Productos2/Productos2';
import Home from './components/home/Home';

//despues borra productos2

function App() {
  return (
    <>
    <div className="App">
      <React.Fragment>
        <Navegation />
      </React.Fragment>
     <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/' element={<ShoppingCart/>} />
      <Route path='/Productos' element={<Productos/>} />
      <Route path='/Contactos' element={<UserForm/>} />
      <Route path='/probando' element={<Productos2/>} />
     </Routes>

    </div>
    </>
  );
}

export default App;

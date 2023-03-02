import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AutoresCrud from "./AutoresCrud";
import AutoresForm from "./AutoresForm";
import HomePage from "./HomePage";
import LibrosCrud from "./LibrosCrud";

function App(){
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/autores" element = {<AutoresCrud/>}/>
        <Route path="/libros" element = {<LibrosCrud/>}/>
        <Route path="/autores/Add" element = {<AutoresForm/>}/>
        <Route path="/autores/Edit/:id" element = {<AutoresForm/>}/>
        <Route path="/autores/Delete/:id" element = {<AutoresForm del = {true}/>}/>		
      </Routes >
    </BrowserRouter>
  
  )
}

export default App
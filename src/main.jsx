import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './data/Home.jsx';
import Alldetails from './data/Alldetails.jsx';
import Layout from './Layout.jsx';
import Onedetail from './data/Onedetail.jsx';
import Newadd from './data/Newadd.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/Alldetails' element={<Alldetails />}></Route>
        <Route path='Onedetail/:id' element={<Onedetail />}></Route>
        <Route path='Editdetail/:id' element={<Newadd />}></Route>
        <Route path='/Newadd' element={<Newadd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

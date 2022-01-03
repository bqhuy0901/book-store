import React from "react";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import AddBook from "./pages/book/AddBook";
import ViewBook from "./pages/book/VIewBook";
import Home from "./pages/book/Home";
import Header from "./components/Header";
import AddCategory from "./pages/category/AddCategory";
import ViewCategory from "./pages/category/ViewCategory";
import CategoryList from "./pages/category/CategoryList";

function App() {
  return (
    <BrowserRouter>
   <div className="App">
    <Header />
   <Routes>
    <Route exact path='/' element={<Home/>}   />
    <Route path='/addBook' element={<AddBook/>}   />
    <Route path='/udapteBook/:bookId' element={<AddBook/>}   />
    <Route path='/viewBook' element={<ViewBook />}   />
    <Route exact path='/category' element={<CategoryList/>}   />
    <Route path='/addCategory' element={<AddCategory/>}   />
    <Route path='/udapteCategory/:cateogoryId' element={<AddCategory/>}   />
    <Route path='/viewCategory' element={<ViewCategory />}   />

    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App;

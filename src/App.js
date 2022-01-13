import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddBook from "./pages/book/AddBook";
import Home from "./pages/book/Home";
import Header from "./components/Header";
import AddCategory from "./pages/category/AddCategory";
import CategoryList from "./pages/category/CategoryList";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/updateBook/:id" element={<AddBook />} />
          <Route exact path="/category" element={<CategoryList />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/updateCategory/:id" element={<AddCategory />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


const express = require('express');
const route = express.Router();
const Book = require('../models/Books')


//lay ve sach
route.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books)
    } catch (err) {
        res.json({message: err});
    }
  });

  //tao ra sach 
  route.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }) 
    try {
        const saveBook = await book.save()
        res.json(saveBook);
    } catch (err) {
        res.json({message: err});
    }
  });

  route.get("/:id", async (req,res) => {
      try {
          const book  = await Book.findById(req.params.id)
          res.json(book);
      } catch (err) {
        res.json({message: err});
      }
  })

  ///Xoa 
  route.delete("/:id", async (req,res) => {
    try {
        const removeBook  = await Book.remove( {_id: req.params.id})
        res.json(removeBook);
    } catch (err) {
      res.json({message: err});
    }
})

//Sua sach
route.put("/:id", async (req,res) =>{
    try {
       const updateBook = await  Book.updateOne( {_id: req.params.id},
        {$set: {title: req.body.title}})
        res.json(updateBook)
    } catch (error) {
        res.json({message: err});
    }
 
})



  module.exports = route;
  
import React, {useState, useEffect} from "react";
import BookList from "./book/BookList";
import BookAdd from "./book/BookAdd";
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import BookEdit from "./book/BookEdit";


function App() {
  //initialiser l'état de notre composant basé sur une fonction (possible depuis la version 16.8)




  const navigate = useNavigate();


/*const newBooksList = books.map(
      book => {
        if(book.id == idLivre){
          return {...book, favori:favori};
        }
        else{
          return book;
        }
      }
    )*/
  
{/*}
  const addBook = (book)=>{
    book.id  = books[books.length - 1].id + 1;
    book.favori = false;
    setBooks([...books, book]);
    navigate("/books");
  }



  const editBook = (book) =>{
    setBooks(
      books.map(
        b => {
          if(b.id == book.id)
            return book;
          else
            return b;
        }
      )
    );
    navigate("/books");
  }
*/}
  return (
    <div className='container'>
      <h1>Gestion des livres</h1>
      
        <Routes>
          <Route path="/" exact element={<Navigate to="/books" replace/>} />
          <Route path="/books" exact element={<BookList />} />
          <Route path="/books/add" exact element={<BookAdd />} />
          {/*<Route path="/books/:id" element={<BookEdit books={books} editBookHandler={editBook} />} />*/}
        </Routes>
    </div>
  );
}

export default App;

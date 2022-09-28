import React, {useState} from "react";
import BookList from "./book/BookList";
import BookAdd from "./book/BookAdd";
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';


function App() {
  //initialiser l'état de notre composant basé sur une fonction (possible depuis la version 16.8)
  const [books, setBooks] = useState([
    {id : 1, titre : "The slight Edge", auteur : "Jeff Olsen", favori : false},
    {id : 2, titre : "harry Potter", auteur : "J.K. Roling", favori : false},
    {id : 3, titre : "test", auteur : "test auteur", favori : false},
    {id : 4, titre : "nouveau livre", auteur : "inconnu", favori : false}
  ]);

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
  const editFavori = (idLivre, favori)=>{
    setBooks(books.map(
      book => {
        if(book.id == idLivre){
          return {...book, favori:favori};
        }
        else{
          return book;
        }
      }
    ));
  }

  const addBook = (book)=>{
    book.id  = books[books.length - 1].id + 1;
    book.favori = false;
    setBooks([...books, book]);
    navigate("/books");
  }

  return (
    <div className='container'>
      <h1>Gestion des livres</h1>
      
        <Routes>
          <Route path="/" exact element={<Navigate to="/books" replace/>} />
          <Route path="/books" exact element={<BookList books={books} favoriHandler={editFavori} />} />
          <Route path="/books/add" exact element={<BookAdd addBookHandler={addBook} />} />
        </Routes>
      
    </div>
  );
}

export default App;

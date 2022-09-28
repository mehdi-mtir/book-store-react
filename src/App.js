import React, {useState} from "react";
import BookList from "./book/BookList";
import BookAdd from "./book/BookAdd";


function App() {
  //initialiser l'état de notre composant basé sur une fonction (possible depuis la version 16.8)
  const [books, setBooks] = useState([
    {id : 1, titre : "The slight Edge", auteur : "Jeff Olsen", favori : false},
    {id : 2, titre : "harry Potter", auteur : "J.K. Roling", favori : false},
    {id : 3, titre : "test", auteur : "test auteur", favori : false},
    {id : 4, titre : "nouveau livre", auteur : "inconnu", favori : false}
  ]);
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
  }

  return (
    <div className='container'>
      <h1>Gestion des livres</h1>
      <div className ="row">
        <BookAdd addBookHandler={addBook} />
      </div>
      <div className="row">
      {
        books.map(
          book => <BookList
            key={book.id}
            id = {book.id}
            titre = {book.titre}
            auteur = {book.auteur}
            favori = {book.favori} 
            favoriHandler = {editFavori}/>
        )
      }
      </div>
    </div>
  );
}

export default App;

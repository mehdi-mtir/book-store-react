import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';

const BookList = ()=>{
    const [books, setBooks] = useState([]);
  
    useEffect(()=>{
        async function loadBooks(){
            const response = await fetch("http://localhost:3000/books");
            const books = await response.json(); 
            setBooks(books)
        }
        loadBooks();
    }, [])

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

        //Update data on server
      }

      const deleteBook = (id)=>{ 
        setBooks(books.filter(
          book => book.id != id
        ));

        //Update data on server
      }

    const navigate = useNavigate();
    return (
        <>
        <div className="row"> <Link className="btn btn-success col-3 mb-2" to="/books/add" >Ajouter un livre </Link></div>
        <div className="row">
           
        {
        books.map(
            book => {
                return <div className="card" key={book.id} style={{width: '18rem', marginRight:"10px", marginBottom: "10px", backgroundColor : book.favori?"green":"white"}}>
                    <img className="card-img-top" src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{book.titre}</h5>
                        <p className="card-text">Auteur : {book.auteur} <br/> Favori : {book.favori?"oui":"non"}</p>
                        <button className="btn btn-primary me-1" onClick={(event)=>{event.preventDefault();editFavori(book.id, !book.favori)}}>{book.favori?"-Fav":"+Fav"}</button>
                        <button className="btn btn-info me-1" onClick={()=>navigate(`/books/${book.id}`)} >Editer</button>
                        <button className="btn btn-danger" onClick={
                            ()=>{
                                if(window.confirm("Êtes-vous sûr de vouloir supprimer le livre?")){
                                    deleteBook(book.id);
                                }
                            }
                        } >Supp</button>
                    </div>
                </div>
            }
        )
        }
        </div>
        </>
    )
}

export default BookList;
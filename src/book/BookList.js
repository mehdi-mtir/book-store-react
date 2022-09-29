import React from "react";
import {Link, useNavigate} from 'react-router-dom';

const BookList = (props)=>{
    const navigate = useNavigate();
    return (
        <>
        <div className="row"> <Link className="btn btn-success col-3 mb-2" to="/books/add" >Ajouter un livre </Link></div>
        <div className="row">
           
        {
        props.books.map(
            book => {
                return <div className="card" style={{width: '18rem', marginRight:"10px", marginBottom: "10px", backgroundColor : book.favori?"green":"white"}}>
                    <img className="card-img-top" src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{book.titre}</h5>
                        <p className="card-text">Auteur : {book.auteur} <br/> Favori : {book.favori?"oui":"non"}</p>
                        <button className="btn btn-primary me-1" onClick={(event)=>{event.preventDefault();props.favoriHandler(book.id, !book.favori)}}>{book.favori?"-Fav":"+Fav"}</button>
                        <buton className="btn btn-info me-1" onClick={()=>navigate(`/books/${book.id}`)}  >Editer</buton>
                        <buton className="btn btn-danger" onClick={
                            ()=>{
                                if(window.confirm("Êtes-vous sûr de vouloir supprimer le livre?")){
                                    props.deleteHandler(book.id);
                                }
                            }
                        } >Supp</buton>
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
import React, {useState} from "react";
import { useParams } from "react-router-dom";

const BookEdit = (props)=>{
    const {id} = useParams();
    const [book, setBook] = useState(props.books.find(b => b.id == id));
    
    const onInputChange = ({target})=>{
        setBook({...book, [target.name] : target.value})
        console.log(book.titre, book.auteur);
    }

    return(
        <>
            <h2>Editer le livre : {book.titre}</h2>
            <form onSubmit={
                (event)=>{
                    event.preventDefault();
                    props.editBookHandler(book);
                }
                }>
                <div className="form-group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" className="form-control" name="titre" id="titre" value={book.titre} onChange={(event)=>onInputChange(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor="auteur">Auteur</label>
                    <input type="text" className="form-control" name="auteur" id="auteur" value={book.auteur} onChange={(event)=>onInputChange(event)} />
                </div>
                
                <button type="submit" className="btn btn-primary" >Valider</button>
            </form>
        </>
    )
}

export default BookEdit;
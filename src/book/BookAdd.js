import React, { useState } from "react";

const BookAdd = (props)=>{
    const [book, setBook] = useState({titre : "", auteur : ""})

    const onInputChange = ({target})=>{
        setBook({...book, [target.name] : target.value})
        console.log(book.titre, book.auteur);
    }

    return(
        <>
            <h2>Ajouter un nouveau livre</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" className="form-control" name="titre" id="titre" value={book.titre} onChange={(event)=>onInputChange(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor="auteur">Auteur</label>
                    <input type="text" className="form-control" name="auteur" id="auteur" value={book.auteur} onChange={(event)=>onInputChange(event)} />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={(event)=>{event.preventDefault();props.addBookHandler(book);setBook({titre:"",auteur:""})}} >Valider</button>
            </form>
        </>
    )

}

export default BookAdd;
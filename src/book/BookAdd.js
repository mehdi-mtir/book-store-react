import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookAdd = (props)=>{
    const [book, setBook] = useState({titre : "", auteur : ""})
    const navigate = useNavigate();

    const onInputChange = ({target})=>{
        setBook({...book, [target.name] : target.value})
        //console.log(book.titre, book.auteur);
    }

    return(
        <>
            <h2>Ajouter un nouveau livre</h2>
            <form onSubmit={
                (event)=>{
                    event.preventDefault();
                    //Methode : POST
                    //URL : http://localhost:3000/books

                    const requestOptions = {
                        method : 'POST',
                        headers : {'content-type' : 'application/json'},
                        body : JSON.stringify({titre:book.titre, auteur:book.auteur, favori:false})
                    }

                    fetch("http://localhost:3000/books/", requestOptions)
                    .then(response=>response.json())
                    .then(res => navigate("/books"));

                    //console.log(requestOptions.body);
                    //return;

                    setBook({titre:"",auteur:""});

                    
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

export default BookAdd;
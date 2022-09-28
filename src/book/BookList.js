import React from "react";

const BookList = (props)=>{
    return (
        <div className="card" style={{width: '18rem', marginRight:"10px", marginBottom: "10px", backgroundColor : props.favori?"green":"white"}}>
            <img className="card-img-top" src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.titre}</h5>
                <p className="card-text">Auteur : {props.auteur} <br/> Favori : {props.favori?"oui":"non"}</p>
                <a href="#" className="btn btn-primary" onClick={(event)=>{event.preventDefault();props.favoriHandler(props.id, !props.favori)}}>{props.favori?"Retirer des favoris":"Ajouter aux favoris"}</a>
            </div>
        </div>
    )
}

export default BookList;
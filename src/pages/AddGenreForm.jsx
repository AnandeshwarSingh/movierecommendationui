import React, { useState } from "react";
import '../styles/AddLanguageForm.css'
import LanguageService from "../services/LanguageService";

let AddGenreForm = ({onClose}) =>{
    const [genre, setGenre] = useState("");
    const [mesg , setMesg] = useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        const genreData = {name: genre};
        let promise = LanguageService.createGenre(genreData)
        promise.then((res) => {
            setMesg(res.data);
        }).catch((err)=>{
            setMesg(err.data);
        })
    }

    let saveGenre=()=>{
        //
    }

    return(<>
        <div className="form-container">
            <div className="form-header">
                <h2>Add Genre</h2>
                <button className="close-button" onClick={onClose}>
                ✖
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="genre" >Genre Name</label>
                <input type="text" id="genre" value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Enter genre name" required
                />
                </div>
                <button type="submit" className="submit-button" 
                onClick={(e)=>saveGenre(e)}>
                Add
                </button>
                {mesg}
            </form>
        </div>
    </>);

}
export default AddGenreForm;
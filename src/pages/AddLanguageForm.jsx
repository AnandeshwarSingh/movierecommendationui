import React, { useState } from "react";
import "../styles/AddLanguageForm.css";
import LanguageService from "../services/LanguageService";

const AddLanguageForm = ({ onClose }) => {
  const [language, setLanguage] = useState("");
  const [mesg, setMessage] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    const languageData = { languageName: language };
    let promise = LanguageService.createLanguage(languageData);
    promise.then((res) => {
      setMessage(res.data);
    }).catch((err)=>{
      setMessage(err.data);
    })
    

  };

  const saveLanguage=()=>{
    // alert(language)
  }


  

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Add Language</h2>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="language">Language Name</label>
          <input
            type="text"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter language name"
            required
          />
        </div>
        <button type="submit" className="submit-button" onClick={(e)=>saveLanguage(e)}>
          Add
        </button>
        {mesg}
      </form>
    </div>
  );
};

export default AddLanguageForm;

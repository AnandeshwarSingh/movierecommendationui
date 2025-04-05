

import axios from "axios";


//Language

let viewLanguage = "http://localhost:8080/admin/viewAllLanguage";
let saveLanguage = "http://localhost:8080/admin/addLanguage";
let deleteLanguage = "http://localhost:8080/admin/deleteLanguageById";

// Genre Service

let saveGenre = "http://localhost:8080/admin/addGenre"
let ViewGenre = "http://localhost:8080/admin/viewAllGenre"



class LanguageService {

    // Language Section
    getLanguage() {
        return axios.get(viewLanguage);
    }

    createLanguage(language){
        
        return axios.post(saveLanguage,language);
    }

    deleteLanguage(language_Id){
        return axios.delete(deleteLanguage+"/"+language_Id);
    }

    updateLanguage(){

    }

    // genre section
    createGenre(genre){
        console.log(genre);
        return axios.post(saveGenre, genre);
        
    }

    getGenre(){
        return axios.get(ViewGenre);
    }
}

export default new LanguageService();  // Export an instance



import axios from "axios";


//Language

let viewLanguage = "http://localhost:8080/admin/viewAllLanguage";
let saveLanguage = "http://localhost:8080/admin/addLanguage";
let deleteLanguage = "http://localhost:8080/admin/deleteLanguageById";
let searchLanguage="http://localhost:8080/admin/searchLanguageById";

// Genre Service

let saveGenre = "http://localhost:8080/admin/addGenre";
let ViewGenre = "http://localhost:8080/admin/viewAllGenre";
let deleteGenre = "http://localhost:8080/admin/deleteGenreById";



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

    searchLanguage(language_Id){
        return axios.update(searchLanguage+"/"+language_Id);
    }

    // genre section
    createGenre(genre){
        console.log(genre);
        return axios.post(saveGenre, genre);
        
    }

    getGenre(){
        return axios.get(ViewGenre);
    }

    deleteGenre(generId){
        return axios.delete(deleteGenre+"/"+generId);
    }
}

export default new LanguageService();  // Export an instance

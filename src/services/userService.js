import axios from "axios";


let saveUser = "http://localhost:8080/users/add";
let viewUser = "http://localhost:8080/users/viewAllUser";
let deleteUser = "http://localhost:8080/users/delete";

class userService{

    // add user
    addUser(user){
        return axios.post(saveUser,user);
    }

    // View Language

    getUser(){
        return axios.get(viewUser);
    }

    removeUsers (id){
        console.log(id);
        return axios.delete(deleteUser+"/"+id);
    }

}

export default new userService();
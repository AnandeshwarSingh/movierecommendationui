import React, { useEffect, useState } from "react";
import userService from "../services/userService";

const ViewUsers = () =>{
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);

    const featchUser = async () =>{
        try{
            const res = await userService.getUser();
            setUsers(res.data);
        }catch(err){
            console.err("Error fetching data : ",err);
        }
    }

    useEffect(()=>{
        featchUser();
    },[]);

    const handleDelete = async (userId) =>{
        
        try{
            console.log(userId);
            await userService.removeUsers(userId);
            setMessage("User delete successfully.")
            featchUser();
        }catch(err){
            setMessage("Error deleting User.");
            console.error("Delete error:", err);
        }
    }

    return(
        <>
        <div className="container">
        <h1
        style={{
            textAlign: "center",
          margin: "10px 0",
          backgroundColor: "#03293f",
          color: "white",
        }}
        >
            Users
        </h1>

        {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}

      <table className="table table-striped">
      <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {users.length > 0 ? (
            users.map((e, index) => (
              <tr key={index}>
                <td>{e.userId}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.password}</td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.userId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>

      </table>
        
        </div>
        </>
    )
}

export default ViewUsers;
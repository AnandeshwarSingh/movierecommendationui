import React, { useEffect, useState } from "react";
import LanguageService from "../services/LanguageService";

const ViewGenre = () => {
  let [genre, setGenre] = useState([]);
  const [message, setMessage] = useState("");


  const fetchGener = async () =>{
    try{
      const res = await LanguageService.getGenre();
      setGenre(res.data);
    }catch(err){
      console.error("Error feching data: ",err);
    }
  };


  useEffect(() => {
    fetchGener();
  }, []);

  const handleDelete = async(genre_id) => {
    try{
      await LanguageService.deleteGenre(genre_id);
      setMessage("Genre deleted successfully");
      fetchGener();
    }catch(err){
      setMessage("Error deleting Genre");
      console.error("Delete error: ",err);
    }
  }
  return (
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
          Genre
        </h1>
        {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}

        <table className="table table-striped">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {genre.length > 0 ? (
              genre.map((e, index) => (
                <tr key={index}>
                  <td>{e.genre_id}</td>
                  <td>{e.name}</td>
                  <td>
                  <button className="btn btn-primary">Update</button>
                  </td>
                  <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.genre_id)}
                  >
                    Delete
                  </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ViewGenre;

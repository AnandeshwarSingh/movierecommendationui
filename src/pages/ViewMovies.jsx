import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../styles/MovieList.css';

const ViewMovies = () => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [errMsg,setErrMsg]=useState({
    "message" : "",
    "statusCode":0
  });

  const fetchMovies=async()=>{
    try{
      const res=await  axios.get("http://localhost:8080/admin/viewAllMovie");
      setMovies(res.data);
    }
    catch(err){
      setErrMsg(err.response.data);
      console.error("Error fecthing data : ",err);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/admin/deleteMovie/${id}`);
        setMessage("Movie deleted successfully.");
        fetchMovies();
      } catch (error) {
        setMessage("Error deleting Movie.");
        console.error("Delete error:", error);
      }
    };
  
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          margin: "10px 0",
          backgroundColor: "#03293f",
          color: "white",
        }}
      >
        Movies
      </h1>
      {/* {message && <p className="message">{message}</p>} */}
      {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Director</th>
            <th>Actor</th>
            <th>Actress</th>
            <th>Description</th>
            <th>Language</th>
            <th>Genre</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {errMsg.statusCode && errMsg.message ||
          movies.map((movie, index) => {
            const imageUrl = `http://localhost:8080/images/${movie.image_name}`;
            return (
              <tr key={index}>
                <td><img src={imageUrl} alt={movie.title} style={{ width: '100px', height: '100px' }} /></td>
                <td>{movie.title}</td>
                <td>{movie.release_year}</td>
                <td>{movie.duration} hr</td>
                <td>{movie.director_name}</td>
                <td>{movie.actor_name}</td>
                <td>{movie. actress_name}</td>
                <td>{movie.description}</td>
                <td>{movie.language}</td>
                <td>{movie.genres}</td>

                <td>
                
                <button
                    className="btn btn-danger"
                    >
                    Update
                  </button>
                </td>
                <td>
                
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(movie.movie_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </table>
    </div>
  );
};

export default ViewMovies;

import React, { useEffect, useState } from "react";
import LanguageService from "../services/LanguageService";

const ViewGenre = () => {
  let [genre, setGenre] = useState([]);

  useEffect(() => {
    LanguageService.getGenre()
      .then((res) => {
        setGenre(res.data);
      })
      .catch((err) => {
        setGenre(err.data);
        console.err("Error fetching data", err);
      });
  }, []);

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
                  <td>UPDATE</td>
                  <td>DELETE</td>
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

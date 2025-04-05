import React, { useState, useEffect } from "react";
import LanguageService from "../services/LanguageService";
import { Link } from "react-router-dom";

const ViewLanguage = () => {
  let [language, setLanguage] = useState([]);

  useEffect(() => {
    LanguageService.getLanguage()
      .then((res) => {
        setLanguage(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
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
          Language
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {language.length > 0 ? (
              language.map((e, index) => (
                <tr key={index}>
                  <td>{e.languageId}</td>
                  <td>{e.languageName}</td>
                  <td> <button className="btn btn-primary">Update</button></td>
                  <td><Link to={`/deletelang/${e.languageId}`}><button className="btn btn-primary" >Delete</button></Link></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ViewLanguage;

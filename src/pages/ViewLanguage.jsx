import React, { useState, useEffect } from "react";
import LanguageService from "../services/LanguageService";

const ViewLanguage = () => {
  const [languages, setLanguages] = useState([]);
  const [message, setMessage] = useState("");

  const fetchLanguages = async () => {
    try {
      const res = await LanguageService.getLanguage();
      setLanguages(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchLanguages(); // initial fetch
  }, []);

  const handleDelete = async (id) => {
    try {
      await LanguageService.deleteLanguage(id);
      setMessage("Language deleted successfully.");
      fetchLanguages(); // refresh the list
    } catch (error) {
      setMessage("Error deleting language.");
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
        Language
      </h1>

      {message && (
        <div className="alert alert-info text-center">{message}</div>
      )}

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
          {languages.length > 0 ? (
            languages.map((e, index) => (
              <tr key={index}>
                <td>{e.languageId}</td>
                <td>{e.languageName}</td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.languageId)}
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
  );
};

export default ViewLanguage;

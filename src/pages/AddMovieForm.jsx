import React, { useState, useEffect } from "react";
import "../styles/AddMovieForm.css";
import LanguageService from "../services/LanguageService";
import axios from "axios";

const AddMovieForm = ({ onClose }) => {
  const [languages, setLanguages] = useState([]);
  const [genre, setGenre] = useState([]);

  // Fetch Languages
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await LanguageService.getLanguage();
        console.log("Fetched languages:", res.data);
        setLanguages(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchLanguages(); // initial fetch
  }, []);

  // Fetch Genres
  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const res = await LanguageService.getGenre();
        console.log("Genres:", res.data);
        setGenre(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchGenre();
  }, []);

  const [movie, setMovie] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    language: "",
    duration: "",
    director: "",
    actor: "",
    actress: "",
    description: "",
  });

  const [imagefile, setImageFile] = useState(null);
  // const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imagefile);

    let imageName = "";

    try {
      const res = await axios.post(
        "http://localhost:8080/admin/upload",
        formData
      );
      const uploadedPath = res.data; // e.g. "/images/f5.jpg"
      imageName = uploadedPath.split("/").pop(); // "f5.jpg"
      // setImageUrl("http://localhost:8080" + uploadedPath);
    } catch (err) {
      console.error("Upload failed", err);
    }

    const movieData = {
      movieName: movie.title,
      year: parseInt(movie.releaseYear),
      description: movie.description,
      duration: parseInt(movie.duration),
      director: movie.director,
      actor: movie.actor,
      actress: movie.actress,
      genreid: Number(movie.genre),
      languageid: Number(movie.language),
      imageName: imageName,
    };

    console.log("Submitted movie data:", movieData);
    try {
      const response = await fetch("http://localhost:8080/admin/addMovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        alert("Movie added successfully!");
        // onClose(); // close modal/form after success
      } else {
        alert("Failed to add movie.");
      }
    } catch (error) {
      console.error("Error submitting movie:", error);
      alert("An error occurred while adding the movie.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Add Movie</h2>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <input
            name="title"
            value={movie.title}
            onChange={handleChange}
            placeholder="Movie Title"
            required
          />
          <input
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleChange}
            placeholder="Release Year"
            required
          />
        </div>

        <div className="form-group-row">
          <input
            name="duration"
            value={movie.duration}
            onChange={handleChange}
            placeholder="Duration (mins)"
            required
          />
          <input
            name="director"
            value={movie.director}
            onChange={handleChange}
            placeholder="Director"
            required
          />
        </div>

        <div className="form-group-row">
          <input
            name="actor"
            value={movie.actor}
            onChange={handleChange}
            placeholder="Actor Name"
            required
          />
          <input
            name="actress"
            value={movie.actress}
            onChange={handleChange}
            placeholder="Actress Name"
            required
          />
        </div>

        <div className="form-group-row">
          <select
            name="language"
            value={movie.language}
            onChange={handleChange}
            required
          >
            <option value="">Select Language</option>
            {languages.map((lang, index) => (
              <option key={index} value={lang.languageId}>
                {lang.languageName}
              </option>
            ))}
          </select>
          <select
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            {genre.map((g, index) => (
              <option key={index} value={g.genre_id}>
                {g.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>

        <div className="single-group">
          <textarea
            name="description"
            value={movie.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add
        </button>

      </form>
    </div>
  );
};

export default AddMovieForm;

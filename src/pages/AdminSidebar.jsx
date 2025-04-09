import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminSidebar.css";
import AddLanguageForm from "./AddLanguageForm";
import ViewLanguage from "./ViewLanguage";
import AddGenreForm from "./AddGenreForm";
import ViewGenre from "./ViewGenre";
import ViewUsers from "./ViewUsers";
import AddMovieForm from "./AddMovieForm";
import ViewMovies from "./ViewMovies";

const AdminSidebar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [showAddLanguageForm, setShowAddLanguageForm] = useState(false);
  const [showViewLanguageGrid, setShowViewLanguageGrid] = useState(false);
  const [showAddGenreForm, setShowAddGenreForm] = useState(false);
  const [genreOption, setGenreOption] = useState(false);
  const [ShowViewGenre, setShowViewGenre] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showUserGrid, setShowUserGrid] = useState(false);
  const [movieOption, setMovieOption] = useState(false);
  const [showAddMovieForm, setAddMovieForm] = useState(false);
  const [showViewMovieGrid,setShowViewMovieGrid] = useState(false);

  const handleAddLanguageClick = () => {
    setShowAddLanguageForm(true);
    setShowViewLanguageGrid(false); // Hide View Language
    setShowAddGenreForm(false);
    setShowViewGenre(false);
    setShowUserGrid(false);
    setAddMovieForm(false);
    setShowViewMovieGrid(false);
  };

  const handleViewLanguageClick = () => {
    setShowViewLanguageGrid(true);
    setShowAddLanguageForm(false);
    setShowAddGenreForm(false);
    setShowViewGenre(false);
    setShowUserGrid(false);
    setAddMovieForm(false);
    setShowViewMovieGrid(false);
  };

  const handleAddGenreClick = () => {
    setShowAddGenreForm(true);
    setShowAddLanguageForm(false);
    setShowViewLanguageGrid(false);
    setShowViewGenre(false);
    setShowUserGrid(false);
    setAddMovieForm(false);
    setShowViewMovieGrid(false);
  };
  const handleViewGenreClick = () => {
    setShowViewGenre(true);
    setShowAddGenreForm(false);
    setShowAddLanguageForm(false);
    setShowViewLanguageGrid(false);
    setShowUserGrid(false);
    setAddMovieForm(false);
    setShowViewMovieGrid(false);
  };

  const handleViewUserClick = () => {
    setShowUserGrid(true);
    // setUserOption(true);
    setShowViewGenre(false);
    setShowAddGenreForm(false);
    setShowAddLanguageForm(false);
    setShowViewLanguageGrid(false);
    setAddMovieForm(false);
    setShowViewMovieGrid(false);
  };

  const handleAddMovie = ()=>{
    setAddMovieForm(true);
    setShowUserGrid(false);
    setShowViewGenre(false);
    setShowAddGenreForm(false);
    setShowAddLanguageForm(false);
    setShowViewLanguageGrid(false);
    setShowViewMovieGrid(false);

  }

  const handleViewMovieClick = ()=> {
    setShowViewMovieGrid(true);
    setShowViewLanguageGrid(false);
    setShowAddLanguageForm(false);
    setShowAddGenreForm(false);
    setShowViewGenre(false);
    setShowUserGrid(false);
    setAddMovieForm(false);
  }

  return (
    <>
      <div className="admin-container">
        <div className="sidebar">
          <h2>Admin Panel</h2>
          <ul className="menu">
            <li>
              {/* <Link to="/admin/movies">Movies</Link> */}
              <button
              className="dropdown"
              onClick={() => setMovieOption (!movieOption)}
              >
              Movies {movieOption ? "▲" : "▼"}
              </button>
              <ul className={`submenu ${movieOption ? "show" : ""}`}>
                <li>
                  <button onClick={handleAddMovie}>Add Movie</button>
                  {/* <Link to="/admin/language/add">Add Language</Link> */}
                </li>
                <li>
                  <button onClick={handleViewMovieClick}>
                    {/* <Link to="/admin/language/view">View Language</Link> */}
                    View Movie
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="dropdown"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                Language {languageOpen ? "▲" : "▼"}
              </button>
              <ul className={`submenu ${languageOpen ? "show" : ""}`}>
                <li>
                  <button onClick={handleAddLanguageClick}>Add Language</button>
                  {/* <Link to="/admin/language/add">Add Language</Link> */}
                </li>
                <li>
                  <button onClick={handleViewLanguageClick}>
                    {/* <Link to="/admin/language/view">View Language</Link> */}
                    View Language
                  </button>
                </li>
              </ul>
            </li>
            <li>
              {/* <Link to="/admin/genre">Genre</Link> */}
              <button
                className="dropdown"
                onClick={() => setGenreOption(!genreOption)}
              >
                Genre {genreOption ? "▲" : "▼"}
              </button>
              <ul className={`submenu ${genreOption ? "show" : ""}`}>
                <li>
                  <button onClick={handleAddGenreClick}>Add Genre</button>
                </li>
                <li>
                  <button onClick={handleViewGenreClick}>View Genre</button>
                </li>
              </ul>
            </li>
            <li>
              {/* <Link to="/admin/users">Users</Link> */}
              <button
                className="dropdown"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                Users {isUserMenuOpen ? "▲" : "▼"}
              </button>
              <ul className={`submenu ${isUserMenuOpen ? "show" : ""}`}>
                <li>
                  <button onClick={handleViewUserClick}>View Users</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content">
          {/* Add Language Form on the right side */}
          {showAddLanguageForm && (
            <AddLanguageForm onClose={() => setShowAddLanguageForm(false)} />
          )}
          {showViewLanguageGrid && <ViewLanguage />}
          {showAddGenreForm && (
            <AddGenreForm onClose={() => setShowAddGenreForm(false)} />
          )}
          {ShowViewGenre && <ViewGenre />}
          {showUserGrid && <ViewUsers />}
          {showAddMovieForm && (
            <AddMovieForm onClose={() => setAddMovieForm(false)} />
          )}
          {showViewMovieGrid && <ViewMovies/>}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;

import React from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Movie submitted! (Functionality not implemented)");
    navigate("/"); // Navigate back to Dashboard after submission
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to Dashboard on cancel
  };

  return (
    <div>
      <h1>Add a New Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Director:
          <input type="text" name="director" required />
        </label>
        <br />
        <label>
          Genre:
          <select name="genre" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
        <br />
        <label>
          Release Year:
          <input type="number" name="releaseYear" required />
        </label>
        <br />
        <label>
          Synopsis:
          <textarea name="synopsis" required></textarea>
        </label>
        <br />
        <label>
          Poster Image URL:
          <input type="url" name="posterImageUrl" required />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;

import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import Modal from "./modal/Modal";


const AddMovie = ({ addMovie }) => {
    const [show, setShow] = useState(false);
  
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState(0);
  
    const handleRating = (rate) => setRating(rate);
  
    const toggleModal = () => setShow(!show);
    const resetModal = () => {
      setName("");
      setImage("");
      setDate("");
      setRating(0);
    };
  
    useEffect(() => {
      resetModal();
    }, [show]);
  
    return (
      <div>
        <button className="btn btn-primary" onClick={toggleModal}>
          Add Movie
        </button>
        <Modal isOpen={show} closeModal={toggleModal}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newMovie = {
                name,
                image,
                date,
                rating,
                id: Math.random(),
              };
              addMovie(newMovie);
              toggleModal();
            }}
          >
            <h1>Add Movie </h1>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Date of Release</label>
            <input
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Rate</label>
  
            <StarRating handleRating={handleRating} movieRating={rating} />
  
            <input
              required
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <label>Image URL</label>
            <input
              required
              value={image}
              type="url"
              onChange={(e) => setImage(e.target.value)}
            />
            <div>
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-danger" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };
  
  export default AddMovie;
  
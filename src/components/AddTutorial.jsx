import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    addTutorial(newTutor);
    setTitle("");
    setDescription("");
  };
  const addTutorial = async (data) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
    <div>
      <h1 className="text-danger">Add Your Tutorial</h1>
      <form className="form mb-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
            required
            placeholder="Enter a tutorial"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
            id="description"
            required
            placeholder="Enter a description"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;

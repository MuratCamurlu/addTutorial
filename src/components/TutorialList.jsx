import axios from "axios";
import { useState } from "react";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutor, getTutorials }) => {
  const [newItem, setNewItem] = useState([]);
  const deleteTutorial = async (id) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  const editTutorial = async (id, title, description) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <i
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="fa-solid fa-pen-to-square text-warning "
                    onClick={() => setNewItem(item)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can text-danger mx-2"
                    onClick={() => deleteTutorial(id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial item={newItem} editTutorial={editTutorial} />
    </div>
  );
};

export default TutorialList;

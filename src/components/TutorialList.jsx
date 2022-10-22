import axios from "axios";

const TutorialList = ({ tutor, getTutorials }) => {
  const deleteTutorial = async (id) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
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
                  <i className="fa-solid fa-pen-to-square text-warning "></i>
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
    </div>
  );
};

export default TutorialList;

import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div className="container text-center mt-5 ">
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutor={tutorials} getTutorials={getTutorials} />
    </div>
  );
};

export default Home;

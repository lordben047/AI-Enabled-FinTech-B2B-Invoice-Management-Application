import axios from "axios";

let Getapi = ({ setData }) => {
  const url = "http://localhost:8080/HRC/Fetch";
  axios.get(url).then((res) => {
    setData(res.data);
  });
};

export default Getapi;

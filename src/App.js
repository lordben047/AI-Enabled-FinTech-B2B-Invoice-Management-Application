import "./App.css";
import Header from "./components/Header";
import Headlogo from "./components/Headlogo";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import { useState, useEffect } from "react";
import Getapi from "./services/Getapi";

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  

  useEffect(() => {
    if (searchText === "") {
      Getapi({ setData });
    } else {
      setData(data.filter((row) => row.cust_number.includes(searchText)));
    }
  }, [data,searchText]);

  return (
    <div>
      <Headlogo />
      <Buttons
        searchText={searchText}
        setSearchText={setSearchText}
        selectedRowIds={selectedRowIds}
      />
      <div className="App">
        <Header
          data={data}
          selectedRowIds={selectedRowIds}
          setSelectedRowIds={setSelectedRowIds}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

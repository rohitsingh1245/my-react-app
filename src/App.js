import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
// import Autocomplete from "./components/Autocomplete";
// import Search from "./components/Search";
import PostalCodeAutoComplete from "./components/PostalCodeAutoComplete";
import "./App.css";
const App = () => {
  return (
    <div className="wrapper">
     

      <PostalCodeAutoComplete />
    </div>
  );
};
export default App;

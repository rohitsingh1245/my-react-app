import React from "react";
import logo from "./logo.svg";
// import Autocomplete from "./components/Autocomplete";
// import Search from "./components/Search";
import PostalCodeAutoComplete from "./components/PostalCodeAutoComplete";
import "./App.css";
const App = () => {
  return (
    <div className="wrapper">
      <h1>Autocomplete Demo</h1>

      <PostalCodeAutoComplete />
    </div>
  );
};
export default App;

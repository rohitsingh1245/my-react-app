/* This component display the loader*/
import React from "react";
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ margin: "auto" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loader;

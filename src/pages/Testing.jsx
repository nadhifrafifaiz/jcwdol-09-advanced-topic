import React from "react";

function Testing() {
  const register = () => {
    alert("tes");
    // Axios
    console.log("Test");
    console.warn("Warning");
    console.error("Error");
  };

  return (
    <div>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Testing;

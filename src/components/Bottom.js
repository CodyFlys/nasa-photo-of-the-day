import React from "react";

function Bottom({img, explanation}) {
  return (
    <div className="Bottom">
      <img src={img} alt="Nasa"/>
      <p>{explanation}</p>
    </div>
  );
}

export default Bottom;

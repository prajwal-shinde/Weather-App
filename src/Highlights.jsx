import React from "react";
import speedometer from '../src/images/barometer.svg';
const Highlights = (props) => {
  return (
    <>
      <div
        className="card mt-5 ml-2 mr-3"
        style={{ width: "23rem", borderRadius: "15px" }}
      >
        <div className="card-body">
          <h4>
            <strong>{props.title}</strong>
          </h4>
          <span className="d-flex justify-content-evenly">
          <img className="img-fluid mt-3" src={speedometer} alt="Error" style={{height:"90px"}}/>
            <span className="d-flex mt-4">
            <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>{props.data}</h1>
            
            <h4 className="mt-4 ml-2">
              <strong>km/h</strong>
            </h4>
            </span>
            
          </span>
        </div>
      </div>
    </>
  );
};
export default Highlights;

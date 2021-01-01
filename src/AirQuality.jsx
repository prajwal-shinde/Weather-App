import React from "react";
import weather from "../src/images/weather.svg";
const AirQuality = (props) => {
  
  
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
          <br />

          <span className="d-flex justify-content-evenly">
            <img
              className="img-fluid mr-3"
              src={weather}
              alt="Error"
              style={{ height: "90px" }}
            />
            <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
              {props.data}
              <br/>
             
            </h1>
            <p className="ml-3" style={{ fontSize: "1.5rem", fontWeight: "bold" }}> {props.air_status}</p>
          </span>
        </div>
      </div>
    </>
  );
};
export default AirQuality;

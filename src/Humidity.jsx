import React from "react";
import hygrometer from "../src/images/hygrometer.svg";
const Humidity = (props) => {
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
              src={hygrometer}
              alt="Error"
              style={{ height: "90px" }}
            />
            <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
              {props.data} %
            </h1>
          </span>
        </div>
      </div>
    </>
  );
};
export default Humidity;

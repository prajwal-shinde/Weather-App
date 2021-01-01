import React from "react";
import wind from "../src/images/wind.svg";
const WindStatus = (props) => {
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
              className="img-fluid"
              src={wind}
              alt="Error"
              style={{ height: "90px" }}
            />
            <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>{props.data}</h1>
            <h4 className="mt-4 ml-3">
              <strong>km/h</strong>
            </h4>
          </span>
        </div>
      </div>
    </>
  );
};
export default WindStatus;

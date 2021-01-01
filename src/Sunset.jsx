import React from "react";
import sunset from "../src/images/sunset.svg";
import sunrise from "../src/images/sunrise.svg";

const Sunset = (props) => {
  let d1 = new Date(props.data * 1000);
  let d2 = new Date(props.data2 * 1000);
  console.log(d1.getHours());
  let ut2 = d2.toUTCString();
  let sunset_time = ut2.slice(-11, -4);
  let utcString = d1.toUTCString();
  let time = utcString.slice(-11, -4);
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
              src={sunrise}
              alt="Error"
              style={{ height: "50px" }}
            />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {time}
              {d1.getHours() >= 12 ? "PM" : "AM"}
            </h1>
          </span>
          <br />
          <span className="d-flex justify-content-evenly">
            <img
              className="img-fluid mr-3"
              src={sunset}
              alt="Error"
              style={{ height: "50px" }}
            />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
             
              {sunset_time}
              {d2.getHours() >= 12 ? "PM" : "AM"}
            </h1>
          </span>
        </div>
      </div>
    </>
  );
};
export default Sunset;

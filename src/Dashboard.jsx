import React,{useState,useEffect} from "react";
import Moment from 'react-moment';
import Sunny from "../src/images/sunny.svg";
import Cold from "../src/images/cold.svg";
import verycold from "../src/images/verycold.svg";
import veryhot from "../src/images/veryhot.svg";
const Dashboard = (props) => {
  const [img,setImg]=useState();
  useEffect(() => {

    if (props.max <= 0 || (props.max >= 0 && props.max <= 10)) {
      return setImg(verycold);
    } else if (props.max >= 11 && props.max <= 29) {
      return setImg(Cold);
    } else if (props.max >= 30 && props.max <= 40) {
      return setImg(Sunny);
    } else {
      return setImg(veryhot);
    }
  }, [props.max]);
  return (
    <>
      <div className="d-flex card ml-3 mt-3 mr-3" style={{ width: "13rem", height: "40vh" ,borderRadius:"15px"}}>
        <div className="card-body">
          <h3 className="text-center"><Moment format="dddd">{props.day}</Moment></h3>
          <img src={img} className="img-fluid" alt="Error"/>
          <h2 className="text-center mt-3">
            <strong>{props.max}°C</strong>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

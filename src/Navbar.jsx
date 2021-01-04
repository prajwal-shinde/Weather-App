import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Dashboard from "./Dashboard";
import Highlights from "./Highlights";
import speedometer from "../src/images/barometer.svg";
import WindStatus from "./WindStatus";
import Sunset from "./Sunset";
import Humidity from "./Humidity";
import Visiblity from "./Visiblity";
import AirQuality from "./AirQuality";
import Moment from "react-moment";
import Sunny from "../src/images/sunny.svg";
import Cold from "../src/images/cold.svg";
import verycold from "../src/images/verycold.svg";
import veryhot from "../src/images/veryhot.svg";
const Navbar = () => {
  const [Location, setLocation] = useState("No Data");
  const [Temp, setTemp] = useState(273);
  const [NewDay, setNewDay] = useState();
  const [City_name, setCity_name] = useState("No Data");
  const [Day, setDay] = useState();
  const [Main, setMain] = useState("No Data");
  const [Description, setDescription] = useState("No Data");
  const [Image, setImage] = useState();
  const [Lat, setLat] = useState();
  const [Lon, setLon] = useState();
  const [Uv, setUv] = useState("");
  const [windstatus, setwindStatus] = useState("");
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [humidity, setHumidity] = useState();
  const [visiblity, setVisisblity] = useState();
  const [airquality, setAirQuality] = useState();
  const [status, setStatus] = useState();
  const [temp_max, setTemp_max] = useState();
  const [temp2, setTemp2] = useState();
  const [temp3, setTemp3] = useState();
  const [temp4, setTemp4] = useState();
  const [temp5, setTemp5] = useState();
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();
  let x = Temp - 273.15;
  let y2 = temp_max - 273.15;
  let y3 = temp2 - 273.15;
  let y4 = temp3 - 273.15;
  let y5 = temp4 - 273.15;
  let x1 = Math.round(x.toFixed(2));

  useEffect(() => {
    console.log(x1);

    if (x1 <= 0 || (x1 >= 0 && x1 <= 10)) {
      return setImage(verycold);
    } else if (x1 >= 11 && x1 <= 29) {
      return setImage(Cold);
    } else if (x1 >= 30 && x1 <= 40) {
      return setImage(Sunny);
    } else {
      return setImage(veryhot);
    }
  }, [x1]);
  const check_Status = () => {
    if (airquality === 1) {
      return setStatus("Good Air Quality");
    } else if (airquality === 2) {
      return setStatus("Fair Air Quality");
    } else if (airquality === 3) {
      return setStatus("Moderate Air Quality");
    } else if (airquality === 4) {
      return setStatus("Poor Air Quality");
    } else {
      return setStatus("Very Poor Air Quality");
    }
  };

  const fetchUVApi = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/uvi?lat=${Lat}&lon=${Lon}&appid=715b9a70eab9b1f4e50ffac2b26eba39`
    );
    const resjson2 = await res.json();

    console.log(resjson2.value);
    setUv(resjson2.value);
    check_Status();
  };
  const fetchAirApi = async () => {
    const api3 = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${Lat}&lon=${Lon}&appid=715b9a70eab9b1f4e50ffac2b26eba39`
    )
      .then(async () => {
        const res_api3 = await api3.json();
        setAirQuality(res_api3.list[0].main.aqi);
        console.log(res_api3);
      })
      .catch(() => {
        return "Please wait something went wrong....";
      });
  };
  const fetchApi = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${Location}&appid=715b9a70eab9b1f4e50ffac2b26eba39`
    );

    fetchUVApi();
    fetchAirApi();
    const resJson = await response.json();
    console.log(resJson);
    console.log(resJson.list[0].main.temp);
    setTemp(resJson.list[0].main.temp);
    setCity_name(resJson.city.name);
    setDay(resJson.list[0].dt_txt);
    setMain(resJson.list[0].weather[0].main);
    setDescription(resJson.list[0].weather[0].description);
    setNewDay(resJson.list[6].dt_txt);
    setLat(resJson.city.coord.lat);
    setLon(resJson.city.coord.lon);
    setwindStatus(resJson.list[0].wind.speed);
    setSunrise(resJson.city.sunrise);
    setSunset(resJson.city.sunset);
    setHumidity(resJson.list[0].main.humidity);
    setVisisblity(resJson.list[0].visibility);

    setTemp2(resJson.list[10].main.temp_max);
    setTemp_max(resJson.list[6].main.temp_max);
    setTemp3(resJson.list[18].main.temp_max);
    setTemp4(resJson.list[26].main.temp_max);
    setTemp5(resJson.list[34].main.temp_max);
    setDay2(resJson.list[10].dt_txt);
    setDay3(resJson.list[18].dt_txt);
    setDay4(resJson.list[26].dt_txt);
    setDay5(resJson.list[34].dt_txt);
  };
  return (
    <>
      <div
        className="col-sm-12"
        style={{ backgroundColor: "rgb(216, 212, 212)" }}
      >
        <div className="row">
          <div className="col-sm-3">
            <div className="card shadow shadow-lg bg-light mb-5 h-100 w-100">
              <form className="d-flex m-3 px-1 ">
                <i className="fa fa-search pt-3 pr-1 pb-3"></i>
                <input
                  id="i1"
                  className="shadow-none text-dark form-control pr-2 mr-4 bg-light pt-2"
                  type="search"
                  placeholder="Search for cities..."
                  aria-label="Search"
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={fetchApi}
                >
                  Search
                </button>
              </form>
              <div className="card-body">
                <h1>
                  <strong>{City_name}</strong>
                </h1>

                <img
                  src={Image}
                  className="img-fluid mb-0 mt-0"
                  alt="Network Issue"
                />
                <h1 style={{ fontSize: "3.5rem" }}>
                  {Math.round(x.toFixed(2))}°C
                </h1>
                <h3>
                  <strong>
                    <Moment format="dddd">{Day}</Moment>
                  </strong>

                  <span className="ml-3" style={{ color: grey }}>
                    <Moment interval={1000} format="LTS"></Moment>
                  </span>
                </h3>
                <hr />

                <span className="d-flex">
                  <i
                    className="fa fa-cloud fa-2x"
                    aria-hidden="true"
                    style={{ color: "grey" }}
                  ></i>

                  <Typography>
                    <strong className="ml-3">{Main}</strong>
                  </Typography>
                </span>

                <span className="d-flex mt-3">
                  <i
                    className="fa fa-tint fa-2x ml-2"
                    aria-hidden="true"
                    style={{ color: "skyblue" }}
                  ></i>
                  &nbsp;&nbsp;
                  <Typography className="ml-2">
                    <strong className="ml-2">{Description}</strong>
                  </Typography>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row">
            <Dashboard day={NewDay} max={Math.round(y2.toFixed(2))} />
          <Dashboard day={day2} max={Math.round(y3.toFixed(2))} />
          <Dashboard day={day3} max={Math.round(y3.toFixed(2))} />
          <Dashboard day={day4} max={Math.round(y4.toFixed(2))} />
          <Dashboard day={day5} max={Math.round(y5.toFixed(2))} />
            </div>
            <div className="row d-flex justify-content-evenly">
            <Highlights title="UV Index" data={Uv} img={speedometer} />
          <WindStatus title="Wind Status" data={windstatus} />
          <Sunset title="Sunrise & Sunset" data={sunrise} data2={sunset} />
        </div>
        <div className="row d-flex justify-content-evenly mb-3">
          <Humidity title="Humidity" data={humidity} />
          <Visiblity title="Visiblity" data={visiblity} />
          <AirQuality
            title="Air Quality"
            data={airquality}
            air_status={status}
          />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

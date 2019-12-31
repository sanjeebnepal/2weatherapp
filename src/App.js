import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Axios from "axios";

const API_KEY = "f6a0f27abe051ada2ea42d197353fb69";

export default () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const getWeather = async e => {
    e.preventDefault();
    setLoading(true);
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;

    const data = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    )
      .then(data => {
        // data
        //   .json()
        //   .then(data => {
        setWeather(data.data);
        setLoading(false);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      })
      .catch(err => {
        console.log(err);
      });
  };
  if (loading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return (
    <>
      <Title />
      <Form handleSubmit={getWeather} />
      <Weather weather={weather} />
    </>
  );
};

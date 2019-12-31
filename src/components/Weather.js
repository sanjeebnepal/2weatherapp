import React from "react";
import ktoc from "kelvin-to-celsius";

export default props => {
  if (props.weather.main !== undefined) {
    const main = props.weather;
    let tempr = ktoc(main.main.temp);

    return (
      <>
        <p>Tempreature:{tempr}</p>
        <p>Humidity:{main.main.humidity}</p>
        <p>Wind speed:{main.wind.speed}</p>
        <p>Sunrise:{main.sys.sunrise}</p>
        <p>Weather:{main.weather[0].description}</p>
      </>
    );
  } else {
    return <h2>Fetching...</h2>;
  }
};

import React from "react";

const WeatherForm = ({ props, handleChange, loadWeather }) => {
  return (
    <form onSubmit={event => loadWeather(event)}>
      <input
        type="text"
        name="location"
        onChange={handleChange}
        value={props.location}
        placeholder="City"
        required
      />
      <button>Update City: {props.location}</button>
    </form>
  );
};

export default WeatherForm;

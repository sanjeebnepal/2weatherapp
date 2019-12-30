import React from "react";

export default props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>City</label>
      <input type="text" id="city" placeholder="City" />
      <label>Country</label>
      <input type="text" id="country" placeholder="Country" />
      <button type="submit">Get weather</button>
    </form>
  );
};

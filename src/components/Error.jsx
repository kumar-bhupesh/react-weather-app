import React from "react";

const Error = ({ weatherData }) => {
  return (
    <div className="h4 mt-4 text-center text-capitalize">
      {weatherData?.message}
    </div>
  );
};

export default Error;

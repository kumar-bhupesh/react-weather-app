import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-4">
      <Spinner animation="border" variant="seconadry" />
      <span className="mt-2">Fetching...</span>
    </div>
  );
};

export default Loading;

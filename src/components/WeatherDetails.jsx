import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { FaThermometerHalf, FaWind, FaEye } from "react-icons/fa";

import { FaDroplet } from "react-icons/fa6";
import { day, time } from "../utils/helpers";

const WeatherDetails = ({ weatherData }) => {
  return (
    <>
      <h2 className="text-center mb-0 pb-0">
        {weatherData.name}, {weatherData?.sys.country}
      </h2>
      <p className="text-center mb-4">
        {time} | {day}
      </p>
      <Row className="text-center my-4">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="display-4 mb-0">{weatherData?.main?.temp}°C</div>
          <div className="text-capitalize">
            {weatherData?.weather[0]?.description}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            alt="weather icon"
            fluid
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3} className="mb-3">
          <Card className="bg-light text-dark text-center">
            <Card.Body>
              <FaThermometerHalf className="mb-2" size={24} />
              <div>Real Feel</div>
              <div>{weatherData?.main.feels_like}°C</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="mb-3">
          <Card className="bg-light text-dark text-center">
            <Card.Body>
              <FaDroplet className="mb-2" size={24} />
              <div>Humidity</div>
              <div>{weatherData?.main?.humidity}%</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="mb-3">
          <Card className="bg-light text-dark text-center">
            <Card.Body>
              <FaWind className="mb-2" size={24} />
              <div>Wind</div>
              <div>{weatherData?.wind?.speed} m/s</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="mb-3">
          <Card className="bg-light text-dark text-center">
            <Card.Body>
              <FaEye className="mb-2" size={24} />
              <div>Visibility</div>
              <div>{weatherData?.visibility / 1000} km</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default WeatherDetails;

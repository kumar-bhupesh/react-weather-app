import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import WeatherDetails from "../components/WeatherDetails";
import Loading from "../components/Loading";
import Welcome from "../components/Welcome";
import Error from "../components/Error";
import { fetchWeatherData } from "../utils/api";

const WeatherDashboard = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchWeatherData(cityName);
      setLoading(false);
      setWeatherData(data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      alert(error);
    }
    setCityName("");
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Card
        className="bg-primary bg-opacity-50 shadow-lg text-light"
        style={{ width: "600px" }}
      >
        <Card.Body>
          <h3 className="text-center mb-4">React Weather App</h3>
          <SearchBar
            cityName={cityName}
            setCityName={setCityName}
            handleSearch={handleSearch}
          />
          {loading ? (
            <Loading />
          ) : weatherData?.name ? (
            <WeatherDetails weatherData={weatherData} />
          ) : weatherData?.cod === "404" ? (
            <Error weatherData={weatherData} />
          ) : (
            <Welcome />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherDashboard;

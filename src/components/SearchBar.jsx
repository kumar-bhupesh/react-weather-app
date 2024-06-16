import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBard = ({ cityName, setCityName, handleSearch }) => {
  return (
    <Form onSubmit={handleSearch}>
      <InputGroup className="mb-5">
        <Form.Control
          type="text"
          placeholder="Search City..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          aria-label="Search City"
        />
        <Button variant="dark" type="submit">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBard;

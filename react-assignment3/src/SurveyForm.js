import React, { useState } from "react";
import "./SurveyForm.css";
import myImage from "./image.jpg";
import styled from "styled-components";
const SurveyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false); // State variable to track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log("Form data submitted:", formData);
    setSubmitted(true); // Set submitted state to true after form submission
  };
  const StyledImage = styled.img`
    width: 100%;
    height: 50px;
  `;

  return (
    <div className="form-container">
      <StyledImage src={myImage} alt="Description" />

      <h1 style={{ textAlign: 'center' }}>Survey Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group name-group">
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="Enter firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Middle Name:
              <input
                type="text"
                name="middleName"
                placeholder="Enter MiddleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Enter LastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Country:
            <select
              name="country"
              placeholder="Enter Country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Choose your country
              </option>
              <option value="USA">United States</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              {/* Add more countries as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="response-message">
          Your response is submitted. Thank you!
        </div>
      )}
    </div>
  );
};

export default SurveyForm;

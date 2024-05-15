import React, { useState } from "react";

function RegistrationForm() {
  // State variables to hold form data, submission status, and error message
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track form submission status
  const [, setErrorMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any of the required fields are empty
    if (!firstName || !lastName || !username || !email || !password) {
      setErrorMessage("Please fill in all required fields.");
      return; // Exit the function early if any field is empty
    }
    // You can perform form validation and submit data to server here
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      username,
      email,
      password,
    });
    setSubmitted(true); // Update submission status
    setErrorMessage(""); // Clear error message
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        padding: "20px",
        borderRadius: "10px",
        width: "400PX",
        margin: "0 auto",
        border: "1px solid black",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",  
        textAlign: "center",
      }}
    >
      {!submitted ? ( // If form is not submitted, display form
        <form onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: "50px" }}>Registration Form</h2>
          <div style={{ marginBottom: "10px" }}>
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={{
                  width: "80%",
                  fontSize: "14px",
                  padding: "8px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={{
                  width: "80%",
                  fontSize: "14px",
                  padding: "8px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: "80%",
                  fontSize: "14px",
                  padding: "8px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Email:
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "80%",
                  fontSize: "14px",
                  padding: "8px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "80%",
                  fontSize: "14px",
                  padding: "8px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>
        </form>
      ) : (
        // If form is submitted, display greeting message
        <div>
          <h2 style={{ marginTop: "50px" }}>Registration Form</h2>
          <p style={{ color: "#333", height: "50px" }}>
            Greetings, {username}!
          </p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;

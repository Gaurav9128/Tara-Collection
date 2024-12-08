import React from "react";


const WelcomeMessage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          ✨ WELCOME TO THE JAY <br />
          <span style={styles.subheading}>BANKER</span> ✨
        </h1>
        <p style={styles.subtext}>Your trusted companion for managing the Admin Panel!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
  card: {
    background: "white",
    borderRadius: "15px",
    padding: "40px 30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "90%",
    maxWidth: "500px",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "10px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: "1.6", // Adds spacing between lines
  },
  subheading: {
    display: "block", // Ensures it breaks into a new line
    marginTop: "10px",
  },
  subtext: {
    fontSize: "1.2rem",
    color: "#555",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "400",
    lineHeight: "1.6",
  },
};

export default WelcomeMessage;

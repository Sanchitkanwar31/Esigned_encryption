import React, { useState } from "react";

function EncryptPage() {
  const [text, setText] = useState("");
  const [key, setKey] = useState(""); // Added missing key state
  const [EncryptedText, setEncryptedText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text || !key) {
      alert("Please enter both text and key.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, key }), // Sending key along with text
      });

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      setEncryptedText(data.Encrypted_text);
    } catch (error) {
      console.error(error);
      alert("Encryption failed!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2>🔐 Encrypt Your Text</h2>
      <form onSubmit={handleSubmit}>
        {/* Key Input */}
        <label>
          <strong>Enter the key:</strong>
        </label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
          placeholder="Enter encryption key"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Text Input */}
        <label>
          <strong>Enter Text:</strong>
        </label>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type your text here..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          rows="3"
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Encrypt 🔒
        </button>
      </form>

      {/* Display Encrypted Text */}
      {EncryptedText && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f8f9fa",
            borderRadius: "5px",
          }}
        >
          <strong>🔒 Encrypted Text:</strong>
          <p style={{ wordBreak: "break-word" }}>{EncryptedText}</p>
        </div>
      )}
    </div>
  );
}

export default EncryptPage;

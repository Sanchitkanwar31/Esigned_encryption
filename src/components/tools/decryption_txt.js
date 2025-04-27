import React, { useState } from "react";

function DecryptPage() {
  const [encryptedText, setEncryptedText] = useState("");
  const [key, setKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleDecrypt = async (e) => {
    e.preventDefault();
  //  IF ORIGINAL LOCALHOST:=const response = await fetch("http://127.0.0.1:8000/decrypt"https://esigned-backend.onrender.com/decrypt
    

    try {
      const response = await fetch("https://esigned-backend.onrender.com/decrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: encryptedText, key }),
      });

      if (!response.ok) throw new Error("Decryption failed.");

      const data = await response.json();
      setDecryptedText(data.Decrypted_text);
    } catch (error) {
      alert("Invalid key or encrypted text.");
      setDecryptedText("");
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
      <h2>🔓 Decrypt Your Text</h2>

      <form onSubmit={handleDecrypt} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Key Input */}
        <label>
          <strong>Enter Decryption Key:</strong>
        </label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Encrypted Text Input */}
        <label>
          <strong>Enter Encrypted Text:</strong>
        </label>
        <textarea
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
          required
          placeholder="Paste encrypted text here..."
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            resize: "none",
          }}
          rows="3"
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Decrypt 🔓
        </button>
      </form>

      {/* Display Decrypted Text */}
      {decryptedText && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f8f9fa",
            borderRadius: "5px",
          }}
        >
          <strong>Decrypted Text:</strong>
          <p style={{ wordBreak: "break-word" }}>{decryptedText}</p>
        </div>
      )}
    </div>
  );
}

export default DecryptPage;

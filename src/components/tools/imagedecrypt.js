import React, { useState } from 'react';

const DecryptImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [decodedMessage, setDecodedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setDecodedMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert('Please upload an image to decode.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/decode-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to decode image.');
      }

      const result = await response.json();
      setDecodedMessage(result.message);
      setSelectedImage(null);
    } 
    catch (error) {
      console.error('Error decoding image:', error);
      setDecodedMessage('Error: Could not decode the image.');
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-2">Decode Hidden Message from Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit" className="ml-2 px-4 py-1 bg-green-600 text-white rounded">
          {loading ? 'Decoding...' : 'Decrypt'}
        </button>
      </form>

      {decodedMessage && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <strong>Decoded Message:</strong>
          <p className="mt-2">{decodedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default DecryptImage;

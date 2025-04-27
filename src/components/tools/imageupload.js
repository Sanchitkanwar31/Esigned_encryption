import React, { useState } from 'react';

const EncryptImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [secretText, setSecretText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0]);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage || !secretText) {
      alert('Please upload an image and enter secret text');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', secretText);
    //https://esigned-backend.onrender.com/encode-image is used for deployment
    //http://localhost:8000/encode-image is used for local testing
    try {
      const response = await fetch('http://127.0.0.1:8000/encode-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      const blob = await response.blob();
      const imgURL = URL.createObjectURL(blob);

      setResponseMessage('Image ENCODED! Downloading...');
      setSelectedImage(null);
      setSecretText('');

      const link = document.createElement('a');
      link.href = imgURL;
      link.download = 'encoded_image.png';
      link.click();
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error occurred while uploading the image.');
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Encode Secret Text in Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <input
          type="text"
          value={secretText}
          onChange={(e) => setSecretText(e.target.value)}
          placeholder="Enter message to hide.."
          className="ml-2 p-1 border"
          required
        />
        <button type="submit" className="ml-2 px-4 py-1 bg-blue-800 text-black rounded" >
          Encrypt
        </button>
      </form>
      {responseMessage && <p className="mt-2 text-green-600">{responseMessage}</p>}
    </div>
  );
};

export default EncryptImage;

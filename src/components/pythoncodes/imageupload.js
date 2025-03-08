import React, { useState } from 'react';

function ImageUpload({ onImageSelect }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUpload;

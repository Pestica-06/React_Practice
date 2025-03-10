import React, { useState } from "react";

export default function ImageGallery() {

  const images = [
    "https://picsum.photos/id/27/3264/1836",
    "https://picsum.photos/id/26/4209/2769",
    "https://picsum.photos/id/71/5000/3333",
    "https://picsum.photos/id/85/1280/774",
  ];

  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>

      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Random ${index}`}
            onClick={() => handleImageClick(image)}
            width="200px"
          />
        ))}
      </div>

      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img
            src={selectedImage}
            alt="Selected"
            width="300px"
          />
        </div>
      )}
    </div>
  );
}

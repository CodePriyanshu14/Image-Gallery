import React from 'react';
import './Gallery.css';

const images = [
  { id: 1, src: '/images/image 1.jpg', alt: 'Image 1', caption: 'Internship Certificate' },
  { id: 2, src: '/images/image2.jpeg', alt: 'Image 2', caption: 'Cool Cat' },
  { id: 3, src: '/images/React-App-Architecture.jpg', alt: 'Image 3', caption: 'React App Architecture' },
  { id: 4, src: '/images/image5.jpeg', alt: 'Image 4', caption: 'Pink' },
  { id: 5, src: '/images/scifi.jpeg', alt: 'Image 5', caption: 'SciFi' },
  { id: 6, src: '/images/image6.jpeg', alt: 'Image 6', caption: 'Random Pic' },
];


function Gallery({ openModal }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="image-container" key={image.id} onClick={() => openModal(image)}>
          <img src={image.src} alt={image.alt} />
          <div className="image-caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

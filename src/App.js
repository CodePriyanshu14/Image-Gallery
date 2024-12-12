import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import Modal from './Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Image Gallery</h1>
        <p>Click on any image to view it in full size!</p>
      </header>
      <Gallery openModal={openModal} />
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
}

export default App;

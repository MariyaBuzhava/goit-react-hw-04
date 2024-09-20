// import c from './ImageGallery.module.css'

import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images found</p>;
  }
  return (
    <ul>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;

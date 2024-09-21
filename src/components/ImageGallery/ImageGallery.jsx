// import c from './ImageGallery.module.css'

import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return <p>No images found</p>;
  }

  return (
    <div>
      <ul>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={() => onImageClick(image.urls.regular)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

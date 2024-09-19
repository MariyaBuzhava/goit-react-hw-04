// import c from './ImageGallery.module.css'

import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ images }) => {
  //   if (!images || images.length === 0) {
  //     return <p>No images found</p>;
  //   }
  return (
    <div>
      <ul>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

{
  /* <img src={image.url.small} alt={image.alt_description} /> */
}
{
  /* <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a> */
}

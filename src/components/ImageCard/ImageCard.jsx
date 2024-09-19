// import c from './ImageCard.module.css'

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;

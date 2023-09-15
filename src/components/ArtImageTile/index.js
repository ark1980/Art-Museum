import { Link } from "react-router-dom";
import "./ArtImageTile.css";

const ArtImageTile = ({ art, galleryId }) => {
  return (
    <Link to={`/galleries/${galleryId}/art/${art.imageid}`}>
      <img src={art.baseimageurl} />
    </Link>
  );
};

export default ArtImageTile;

import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find(gal => (
    parseInt(galleryId) === gal.id
  ));

  console.log(gallery);

  return <h2>{gallery ? gallery.name : "Not Found the Gallery"}</h2>;
};

export default GalleryView;

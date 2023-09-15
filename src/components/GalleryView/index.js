import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find((gal) => parseInt(galleryId) === gal.id);

  // console.log(gallery)

  return (
    <>
      {gallery ? (
        <div>
          <h2>{gallery.name}</h2>
          {gallery.objects.map((item) => (
            <Route path="/galleries/:galleryId">
              <ArtImageTile art={item.images[0]} galleryId={gallery.id} />
            </Route>
          ))}
        </div>
      ) : (
        <h2>Gallery not found</h2>
      )}
    </>
  );
};

export default GalleryView;

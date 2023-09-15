import { Link, useParams } from "react-router-dom"

const ArtDescription = ({ art, galleryid }) => {

  const { artId } = useParams();
  const { galleryId } = useParams();

  console.log(art);


   
  return(
    <div>
      
    </div>
  )
}

export default ArtDescription;
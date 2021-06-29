import Skeleton from "react-loading-skeleton"
import usePhotos from "../hooks/use-photos"
import Post from './post'

export default function Timeline () {
  const { photos } = usePhotos()

  return (
    <div className="container col-span-2">
      {!photos ? (
            <Skeleton count={3} width={640} height={400} className="mb-4" />
      ) :  photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  )
}
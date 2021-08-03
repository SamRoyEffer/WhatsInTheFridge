export default function PhotoContainer(props) {

  const displayPhotos = (props) => {

  
  const {photos} = props

  if(photos.length > 0) {
    console.log('photo image',photos)
    return(
          <div>
            <img src={photos} alt='new'></img>
          </div>
        )
      } else {
  return (<h3>No photos yet</h3>)
}
}
return (
  <>
  {displayPhotos(props)}
  </>
)
}
import "./PhotoContainer.scss"

export default function PhotoContainer(props) {

  const displayPhotos = (props) => {


    const { photos } = props

    //console.log('photo image',photos.image)
    if (photos) {
      //console.log('photo image',photos)
      return (
        <div className="img-slider">

          <div className="slide">
            <img src={photos.image} alt='new'></img>
            <div className="info">
              <h2>{photos.title}</h2>
              <p>{photos.summary}</p>
            </div>
          </div>

         
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
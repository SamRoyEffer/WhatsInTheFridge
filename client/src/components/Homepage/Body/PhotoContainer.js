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
              <h2><span><a href={photos.sourceUrl}>{photos.title}</a></span></h2>
              <div dangerouslySetInnerHTML={{ __html: photos.summary}}/>
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
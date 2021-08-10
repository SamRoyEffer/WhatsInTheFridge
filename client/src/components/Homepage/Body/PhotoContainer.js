import "./PhotoContainer.scss"

export default function PhotoContainer(props) {

  const displayPhotos = (props) => {

    //console.log('props:', props)
    const { recipe } = props

    //console.log('recipefromphotocontainer:',recipe)
    if (recipe) {
      //console.log('photo image',recipe)
        return (
          <div className="img-slider">
  
            <div className="slide">
              <img src={recipe.image} alt='new'></img>
              <div className="info">
                <h2><span><a className='info' href={recipe.sourceUrl}>{recipe.title}</a></span></h2>
                
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
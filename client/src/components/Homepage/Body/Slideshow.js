import axios from "axios";
import PhotoContainer from "./PhotoContainer";
import { Carousel } from "react-bootstrap";
import "./Slideshow.scss";

import React, { useState, useEffect } from "react";

/*
const randomNumber = () => {
  return Math.floor(Math.random() * 6000) + 1
} */

export default function Slideshow() {
  //const [photos, getPhotos] = useState([]);
  const [recipe1, setRecipe1] = useState([]);
  const [recipe2, setRecipe2] = useState([]);

  const randomRecipe1 = `https://api.spoonacular.com/recipes/1423/information?apiKey=9768625974324441a01777879d94c9b2`
  const randomRecipe2 = `https://api.spoonacular.com/recipes/5251/information?apiKey=9768625974324441a01777879d94c9b2`


  const getAllRecipes = () => {
    axios.all([
      axios.get(randomRecipe1),
      axios.get(randomRecipe2)
    //Promise.resolve(axios.get(randomRecipe2)),
    ])
      .then((all) => {
        //const Recipe1 = all[0].data;
        //const Recipe2 = all[1].data;
        //console.log('Recipe1:',Recipe1, typeof Recipe1)
        //console.log('all[0]:',all[0])
        //console.log('Recipe2:',Recipe2)
        setRecipe1(all[0].data)
        setRecipe2(all[1].data)
      })
      .catch(error => console.error(`Error: ${error}`))
      }
      
      useEffect(() => {
        getAllRecipes();
      }, [])

  return (
    <section className='carousel'>
    <Carousel className='carouselFirst' prevLabel={null} nextLabel={null} fade={true}>
  <Carousel.Item>
    <PhotoContainer  recipe={recipe1} />
  </Carousel.Item>

  <Carousel.Item>
    <PhotoContainer recipe={recipe2}/>
  </Carousel.Item>

</Carousel>

    
   
    </section>
  )
}
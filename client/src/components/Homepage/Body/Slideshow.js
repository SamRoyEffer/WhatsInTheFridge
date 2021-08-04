import axios from "axios";
import PhotoContainer from "./PhotoContainer";
import { Carousel } from "react-bootstrap";

import React, { useState, useEffect } from "react";

const randomNumber = () => {
  return Math.floor(Math.random() * 6000) + 1
}

export default function Slideshow() {
  const [photos, getPhotos] = useState('');

  const url = `https://api.spoonacular.com/recipes/${randomNumber()}/information?apiKey=de4608c7fbba484e981a793441c70c06`

  useEffect(() => {
    getAllPhotos();
  }, [])


  const getAllPhotos = () => {
    axios.get(url)
      .then((response) => {
        const allPhotos = response.data;
        console.log(allPhotos)
        getPhotos(allPhotos)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  return (
    <section>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <PhotoContainer photos={photos}/>
   
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <PhotoContainer photos={photos}/>
  </Carousel.Item>

</Carousel>
  
    
   
    </section>
  )
}
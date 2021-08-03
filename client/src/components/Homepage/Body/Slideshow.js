import axios from "axios";
import PhotoContainer from "./PhotoContainer";
import React, { useState, useEffect } from "react";

const randomNumber = () => {
  return Math.floor(Math.random() * 6000) + 1
}

export default function Slideshow() {
  const [photos, getPhotos] = useState('');

  const url = `https://api.spoonacular.com/recipes/${randomNumber()}/information?apiKey=`

  useEffect(() => {
    getAllPhotos();
  }, [])


  const getAllPhotos = () => {
    axios.get(url)
      .then((response) => {
        const allPhotos = response.data.image;
        console.log(allPhotos)
        getPhotos(allPhotos)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  return (
    <section>
    <p>Here are some photos</p>
    <PhotoContainer photos={photos}/>
    </section>
  )
}
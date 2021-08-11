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
  const [recipe3, setRecipe3] = useState([]);
  const [recipe4, setRecipe4] = useState([]);

  const randomRecipe1 = `https://api.spoonacular.com/recipes/1423/information?apiKey=8a5caab478484b4798b15918420d1e5e`;
  const randomRecipe2 = `https://api.spoonacular.com/recipes/5251/information?apiKey=8a5caab478484b4798b15918420d1e5e`;
  const randomRecipe3 = `https://api.spoonacular.com/recipes/659290/information?apiKey=8a5caab478484b4798b15918420d1e5e`;
  const randomRecipe4 = `https://api.spoonacular.com/recipes/1499853/information?apiKey=8a5caab478484b4798b15918420d1e5e`;

  const getAllRecipes = () => {
    axios
      .all([
        axios.get(randomRecipe1),
        axios.get(randomRecipe2),
        axios.get(randomRecipe3),
        axios.get(randomRecipe4),
      ])
      .then((all) => {
        setRecipe1(all[0].data);
        setRecipe2(all[1].data);
        setRecipe3(all[2].data);
        setRecipe4(all[3].data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <section className="carousel">
      <Carousel
        className="carouselFirst"
        prevLabel={null}
        nextLabel={null}
        fade={true}
      >
        <Carousel.Item>
          <PhotoContainer recipe={recipe1} />
        </Carousel.Item>

        <Carousel.Item>
          <PhotoContainer recipe={recipe2} />
        </Carousel.Item>

        <Carousel.Item>
          <PhotoContainer recipe={recipe3} />
        </Carousel.Item>

        <Carousel.Item>
          <PhotoContainer recipe={recipe4} />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

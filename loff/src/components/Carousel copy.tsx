import { useRef, useState } from "react";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";
import car5 from "../images/car5.jpg";
const imageArray = [car1, car2, car3, car4, car5];

function Carousel(props: { images: { src: string }[] }) {
  const carousel = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  const incrementCarousel = (delta: number) => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;

    if (count + delta > props.images.length - 1) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      setCount(props.images.length - 1);
      carousel.current.scrollTo(width * props.images.length - 1, 0);
      return;
    }

    carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
    setCount((c) => c + delta);
  };
  return (
    <div className="carousel-container">
      <div
        className="carousel-button carousel-button-left"
        onClick={() => incrementCarousel(-1)}
      >
        <div className="carousel-button__arrow carousel-button__arrow--left"></div>
      </div>
      <div
        className="carousel-button carousel-button-right"
        onClick={() => incrementCarousel(1)}
      >
        <div className="carousel-button__arrow carousel-button__arrow--right"></div>
      </div>
      <div className="carousel" ref={carousel}>
        {props.images.map((img, index) => (
          <div className="carousel-item" key={`${index}`}>
            <img src={img.src}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

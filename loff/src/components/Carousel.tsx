import { useRef, useState } from "react";

function Carousel(props: { images: any }) {
  const carousel = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  console.log(count);

  const incrementCarousel = (delta: number) => {
    console.log(carousel.current);
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
        {props.images.map((img: any, index: any) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt="Series"></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

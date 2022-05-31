import { Link } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Show(props: {
  image?: string;
  title?: string;
  text?: string;
  link?: string;
}) {
  return (
    <div className="show-container">
      <div className="show-container__image-container">
        <img src={props.image} />
      </div>
      <div className="show-container__text-container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="text-container__link-container">
          <a href={props.link}>Se serien på youtube</a>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </div>
  );
}

export default Show;

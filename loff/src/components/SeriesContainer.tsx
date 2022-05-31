import convertImageUrl from "../functions/convertImageUrl";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SeriesContainer(props: {
  title: string;
  image: string;
  text: string;
  link: string;
  youtube: string;
}) {
  return (
    <div className="series-container">
      <div className="series-container__image-container">
        <img src={props.image}></img>
      </div>
      <div className="series-container__text-container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="series-container__text-container__link-container">
          <Link
            to={`/details${props.link}`}
            className="series-container__text-container__link-container__link"
          >
            Les mer
            <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
          </Link>
          <a
            href={props.youtube}
            className="series-container__text-container__link-container__link"
          >
            Se serien på youtube{" "}
            <FontAwesomeIcon icon={faYoutube} className="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SeriesContainer;

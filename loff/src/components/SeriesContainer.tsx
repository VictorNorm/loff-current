import { Link } from "react-router-dom";
import ytIcon from "../logo-some/Youtube-ikon.svg";

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
        <img src={props.image} alt="Image of series"></img>
      </div>
      <div className="series-container__text-container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="series-container__text-container__link-container">
          <Link
            to={`/details${props.link}`}
            className="series-container__text-container__link-container__link"
          >
            <h6 id="linkwrapper">Les mer</h6>
          </Link>
          <a
            href={props.youtube}
            className="series-container__text-container__link-container__link"
            id="youtube-link"
          >
            <img
              src={ytIcon}
              alt="youtube"
              className="series-container__youtube"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SeriesContainer;

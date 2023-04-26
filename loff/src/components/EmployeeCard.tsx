import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import mailIcon from "../icon-svg/Mail-ikon.svg";
import instagram from "../logo-some/Instagram-ikon.svg";

function EmployeeCard(props: {
  src?: string;
  alt?: string;
  name?: string;
  role?: string;
  paragraph?: string;
  email?: string;
  instagram?: string;
}) {
  return (
    <div className="employeeCard">
      <div className="employeeCard__image-container">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="employeeCard__text-container">
        <h4 className="employeeCard__h3">{props.name}</h4>
        <h5 className="employeeCard__h4">{props.role}</h5>
        <p className="employeeCard__p">{props.paragraph}</p>
      </div>
      <div className="employeeCard__social-container">
        <p>
          <a href={`https://www.instagram.com/${props.instagram}/`}>
            <img
              src={instagram}
              alt="instagram"
              className="employeeCard__social-container__icon"
            />
          </a>
        </p>

        <a href={`mailto:${props.email}@email.com`}>
          <img
            src={mailIcon}
            alt="mailicon"
            className="employeeCard__social-container__icon"
          />
        </a>
      </div>
    </div>
  );
}

export default EmployeeCard;

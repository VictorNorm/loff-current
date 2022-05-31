import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faInstagram} />
            {props.instagram}
          </a>
        </p>
        <p>
          <a href={`mailto:${props.email}@email.com`}>{props.email}</a>
        </p>
      </div>
    </div>
  );
}

export default EmployeeCard;

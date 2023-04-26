import { newBaseImageUrl } from "./api";
import convertImageUrl from "../functions/convertImageUrl";
import checkboxEmpty from "../icon-svg/Checkbox-ikon-utencheck.svg";
import checkbox from "../icon-svg/Checkbox-ikon.svg";

function SponsorContainer(props: {
  desc: string;
  name: string;
  image: string;
  hovedsponsor: boolean;
  konkurranser: boolean;
  krysspublisering: boolean;
}) {
  return (
    <div className="sponsor-container">
      <div className="sponsor-container__image-container">
        <img
          src={convertImageUrl(newBaseImageUrl + props.image)}
          className="sponsor-image"
          alt="Sponsors image"
        />
      </div>
      <div className="sponsor-container__text-container">
        <h5>{props.name}</h5>
        <p>{props.desc}</p>
        <div className="sponsor-container__text-container__sponsor-info">
          {props.hovedsponsor == true ? (
            <div>
              <img src={checkbox} alt="checkbox" className="checkbox" />
              <h6>Hovedsponsor</h6>
            </div>
          ) : (
            <div>
              <img
                src={checkboxEmpty}
                alt="emptycheckbox"
                className="checkbox"
              />
              <h6>Hovedsponsor</h6>
            </div>
          )}
          {props.konkurranser == true ? (
            <div>
              <img src={checkbox} alt="checkbox" className="checkbox" />
              <h6>Konkurranser</h6>
            </div>
          ) : (
            <div>
              <img
                src={checkboxEmpty}
                alt="checkboxEmpty"
                className="checkbox"
              />
              <h6>Konkurranser</h6>
            </div>
          )}
          {props.krysspublisering == true ? (
            <div>
              <img src={checkbox} alt="checkbox" className="checkbox" />
              <h6>Krysspublisering</h6>
            </div>
          ) : (
            <div>
              <img
                src={checkboxEmpty}
                alt="checkboxEmpty"
                className="checkbox"
              />
              <h6>Krysspublisering</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SponsorContainer;

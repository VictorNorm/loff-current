// export {};
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

function ContentBlock(props: {
  heading?: string;
  heading2?: string;
  paragraph1?: string;
  paragraph2?: string;
  src?: string;
  alt?: string;
  link?: string;
  buttonText?: string;
}) {
  return (
    <>
      <div className="contentBlock-wrapper">
        <Wrapper layout="wrapper--flex-center">
          <div className="contentBlock">
            <div className="contentBlock__text">
              <h2>{props.heading}</h2>
              <p>{props.paragraph1}</p>
              <h2>{props.heading2}</h2>
              <p>{props.paragraph2}</p>
              <Link to={`${props.link}`} className="cta-1">
                <p>{props.buttonText}</p>
              </Link>
            </div>
            <div className="contentBlock__image-container">
              <img src={props.src} alt={props.alt} />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default ContentBlock;

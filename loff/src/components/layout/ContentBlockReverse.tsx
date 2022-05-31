import Wrapper from "./Wrapper";

function ContentBlockReverse(props: {
  heading1?: string;
  heading2?: string;
  paragraph1?: string;
  paragraph2?: string;
  src?: string;
  alt?: string;
  link?: string;
  buttonText: string;
  images?: any;
}) {
  return (
    <div className="contentBlock-reverse-wrapper">
      <Wrapper>
        <div className="contentBlock-reverse">
          <div className="contentBlock-reverse__text">
            <h2>{props.heading1}</h2>
            <p>{props.paragraph1}</p>
            <h2>{props.heading2}</h2>
            <p>{props.paragraph2}</p>
            <a href={`${props.link}`} className="cta-1">
              {props.buttonText}
            </a>
          </div>
          <div className="contentBlock-reverse__image-container">
            {props.images.map((image: any) => (
              <img src={image} key={image} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default ContentBlockReverse;

import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "./api";
import convertImageUrl from "../functions/convertImageUrl";
import ContentBlock from "./layout/ContentBlock";
import Wrapper from "./layout/Wrapper";

function About() {
  const [about, setAbout] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    async function fetchAbout() {
      try {
        setIsLoading(true);
        const query = `?query=*[_type == "about"]`;
        const url = newBaseUrl + query;
        const aboutRespone = await fetch(url);
        const aboutData = await aboutRespone.json();
        setAbout(aboutData);
      } catch (error) {
        setError("An error occured, try reloading the page.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchAbout();
  }, []);
  if (about.length === 0) {
    return null;
  }
  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (error) {
    <Wrapper>{error}</Wrapper>;
  }
  return (
    <>
      {!isLoading && (
        <ContentBlock
          heading={"Loff"}
          paragraph1={about.result[0].homepage_info}
          heading2="Lucky view"
          paragraph2={about.result[0].homepage_info2}
          src={
            newBaseImageUrl + convertImageUrl(about.result[0].image.asset._ref)
          }
          alt={"Loff image"}
          link="/omloff"
          buttonText="Om loff"
        />
      )}
    </>
  );
}

export default About;

// newBaseImageUrl + convertImageUrl(about.result[0].image.asset._ref

import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "./api";
import convertImageUrl from "../functions/convertImageUrl";
import ContentBlock from "./layout/ContentBlock";

function About() {
  const [aboutImageUrl, setAboutImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchAbout() {
      try {
        const query = `?query=*[_type == "about"]`;
        const url = newBaseUrl + query;
        const aboutRespone = await fetch(url);
        const aboutData = await aboutRespone.json();
        const imageUrl =
          newBaseImageUrl +
          convertImageUrl(aboutData.result[0].image.asset._ref);
        setAboutImageUrl(imageUrl);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAbout();
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <>
      {!isLoading && (
        <ContentBlock
          heading={"Loff"}
          paragraph1={`Loff er kanalen hvor vi eksperimenterer med forskjellige formater
                  og lager underholdende innhold for basser.
                  Bak kanalen Loff står bassene i Lucky View.`}
          heading2="Lucky view"
          paragraph2={`Lucky View ble opprettet av en vennegjeng i 2011,
                  og siden den gang har vi produsert en rekke enkeltstående filmer og serier
                  som har oppnådd stor viral spredning og vunnet priser for sin innovative stil.
                  For å forklare det kort og enkelt: Lucky View er bakeren.`}
          src={aboutImageUrl}
          alt={"Loff image"}
          link="/omloff"
          buttonText="Om loff"
        />
      )}
    </>
  );
}

export default About;

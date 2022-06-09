import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "../components/api";
import convertImageUrl from "../functions/convertImageUrl";
import Wrapper from "../components/layout/Wrapper";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

function OmLoff() {
  const [about, setAbout] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    async function fetchAbout() {
      try {
        setIsLoading(true);
        const query = `?query=*[_type == "about"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        const content: string[] = [];
        data.result[0].text.forEach((paragraph: any) => {
          content.push(paragraph.children[0].text);
        });
        content.push(data.result[0].image.asset._ref);
        setAbout(content);
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
    return (
      <Wrapper>
        <div className="loader"></div>
      </Wrapper>
    );
  }
  if (error) {
    return <Wrapper>{error}</Wrapper>;
  }
  return (
    <>
      <Helmet>
        <title>Loff | Om loff</title>
        <meta
          name="description"
          content="Les om hvordan og hvorfor Loff og Lucky View startet, hvilket som er Loffs første prosjekt og mye mer."
        />
      </Helmet>
      <Wrapper>
        <h1>Om Loff</h1>
        <section className="om-loff">
          <p>{about[0]}</p>
          <p>{about[1]}</p>
          <img
            className="om-loff__image"
            src={newBaseImageUrl + convertImageUrl(about[8])}
          />
          <p>{about[2]}</p>
          <p>{about[3]}</p>
          <p className="om-loff--bold-center">{about[4]}</p>
          <p>{about[5]}</p>
          <p>{about[6]}</p>
          <p>{about[7]}</p>
        </section>
      </Wrapper>
      <Footer />
    </>
  );
}

export default OmLoff;

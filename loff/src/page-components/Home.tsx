import { newBaseImageUrl, newBaseUrl } from "../components/api";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import Wrapper from "../components/layout/Wrapper";
import convertImageUrl from "../functions/convertImageUrl";
import About from "../components/About";
import Some from "../components/Some";
import Footer from "../components/Footer";
import Merch from "../components/Merch";

function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    async function fetchImages() {
      try {
        setIsloading(true);
        const query = `?query=*[_type == "shows"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        const imageData: any = [];
        data.result.forEach(function (show: any): void {
          if (show.image.asset._ref) {
            imageData.push({
              src: newBaseImageUrl + convertImageUrl(show.image.asset._ref),
            });
          }
        });
        setImages(imageData);
      } catch (error) {
        setError("An error occured, try reloading the page.");
      } finally {
        setIsloading(false);
      }
    }
    fetchImages();
  }, []);

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
        <title>Loff | Hjem</title>
        <meta
          name="description"
          content="Loff produserer underholdning for alle mennesker, sjekk ut våre serier, podkast og mye mer."
        />
      </Helmet>
      <Wrapper>{!isLoading ? <Carousel images={images} /> : null}</Wrapper>
      <div className="home">
        <About />
        <Some />
        <Merch />
      </div>
      <Footer />
    </>
  );
}

export default Home;

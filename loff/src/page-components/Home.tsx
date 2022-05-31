import { baseImageUrl, baseUrl } from "../components/api";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Wrapper from "../components/layout/Wrapper";
import convertImageUrl from "../functions/convertImageUrl";
import ContentBlock from "../components/layout/ContentBlock";
import ContentBlockReverse from "../components/layout/ContentBlockReverse";
import Some from "../components/layout/Some";
import Footer from "../components/Footer";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";
import car5 from "../images/car5.jpg";
import car6 from "../images/car6.jpg";
import some1 from "../images/some1.jpg";
import some2 from "../images/some2.jpg";
import some3 from "../images/some3.jpg";
import some4 from "../images/some4.jpg";
import some5 from "../images/some5.jpg";
import some6 from "../images/some6.jpg";
import some7 from "../images/some7.jpg";
import some8 from "../images/some8.jpg";
import merch1 from "../images/merch1.webp";
import merch2 from "../images/merch2.webp";
import merch3 from "../images/merch3.webp";
import merch4 from "../images/merch4.webp";

const merchImageArray = [merch1, merch2];
const someImageArray = [some1, some7, some3, some4, some5, some2, some6, some8];
const carouselImageArray = [car1, car2, car3, car4, car5, car6];

function Home() {
  const [images, setImages] = useState([]);
  const [isFetched, setIsfetched] = useState(false);
  useEffect(() => {
    async function fetchImages() {
      const query = `?query=*[][_type == "season"]`;
      const url = baseUrl + query;
      const response = await fetch(url);
      const data = await response.json();
      const imageData: any = [];
      data.result.forEach(function (show: any): void {
        if (show.thumbnail.image.asset) {
          convertImageUrl(show.thumbnail.image.asset._ref);
          imageData.push({
            src:
              baseImageUrl + convertImageUrl(show.thumbnail.image.asset._ref),
          });
        }
      });
      setImages(imageData);
      setIsfetched(true);
    }
    fetchImages();
  }, []);

  const [aboutImageUrl, setAboutImageUrl] = useState("");
  const [isAboutFetched, setisAboutFetched] = useState(false);
  useEffect(() => {
    async function fetchAbout() {
      const query = `?query=*[][_id == "about-us"]["content"]["content"][][_type == "image"]{asset}`;
      const url = baseUrl + query;
      const aboutRespone = await fetch(url);
      const aboutData = await aboutRespone.json();
      const imageUrl =
        baseImageUrl + convertImageUrl(aboutData.result[0].asset._ref);
      setAboutImageUrl(imageUrl);
      setisAboutFetched(true);
    }
    fetchAbout();
  }, []);

  return (
    <>
      {/* <h1>Våre serier!</h1> */}
      <Wrapper>
        <Carousel images={carouselImageArray} />
      </Wrapper>
      <div className="home">
        {isAboutFetched && (
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
        <Some images={someImageArray} />
        <ContentBlockReverse
          buttonText="Shop"
          heading1="Shop"
          paragraph1="Du kan følge oss på våre sosiale kanaler, hold deg oppdatert på nye serier,
        podcasts og mye mer. Du finner oss på Youtube, Facebook, Instagram, TikTok.
        Du kan også følge med på våres egen podcast."
          paragraph2="Sjekk ut våre produkter på Shopify, vi har unike produkter fra alle våre serier."
          images={merchImageArray}
          link="https://loff.shop/"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;

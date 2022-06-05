import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "./api";
import convertImageUrl from "../functions/convertImageUrl";
import Wrapper from "./layout/Wrapper";

function Merch() {
  const [merch, setMerch] = useState<any>([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    async function fetchMerchData() {
      try {
        const query = `?query=*[_type == "merchdata"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setMerch(data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    fetchMerchData();
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="contentBlock-merch-wrapper">
      <Wrapper>
        <div className="contentBlock-merch">
          <div className="contentBlock-merch__text">
            <h2>Merch</h2>
            <p>{merch[0].excerpt}</p>
            <h2>Shopify</h2>
            <p>{merch[0].message}</p>
            <a href={`${merch[0].shoplink}`} className="cta-1">
              Shop
            </a>
          </div>
          <div className="contentBlock-merch__image-container">
            {merch[0].images.map((image: any, index: number) => (
              <img
                src={newBaseImageUrl + convertImageUrl(image.asset._ref)}
                key={index}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Merch;

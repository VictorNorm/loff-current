import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "../components/api";
import convertImageUrl from "../functions/convertImageUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "./layout/Wrapper";

interface DropdownData {
  boxHeading1: string;
  boxHeading2: string;
  boxHeading3: string;
  boxHeading4: string;
  boxHeading5: string;
  boxExcerpt1: string;
  boxExcerpt2: string;
  boxExcerpt3: string;

  images: ImageData[];
}
interface ImageData {
  asset: Asset;
}
interface Asset {
  _ref: string;
}

function Dropdown() {
  const [dropdownData, setDropdownData] = useState<DropdownData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    async function fetchBassene() {
      try {
        setIsLoading(true);
        const url = newBaseUrl + `?query=*[_type == "dropdown"]`;
        const response = await fetch(url);
        const data = await response.json();
        setDropdownData(data.result[0] as DropdownData);
      } catch (error) {
        setError("An error occured, try reloading the page.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchBassene();
  }, []);
  console.log(dropdownData);
  if (isLoading || !dropdownData) {
    return (
      <Wrapper>
        <div className="loader"></div>
      </Wrapper>
    );
  }
  if (error) {
    <Wrapper>{error}</Wrapper>;
  }
  return (
    <div className="dropdown">
      <div className="dropdown__top-container">
        <h5>Viktig fakta for å henge med</h5>
        <div
          className="dropdown__top-container__arrow"
          onClick={() => setIsActive(!isActive)}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={() =>
              function (event: any) {
                console.log(event.target + "asdasdas");
              }
            }
          />
        </div>
      </div>
      {isActive && (
        <div className="dropdown__container">
          <p>{dropdownData.boxHeading1}</p>
          <h6 className="heading--centered">{dropdownData.boxHeading2}</h6>

          <h6>{dropdownData.boxHeading3}</h6>
          <h6></h6>
          <p>{dropdownData.boxExcerpt1}</p>
          <img
            src={
              newBaseImageUrl +
              convertImageUrl(dropdownData.images[0].asset._ref)
            }
            alt=""
          />
          <div>
            <h6>{dropdownData.boxHeading4}</h6>
            <p>{dropdownData.boxExcerpt2}</p>
            <img
              src={
                newBaseImageUrl +
                convertImageUrl(dropdownData.images[1].asset._ref)
              }
              alt=""
            />
            <h6>{dropdownData.boxHeading5}</h6>
            <p>{dropdownData.boxExcerpt3}</p>
            <img
              src={
                newBaseImageUrl +
                convertImageUrl(dropdownData.images[2].asset._ref)
              }
              alt=""
            />
          </div>
        </div>
      )}
      <h5 id="dropdown--heading">Samarbeide?</h5>
      <p>
        Innhold publisert på LOFF er finansiert av spennnende, nytenkende
        aktører og merkevarer. Målet med disse samarbeidene er at det skal gi
        merverdi for alle parter – målgruppe, sponsorer og kanal. Dette gjøres
        ved å koble sponsorer opp til innholdet på en naturlig måte, og ved å
        sørge for at sponsoren til og med bidrar til at underholdningsverdien
        øker.
      </p>

      <p>
        Eksempler på samarbeid kan være å skrive inn et produkt eller en
        tjeneste i handlingen, produktplassering, tilgang til eksklusivt innhold
        for SoMe, Instagram takeover, konkurranser m.m
      </p>

      <p>
        Vi er bevisste vårt ansvar som en kanal som når ut til mange mennesker,
        og stiller derfor krav til våre samarbeidspartnere om at de skal ha
        gode, grunnleggende verdier på bunn.
      </p>
      <h5>Historie</h5>
      <p>
        I 2016 var Lucky View med på å starte det nettbaserte musikkmagasinet
        «Cliquemag» sammen med Gunnar Greve og Mathias Rødahl. Lucky View sin
        rolle var å produsere medieinnhold, og det var her «Enten/Eller» og
        «Skinny E» ble produsert og publisert for første gang.
      </p>
      <h5>Fremtid</h5>
      <p>
        Bassene i Loff kommer til å jobbe videre med å utvikle nye konsepter og
        produsere nytt innhold for å glede alle som ønsker å være med. Målet er
        å skape en uavhengig kanal full av grov underholdning.
      </p>
      <p>Av basser, for basser</p>
      <p>Xoxo</p>
    </div>
  );
}

export default Dropdown;

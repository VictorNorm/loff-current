import { useEffect } from "react";

function Graph(props: {
  age1: number;
  age2: number;
  age3: number;
  age4: number;
  age5: number;
  age6: number;
}) {
  useEffect(() => {
    const columnHeights = [
      props.age1,
      props.age2,
      props.age3,
      props.age4,
      props.age5,
      props.age6,
    ];
    const listItems = document.querySelectorAll(
      ".graph-container__item__column"
    );
    listItems.forEach((item: any, index: number) => {
      item.style.height = Math.ceil(6 * columnHeights[index]) + "px";
    });
  });
  return (
    <div className="graph-container">
      <div className="graph-container__indicator">
        {/* <ul>
          <li>50%</li>
          <li>25%</li>
          <li>0%</li>
        </ul> */}
        <p id="alder">Alder:</p>
      </div>
      <div className="graph-container__13-17 graph-container__item">
        <p>{props.age1}%</p>
        <div className="graph-container__item__column"></div>
        <p>13-17</p>
      </div>
      <div className="graph-container__18-24 graph-container__item">
        <p>{props.age2}%</p>
        <div className="graph-container__item__column"></div>
        <p>18-24</p>
      </div>
      <div className="graph-container__25-34 graph-container__item">
        <p>{props.age3}%</p>
        <div className="graph-container__item__column"></div>
        <p>25-34</p>
      </div>
      <div className="graph-container__35-44 graph-container__item">
        <p>{props.age4}%</p>
        <div className="graph-container__item__column"></div>
        <p>35-44</p>
      </div>
      <div className="graph-container__45-54 graph-container__item">
        <p>{props.age5}%</p>
        <div className="graph-container__item__column"></div>
        <p>45-54</p>
      </div>
      <div className="graph-container__55-64 graph-container__item">
        <p>{props.age6}%</p>
        <div className="graph-container__item__column"></div>
        <p>55+</p>
      </div>
    </div>
  );
}

export default Graph;

import React from "react";
import "./intermediate.scss";
import cooking from "../../../assets/image/cooking-5510047_640.png.svg";
import telephone from "../../../assets/svg/telephone/green_phone.svg";

function Intermediate() {
  return (
    <div className="intermediate">
      <div className="intermediate__head">
        <img src={cooking} alt="cooking" className="intermediate__head-img" />
        <h2 className="text-block__element-h2">
          The "Azerbaijani Cuisine" restaurant is a place where taste
          preferences become reality.
        </h2>
      </div>

      <div className="text-block">
        <div className="text-block__texEl-1 ">
          Enjoy delicious dishes, a pleasant atmosphere and excellent service. A
          unique assortment that can satisfy even the most demanding gourmets:
          On the menu you will find exquisite dishes of Azerbaijani cuisine,
          fried dishes, sandwiches, burgers, as well as both vegetarian and
          vegan dishes.
        </div>

        <div className="text-block__texEl-2">
          Moreover, every day from 17:30 to 20:00, you can choose our FUD EPPI
          AUAR formula: cocktail, cheese platter, and potatoes for 12&#8380; per
          person.
        </div>

        <div className="text-block__texEl-3">
          Book a table right now and discover the true culinary pleasure at
          “Azerbaijani Cuisine” restaurant!
        </div>
      </div>
      <div className="connect-with-us">
        <img src={telephone} alt="telephone" className="connect-img" />
        <div className="connect-numb-text">XX - XX - XXX XX XX</div>
      </div>
    </div>
  );
}

export default Intermediate;

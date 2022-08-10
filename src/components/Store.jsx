import React, { useState } from "react";
import propTypes from "prop-types";
import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./cardsView/CardsView.jsx";
import ListView from "./listView/ListView.jsx";

function Store(props) {
  const [icon, setIcon] = useState("view_list");
  const { products } = props;

  const handlerToggle = () => {
    icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
  };

  return (
    <div>
      <div>
        <IconSwitch icon={icon} onSwitch={handlerToggle} />
        {icon === "view_list" ? (
          <ListView items={products} />
        ) : (
          <CardsView cards={products} />
        )}
      </div>
    </div>
  );
}

Store.propTypes = {
  products: propTypes.array,
};
export default Store;

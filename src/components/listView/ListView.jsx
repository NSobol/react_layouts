import React from "react";
import propTypes from "prop-types";
import ShopItem from "./ShopItem.jsx";
import s from "./ListView.module.css";

function ListView(props) {
  const { items } = props;

  return (
    <div className={s.container}>
      {items.map((item, index) => {
        return <ShopItem item={item} key={index} />;
      })}
    </div>
  );
}

ListView.propTypes = {
  items: propTypes.array.isRequired,
};

export default ListView;

import React from "react";
import propTypes from "prop-types";
import CardItem from "./CardItem.jsx";
import styles from "./CardsView.module.css";

function CardsView({ cards }) {
  return (
    <div className={styles["container"]}>
      {cards.map((card, index) => {
        return <CardItem item={card} key={index} />;
      })}
    </div>
  );
}

CardsView.propTypes = {
  items: propTypes.array,
};
export default CardsView;

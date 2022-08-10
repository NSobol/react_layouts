import React from "react";
import f from "./CardsView.module.css";

function CardItem(props) {
  const { name, price, color, img } = props.item;
  return (
    <article className={f.card}>
      <div className={f.card__name}>{name}</div>
      <div className={f.card__color}>{color}</div>
      <div className={f.card__image}>
        <img src={img} alt={name} />
      </div>
      <div className={f.card__footer}>
        <div className={f.card__price}>${price}</div>
        <button className={f.card__btn}>ADD TO CART </button>
      </div>
    </article>
  );
}

export default CardItem;

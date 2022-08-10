import React from "react";
import s from "./ListView.module.css";

function ShopItem(props) {
  const { name, price, color, img } = props.item;
  return (
    <article className={s.card}>
      <div className={s.card__image}>
        <img src={img} alt={name} />
      </div>
      <div className={s.card__name}>{name}</div>
      <div className={s.card__color}>{color}</div>
      <div className={s.card__price}>${price}</div>
      <div className={s.card__btn}>
        <button className={s.button}>ADD TO CART </button>
      </div>
    </article>
  );
}

export default ShopItem;

import styles from "./Shop.module.css";
import { ShopItem } from "./types";

type Props = {
  item: ShopItem;
};

export default function Item({ item }: Props) {
  const { name, description, price } = item;
  return (
    <div className={styles.shop__item}>
      <div className={styles.shop__item__name}>{name}</div>
      <div className={styles.shop__item__description}>{description}</div>
      <div className={styles.shop__item__price}>{price}</div>
    </div>
  );
}

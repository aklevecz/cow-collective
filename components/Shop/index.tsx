import Item from "./Item";
import styles from "./Shop.module.css";
import { ShopItem } from "./types";

type Props = {
  items: ShopItem[];
};

export default function Shop({ items }: Props) {
  return (
    <div className={styles.shop__container}>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </div>
  );
}

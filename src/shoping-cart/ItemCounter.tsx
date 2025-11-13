import { useState, type CSSProperties } from "react";

// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";
interface Props {
  name: string;
  quantity?: number;
}

const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setcount] = useState(quantity);

  const handleAdd = () => {
    setcount(count + 1);
  };
  const handleSubtract = () => {
    if (count === 0) return;
    setcount(count - 1);
  };

  const spanStyle: CSSProperties = {
    color: count === 0 ? "red" : "black",
  };

  return (
    // <section className="item-row">
    <section className={styles.itemRow}>
      {/* <span className="item-text" style={spanStyle}> */}
      <span className={styles["item-text"]} style={spanStyle}>
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span> {count} </span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};

export default ItemCounter;

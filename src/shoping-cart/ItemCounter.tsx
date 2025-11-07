interface Props {
  name: string;
  count: number;
}

const ItemCounter = ({ name, count }: Props) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <span
        style={{
          width: 150,
        }}
      >
        {name}
      </span>
      <button>+1</button>
      <span> {count} </span>
      <button>-1</button>
    </section>
  );
};

export default ItemCounter;

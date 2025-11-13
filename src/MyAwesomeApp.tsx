import type { CSSProperties } from "react";

const nombre = "Ricardo";
const apellido = "Delgado";

const favorriteGames = ["Smash", "GOW", "Uncharted"];
const activo = true;

const address = {
  street: "123 Main St",
  city: "Metropolis",
  country: "USA",
};

const myStyle: CSSProperties = {
  color: "blue",
  fontSize: "20px",
};

export function MyAwesomeApp() {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-title">{nombre}</h1>
      <h3>{apellido}</h3>

      <p className="myclass">{favorriteGames.join(",")}</p>
      <p> {2 + 2} </p>

      <h1>{activo ? "Activo" : "Inactivo"}</h1>

      <p style={myStyle}>{JSON.stringify(address)}</p>
    </div>
  );
}

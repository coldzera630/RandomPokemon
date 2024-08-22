import "./Randompokermon.css";
export default function Randompokemon() {
  const pokenum = Math.floor(Math.random() * 151) + 1;
  const p = pokenum;
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    pokenum +
    ".png";
  return (
    <div className="PIKACHU">
      <h1>Pokemon # {pokenum} </h1>
      <img src={url} alt="" />
    </div>
  );
}

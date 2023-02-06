import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      {pokemon.map((p) => (
        <div
          className="border-2 bg-black text-white p-3 w-48 rounded-xl shadow-xl hover:bg-red-700 hover:text-white"
          key={p}
        >
          {p}
        </div>
      ))}
    </div>
  );
}

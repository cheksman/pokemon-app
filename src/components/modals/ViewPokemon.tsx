import React from "react";
import { Pokemon } from "../../interfaces/Pokemons";

type Props = {
  open: boolean;
  handleClose: () => void;
  data: null | Pokemon;
};

const ViewPokemonModal: React.FC<Props> = ({ open, handleClose, data }) => {
  if (!open) {
    return null;
  }

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-40">
      <section className="w-11/12 md:w-3/5 max-h-full bg-white rounded overflow-y-scroll p-8">
        <section className="flex h-12 items-center justify-end px-6">
          <div className="h-8 w-12 bg-zinc-500 shadow-inner  rounded p-4 flex items-center justify-center ">
            <p
              role="button"
              onClick={handleClose}
              className="text-white text-center text-lg"
            >
              ESC
            </p>
          </div>
        </section>
        <section className="h-full w-full flex justify-center items-center bg-fixed rounded -mt-12 bg-contain bg-top bg-modal">
          <img
            src={data?.sprites.front_default}
            alt={data?.name}
            className="z-0 w-28 h-28 rounded-full"
          />
        </section>
        <section className="grid grid-cols-3 gap-2">
          <section>
            <h4 className="font-black text-orange-500">Species</h4>
            {data?.species?.name}
          </section>
          <section>
            <h4 className="font-black text-orange-500">Stats</h4>
            {data?.stats.map((stat) => (
              <p>
                {stat.stat.name}: {stat.base_stat} + {stat.effort}
              </p>
            ))}
          </section>
          <section>
            <h4 className="font-black text-orange-500">Types</h4>
            {data?.types?.map((type) => (
              <p>{type.type.name}</p>
            ))}
          </section>
          <section>
            <h4 className="font-black text-orange-500">Weights</h4>
            {data?.weight}g
          </section>
          <section className="col-span-2">
            <h4 className="font-black text-orange-500">Moves</h4>
            {data?.moves?.map((move) => (
              <span>{move.move.name}, </span>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ViewPokemonModal;

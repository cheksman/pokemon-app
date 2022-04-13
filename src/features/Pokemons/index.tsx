import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Input from "../../components/basics/Input";
import ViewPokemonModal from "../../components/modals/ViewPokemon";
import DisplayBox from "../../components/structures/DisplayBox";
import Pagination from "../../components/structures/Pagination";
import { SpinnerIcon } from "../../components/svg/Icons";
import { Pokemon } from "../../interfaces/Pokemons";
import { SliceStatus } from "../../interfaces/SliceStatus";
import { getPagedPokemons } from "../../services/Pokemon";

const Pokemons = () => {
  const dispatch = useDispatch();
  const [activeData, setActiveData] = useState<null | Pokemon>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const pokemons = useAppSelector(
    (state: RootState) => state.pokemons.pokemons
  );
  const status = useAppSelector((state: RootState) => state.pokemons.status);
  const [pageNumber, setPageNumber] = useState(1);
  const count = useAppSelector((state: RootState) => state.pokemons.count);

  const totalPages = Math.ceil(count / 16);
  useEffect(() => {
    dispatch(getPagedPokemons(pageNumber));
  }, [dispatch, pageNumber]);

  if (status === SliceStatus.pending)
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <SpinnerIcon height={60} width={60} />
      </section>
    );
  return (
    <section className="h-full w-full p-4 ">
      {activeData && (
        <ViewPokemonModal
          open={showModal}
          handleClose={() => {
            setShowModal(!showModal)
            setActiveData(null)
          }}
          data={activeData}
        />
      )}
      <section className="mx-auto w-1/3">
        <Input
          name="search"
          type="text"
          placeholder="Pikachu"
          className="font-black text-center rounded-full h-16 border-2 border-solid text-sm text-gray-600 focus:border-opacity-0 border-orange-400 placeholder-gray-300 p-2 min-w-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
        />
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {pokemons.map((pokemon) => (
          <DisplayBox
            title={pokemon?.name}
            image={pokemon?.sprites?.front_default}
            altText={pokemon?.name}
            onClick={() => {
              setActiveData(pokemon);
              setShowModal(!showModal);
            }}
          />
        ))}
      </section>
      <section className="mt-4">
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          maxNumber={totalPages}
        />
      </section>
    </section>
  );
};

export default Pokemons;

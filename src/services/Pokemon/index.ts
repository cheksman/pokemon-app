import { createAsyncThunk } from "@reduxjs/toolkit";
import { Methods } from "../../interfaces/HttpTypes";
import { Pokemon, PokemonTotalResponse } from "../../interfaces/Pokemons";
import { callPlainApi } from "../api/apiConfig";

export const getPagedPokemons = createAsyncThunk(
  "pokemon/getPagedPokemons",
  async ( pageNumber: number, { rejectWithValue }) => {
    const offset = pageNumber * 16
    try {
      const response = await callPlainApi<PokemonTotalResponse>(
        `/pokemon?limit=16&offset=${offset}`,
        null,
        Methods.get
      );
      const currentPokemons = await Promise.all(
        response.results.map(async (poke) => {
          const url = poke.url.split("v2");
          const res = await callPlainApi<Pokemon>(url[1], null, Methods.get);
          return res;
        })
      );
      const result = {
        pokemons: currentPokemons,
        count: response.count,
      };
      return result;
    } catch (err) {
      console.log(err);
      return rejectWithValue("There was an error fetching this resource");
    }
  }
);

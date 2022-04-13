import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import {  Pokemon, PokemonState } from '../../interfaces/Pokemons'
import { SliceStatus } from '../../interfaces/SliceStatus'
import { getPagedPokemons } from '../../services/Pokemon'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [] as Pokemon[],
    count: 0,
    status: SliceStatus.idle
  },
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<PokemonState>) =>
  builder
    .addCase(getPagedPokemons.pending, (state) => ({
      ...state,
      status: SliceStatus.pending
    }))
    .addCase(getPagedPokemons.fulfilled, (state, action) => ({
      ...state,
      pokemons: action.payload.pokemons,
      count: action.payload.count,
      status: SliceStatus.fulfilled
    }))
    .addCase(getPagedPokemons.rejected, (state, action) => ({
      ...state,
      status: SliceStatus.rejected
    }))
    .addDefaultCase(state => state),
})


export const {
    name: pokemonReducerName,
    reducer: pokemonReducer
} = pokemonSlice
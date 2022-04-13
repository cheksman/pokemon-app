import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { PokemonState } from '../../interfaces/Pokemons'
import { getPokemonsByPage } from './pokemonActions'

// Define the initial state using that type
const initialState: PokemonState = {
  pokemons: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<PokemonState>) =>
  builder
    .addCase(getPokemonsByPage, (state, action) => ({
      ...state,
    }))
    .addDefaultCase(state => state),
})


export const {
    name: pokemonReducerName,
    reducer: pokemonReducer
} = pokemonSlice
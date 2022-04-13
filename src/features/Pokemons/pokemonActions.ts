import {createAction} from '@reduxjs/toolkit'

export const getPokemonsByPage = createAction<{pageNumber: string}>("GetPokemonsByPage")
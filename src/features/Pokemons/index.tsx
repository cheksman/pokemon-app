import React from "react"
import Input from "../../components/basics/Input";
import DisplayBox from "../../components/structures/DisplayBox";

const Pokemons = () => {

    return (
        <div className="h-full w-full p-4">
            <Input name="search" type="text" placeholder="Pikachu" />
            <DisplayBox title="Pickachu" description="This is pokemon pickachu" image="" />
            <p>This is a pokemon page</p>
        </div>
    )
}

export default Pokemons;
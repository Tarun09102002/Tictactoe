import React, { useState } from 'react'

function InputCustom({ placeholder, player, setPlayer }) {

    return (
        <input onChange={(event) => {
            setPlayer((prev) => {
                return { ...prev, name: event.target.value }
            })
        }} value={player.name} className="input-box  text-center font-heading font-medium text-white my-5 focus:placeholder-transparent placeholder-white py-2 text-3xl bg-transparent outline-none  border-b-4 w-full border-b-white" placeholder={`${placeholder}`}></input>
    )
}

export default InputCustom
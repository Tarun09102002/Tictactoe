import React from 'react'

function Button(props) {
    return (
        <button className={`text-white ${props.customClass} px-11 text-lg text-center py-3 my-3 rounded-md drop-shadow-md`} >{props.text}</button>
    )
}

export default Button
import React from 'react'

function Box(props) {
    return (
        <div className={`text-9xl font-heading flex ${props.borderClass} h-full w-1/3 justify-center items-center hover:cursor-pointer`} onClick={async () => {
            await props.clickedRowInd(props.row, props.col);
            // props.playerWon();
        }}>{props.value !== -1 ? props.value : ""}</div>
    )
}

export default Box
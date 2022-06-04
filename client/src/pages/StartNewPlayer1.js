import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ButtonCustom'
import InputCustom from '../components/InputCustom'
import { player1Context } from '../App'
import { player2Context } from '../App'
import { io } from 'socket.io-client'
import { Navigate, useNavigate } from 'react-router-dom'


const StartNewPlayer1 = () => {
    let navigate = useNavigate();
    const { player1, setPlayer1 } = useContext(player1Context);
    const { player2, setPlayer2 } = useContext(player2Context);


    return (
        <div className='base bg-background h-screen flex justify-center items-center'>
            <div className="container flex w-1/3 justify-center flex-col">
                <InputCustom player={player1} setPlayer={setPlayer1} placeholder="Player 1 Name..."></InputCustom>
                <InputCustom player={player2} setPlayer={setPlayer2} placeholder="Player 2 Name..."></InputCustom>
                <div className="buttons-container flex flex-row justify-around mt-3">
                    <Link to={"/"} className='w-1/3'>
                        <Button customClass='bg-button-light text-text-lightButton w-full' text="Back"></Button>
                    </Link>
                    <Link to={"/tictactoe"} className='w-1/3'>
                        <button className={`text-white bg-button-dark w-full px-11 text-lg text-center py-3 my-3 rounded-md drop-shadow-md`}>Let's Go</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default StartNewPlayer1
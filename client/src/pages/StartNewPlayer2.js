import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ButtonCustom'
import InputCustom from '../components/InputCustom'
import { player2Context } from '../App'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:3001')

function StartNewPlayer2() {
    const { player2, setPlayer2 } = useContext(player2Context)
    const [room, setRoom] = useState("");
    const navigate = useNavigate();
    const getInputValue = (event) => {
        setRoom(event.target.value);
    }

    const joinRoom = () => {
        console.log(room)
        // if (room !== "") {
        socket.emit("join_room_player2", room);
        // }
    }

    useEffect(() => {
        socket.on("recieve_status", (data) => {
            console.log(data);
        })

    }, [socket])



    return (
        <div className='base bg-background h-screen flex justify-center items-center'>
            <div className="container flex w-1/3 justify-center flex-col">
                <InputCustom player={player2} setPlayer={setPlayer2} placeholder="Your Name..."></InputCustom>
                {/* <InputCustom placeholder="Room ID..."></InputCustom> */}
                <input onChange={getInputValue} className="input-box  text-center font-heading font-medium text-white my-5 focus:placeholder-transparent placeholder-white py-2 text-3xl bg-transparent outline-none  border-b-4 w-full border-b-white" placeholder='Room Id..'></input>
                <div className="buttons-container flex flex-row justify-around mt-3">
                    <Link to={"/"} className='w-1/3'>
                        <Button customClass='bg-button-light text-text-lightButton w-full' text="Back"></Button>
                    </Link>
                    {/* <Link className='w-1/3' to={"/"}> */}
                    <button className={`text-white bg-button-dark w-1/3 px-11 text-lg text-center py-3 my-3 rounded-md drop-shadow-md`} onClick={() => joinRoom()}>Let's Go</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default StartNewPlayer2
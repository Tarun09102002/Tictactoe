import React from 'react'
import Button from '../components/ButtonCustom'
import { Link } from "react-router-dom";

function Home() {

    function handleStartNew() {
        alert("here");
    }


    return (
        <>
            <div className="background flex font-heading flex-col justify-center items-center bg-background h-screen">
                <header >
                    <h3 className='text-3xl text-white '>Tic Tac Toe</h3>
                </header>
                <div className="buttons font-sans  flex flex-col items-center mt-5 w-full">
                    <Link to={"/playerinfo"} className="w-full flex justify-center">
                        <Button customClass="bg-button-dark w-1/4" text="Start New"></Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home
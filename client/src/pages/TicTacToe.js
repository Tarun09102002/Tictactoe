import React, { useState, useEffect, useContext } from 'react'
import Box from '../components/Box'

// import { useState } from 'react/cjs/react.production.min';
import { player1Context, player2Context } from '../App';
function TicTacToe() {
    const [tictactoe, setTictactoe] = useState([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
    const [isX, setIsX] = useState(true);
    const [player1Won, setPlayer1Won] = useState(-1);
    const [score, setScore] = useState([0, 0])
    const { player1, setPlayer1 } = useContext(player1Context)
    const { player2, setPlayer2 } = useContext(player2Context)
    const player1Name = player1.name !== "" ? player1.name : "Player 1";
    const player2Name = player2.name !== "" ? player2.name : "Player 2";

    if (player1.name === "") {
        setPlayer1((prev) => {
            return { ...prev, name: "Player 1" }
        });
    }

    const playerWon = () => {

        if (tictactoe[0][0] === tictactoe[1][1] && tictactoe[1][1] === tictactoe[2][2] && tictactoe[0][0] !== -1) {
            setPlayer1Won(tictactoe[0][0] === "X" ? 1 : 2);
        }
        else if (tictactoe[0][2] === tictactoe[1][1] && tictactoe[1][1] === tictactoe[2][0] && tictactoe[0][2] !== -1) {
            setPlayer1Won(tictactoe[0][2] === "X" ? 1 : 2);
        }
        else {
            for (let index = 0; index < 3; index++) {
                if (tictactoe[index][0] === tictactoe[index][1] && tictactoe[index][1] === tictactoe[index][2] && tictactoe[index][0] !== -1) {
                    setPlayer1Won(tictactoe[index][0] === "X" ? 1 : 2);
                }
                else if (tictactoe[0][index] === tictactoe[1][index] && tictactoe[1][index] === tictactoe[2][index] && tictactoe[0][index] !== -1) {
                    setPlayer1Won(tictactoe[0][index] === "X" ? 1 : 2);
                }
            }
        }
    }

    const checkDraw = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tictactoe[i][j] === -1) {
                    return;
                }
            }
        }
        setPlayer1Won(0);
    }

    const clickedRowInd = (row, col) => {
        if (tictactoe[row][col] === -1 && player1Won === -1) {
            setTictactoe((prev) => {
                return prev.map((rowIter, rowInd) => {
                    return rowIter.map((colIter, colInd) => {
                        if (rowInd === row && colInd === col) {
                            if (isX) {
                                return "X";
                            }
                            else {
                                return "O";
                            }
                        }
                        return colIter;
                    })
                })
            })
            setIsX(!isX);
        }
    }
    let board = tictactoe.map((row, rowInd) => {
        return row.map((col, colInd) => {
            let txtClass = "";
            txtClass += rowInd == 0 ? "border-b-4 " : "";
            txtClass += rowInd == 2 ? "border-t-4 " : "";
            txtClass += colInd == 1 ? "border-l-4 border-r-4 " : "";
            return <Box key={`${rowInd} ${colInd}`} row={rowInd} col={colInd} clickedRowInd={clickedRowInd} value={tictactoe[rowInd][colInd]} borderClass={txtClass} playerWon={playerWon}></Box>
        })
    }).map((elem, ind) => {
        return (
            <div className="row-1 flex justify-around w-full h-1/3" key={ind}>
                {elem.map((val) => val)}
            </div>
        )
    })
    useEffect(async () => {
        await playerWon();
        checkDraw();
    }, [isX])

    useEffect(async () => {
        console.log(score)
        if (player1Won !== -1) {
            setScore((prev) => {
                return prev.map((elem, ind) => {
                    if (ind === 0 && (player1Won === 1 || player1Won === 0)) {
                        return elem + 1;
                    }
                    else if (ind === 1 && (player1Won === 2 || player1Won === 0)) {
                        return elem + 1;
                    }
                    return elem;
                })
            })
            async function timeout(delay) {
                return new Promise(res => setTimeout(res, delay));
            }
            await timeout(1500);
            setPlayer1Won(-1);
            setTictactoe([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
            console.log(score)
            if (score[0] === 0 && score[1] === 0)
                // sendScore();
                console.log(score)
        }
    }, [player1Won])

    function getMessage() {
        if (player1Won === -1) {
            if (isX) {
                return `${player1.name}'s Turn`
            }
            else {
                return `${player2.name}'s Turn`
            }
        }
        else {
            if (player1Won === 0) {
                return "Game Draw";
            }
            else if (player1Won === 1) {
                return `${player1.name} Wins`;
            }
            else {
                return `${player2.name} Wins`;
            }
        }
    }

    return (
        <div className='background bg-background h-screen flex flex-col justify-evenly items-center'>
            <div className="score text-white font-heading text-5xl">{getMessage()}</div>
            <div className="container h-[400px] w-[400px] flex flex-col justify-evenly text-white">
                {board}
            </div>
            <div className="score w-[400px] flex flex-col items-center text-white text-center">
                <div className="text-3xl w-full border-b-4 border-b-white pb-5">Score Board</div>
                <div className="flex flex-row w-full justify-evenly text-2xl">
                    <div className="player1 w-1/2 border-r-4 border-r-white py-5">
                        <div>{player1.name}</div>
                        <div>{score[0]}</div>
                    </div>
                    <div className="player2 w-1/2 py-5">
                        <div>{player2.name}</div>
                        <div>{score[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe
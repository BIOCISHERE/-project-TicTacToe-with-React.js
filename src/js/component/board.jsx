import React, { useState } from "react";
import Square from "./square.jsx";

const Board = () => {
    function whoWon(square){
        const winnerPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < winnerPatterns.length; i++){
            const [a, b, c] = winnerPatterns[i]

            if(square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
        }
        return null
    }

    const [square, setSquare] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const [menu, setMenu] = useState(true)

    const switchValue = (i) =>{
        if(whoWon(square) || square[i]){
            return
        }

        square[i] = isX ? 'X' : 'O'
        setSquare(square)
        setIsX(!isX)
    }

    const winner = whoWon(square)
    let status

    if(winner){
        status = `Winner: ${winner}`
    
    } else {
        status = `Next: ${isX ? 'X' : 'O'}`
    }

    const restartSquare = () => {
        setIsX(true)
        setSquare(Array(9).fill(null))
    }

	return menu ? (
        <div>
            <h3 className="text-white mt-3">Pick A weapon</h3>
            <div className="startMenu mt-5 p-5">
                <h4 className="text-white mb-5">CHOOSE YOUR WEAPON</h4>
                <span className="text-white">THE X TEAM</span><span className="text-white ms-5 me-5">V/S</span><span className="text-white">THE O TEAM</span><br />
                <input type="text" className="me-2" placeholder="player 1 username" />
                <input type="text" className="ms-2" placeholder="player 2 username" /><br />
                <button type="button" className="btn btn-success mt-5" onClick={() => setMenu(false)}>Start game!!</button>
            </div>
        </div>
    ) :
    (
		<div className="container ">
            <h2 className="text-white">{status}</h2>
			<button type="button" className="btn bg-warning mb-3" onClick={restartSquare}>Start Over</button>
            <div className="row ">
                <div className="col d-flex justify-content-center">
                    <Square className={'square t1'} value={square[0]} onClick={() => switchValue(0)} />
                    <Square className={'square t2'} value={square[1]} onClick={() => switchValue(1)} />
                    <Square className={'square t3'} value={square[2]} onClick={() => switchValue(2)} />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Square className={'square m1'} value={square[3]} onClick={() => switchValue(3)} />
                    <Square className={'square m2'} value={square[4]} onClick={() => switchValue(4)} />
                    <Square className={'square m3'} value={square[5]} onClick={() => switchValue(5)} />
                </div>
            </div> 
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Square className={'square b1'} value={square[6]} onClick={() => switchValue(6)} />
                    <Square className={'square b2'} value={square[7]} onClick={() => switchValue(7)} />
                    <Square className={'square b3'} value={square[8]} onClick={() => switchValue(8)} />
                </div>
            </div> 
            <button type="button" className="btn btn-danger mt-3" onClick={() => setMenu(true)}>Go to menu</button>            
        </div>
	);
};

export default Board;
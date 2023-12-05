import { useState , useEffect} from "react";
import ConfigBoard from "./configboard"
import Board from "./board";

export default function Game(){
    const [amountUser,setAmountUser] = useState(1000);
    const [start,setStart] = useState(false);
    const [board,setBoard] = useState(Array(25).fill(null))

    function handleStart(){
        setStart(!start);
    }

    function handleBoard(newBoard){
        setBoard(newBoard);
    }

    return(
        <>
            <ConfigBoard amountUser={amountUser} start={start} handleStart={handleStart} handleBoard={handleBoard}/>
            <Board board={board} start={start} handleStart={handleStart}/>
        </>
    )
}
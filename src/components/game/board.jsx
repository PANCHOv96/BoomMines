import Button from "../buttons/button"
import {DataTypeBoard} from '../../logics/constants'
import { useState } from "react";

export default function Board({board,start,handleStart}){
    const [found,setFound] = useState( Array(25).fill(null))

    function handleClick(e){
        e.preventDefault();
        if(board[e.target.id] == DataTypeBoard.diamond) return 
        handleStart(false)
    }

    return(
        <>
            {board.map( (x,index) => {
                return(
                    <>
                        <Button callback={handleClick} key={index}>
                            <p id={index}>X - {x}</p>
                        </Button>
                    </>
                )
            })}
        </>
    )
}
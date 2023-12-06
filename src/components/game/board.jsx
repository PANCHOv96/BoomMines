import Button from "../buttons/button"
import { DataTypeBoard } from '../../logics/constants'
import { MineAleatory, searchRemainingDiamond , searchMines} from '../../logics/logics'
import { useState ,useEffect} from "react";

export default function Board({mines,start,handleWinner,handleFoundDiamond}){
    const [board,setboard] = useState(Array(25).fill().map(()=>({
        type: null,
        check: false
    })))

    function handleClick(e){
        e.preventDefault();
        if(start && board[e.target.id].check == false){
            handleFoundDiamond();
            if(!searchMines(board,e.target.id)){
                let newBoard = [...board]
                newBoard[e.target.id].check = true
                setboard(newBoard);
                if(searchRemainingDiamond(board)){
                    handleWinner(true);
                }
            }else{
                handleWinner(false)
            };
        }
    }

    useEffect(()=>{
        if(start){
            let newBoard = MineAleatory(25,mines)
            setboard(newBoard);
        }
    },[start]);

    return(
        <>
            {console.log('Board')}
            {board.map( (x,index) => {
                return(
                    <>
                        <Button callback={handleClick} key={x}>
                            <p id={index}>X - {start && x.type }</p>
                        </Button>
                    </>
                )
            })}
        </>
    )
}
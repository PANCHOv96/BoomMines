import Button from "../buttons/button"
import { MineAleatory, searchRemainingDiamond , searchMines} from '../../logics/logics'
import { useState ,useEffect} from "react";
import { DataTypeBoard } from "../../logics/constants";

export default function Board({mines,start,handleWinner,handleFoundDiamond}){
    const [board,setboard] = useState(Array(25).fill().map(()=>({
        type: null,
        check: false
    })))

    function handleClick(e){
        e.preventDefault();
        if(start && board[e.target.id].check == false){
            let newBoard = [...board]
            newBoard[e.target.id].check = true
            setboard(newBoard);
            if(!searchMines(newBoard,e.target.id)){
                handleFoundDiamond();
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
            <div className="grid grid-5 board">
                {board.map( (x,index) => {
                    return(
                        <Button callback={handleClick} key={index}>         
                            <span className="Emoji" id={index}>{
                                !x.check ? DataTypeBoard.stone :
                                x.type == DataTypeBoard.mine ?  DataTypeBoard.mine : DataTypeBoard.diamond
                            }</span>
                        </Button>
                    )
                })}
            </div>
        </>
    )
}


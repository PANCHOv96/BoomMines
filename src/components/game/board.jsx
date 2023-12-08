import Button from "../buttons/button"
import { MineAleatory, searchRemainingDiamond , searchMines} from '../../logics/logics'
import { useState ,useEffect} from "react";
import Diamante from '../../assets/Diamante.svg'
import Diamante2 from '../../assets/Diamante2.svg'
import Mine from '../../assets/mine2.svg'
import { DataTypeBoard } from "../../logics/constants";

export default function Board({mines,start,handleWinner,handleFoundDiamond}){
    const [board,setboard] = useState(Array(25).fill().map(()=>({
        type: null,
        check: false
    })))

    function handleClick(e){
        e.preventDefault();
        if(start && board[e.target.id].check == false){
            handleFoundDiamond();
            let newBoard = [...board]
            newBoard[e.target.id].check = true
            setboard(newBoard);
            if(!searchMines(newBoard,e.target.id)){
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

    function handleSVG({check,type}){
        if (!check) return Diamante
        return type == DataTypeBoard.diamond ? Diamante2 : Mine ;
    }

    return(
        <>
            {console.log('Board')}
            <div className="grid grid-5">
            {board.map( (x,index) => {
                return(
                        <Button callback={handleClick} key={index}>
                            <img src={handleSVG(x)} alt="" className="imgBoard" id={index}/>
                        </Button>
                )
            })}
            </div>
        </>
    )
}
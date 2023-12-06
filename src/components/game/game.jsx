import { useState , useEffect} from "react";
import ConfigBoard from "./configboard"
import Board from "./board";
import { calculatePrize } from '../../logics/logics'

export default function Game(){
    const [amountUser,setAmountUser] = useState(1000);
    const [start,setStart] = useState(false);
    const [mines,setMines] = useState(1);
    const [winner,setWinner] = useState(null);
    const [foundDiamond,setFoundDiamond] = useState(0);
    const [amountBet,setAmountBet] = useState(1);

    function handleStartGame(mines,amountBet){
        setMines(mines)
        setStart(true);
        setFoundDiamond(0)
        setWinner(null)
        setAmountBet(amountBet)
        let newAmount = amountUser - amountBet;
        setAmountUser(newAmount)
    }

    function handleWinner(result){
        let newStart = !start
        setStart(newStart);
        setWinner(result)
    }

    function handleFoundDiamond(){
        let ac =  foundDiamond + 1
        setFoundDiamond(ac)
    }

    useEffect(()=>{
        if(winner != null){
            let result = calculatePrize(mines,foundDiamond) * amountBet
            console.log(result)
            let total = result + amountUser
            setAmountUser(total);
        }
        // if(winner){
        //     console.log('GANOOOOO')
        //     alert('GANASTE')
        // }else{
        //     console.log('PERDISTE')
        //     alert('SUERTE EN LA PROX')
        // }
    },[winner]);

    return(
        <>
            {console.log('GAME')}
            <ConfigBoard amountUser={amountUser} start={start} handleStartGame={handleStartGame} handleWinner={handleWinner}/>
            <Board mines={mines} start={start} handleWinner={handleWinner} handleFoundDiamond={handleFoundDiamond}/>
        </>
    )
}
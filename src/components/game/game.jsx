import { useState , useEffect} from "react";
import ConfigBoard from "./configboard"
import Board from "./board";
import Info from "./info";
import WinnerModal from "../winnerModal";
import { calculatePrize } from '../../logics/logics'


export default function Game(){
    const [amountUser,setAmountUser] = useState(1000);
    const [start,setStart] = useState(false);
    const [mines,setMines] = useState(1);
    const [winner,setWinner] = useState(null);
    const [amountBet,setAmountBet] = useState(1);
    const [foundDiamond,setFoundDiamond] = useState(0);

    function handleStartGame(mines,amountBet){
        if(amountBet == 0 || amountUser < amountBet) return 
        setMines(mines)
        setStart(true);
        setFoundDiamond(0)
        setWinner(null)
        setAmountBet(amountBet)
        let newAmount = amountUser - amountBet;
        setAmountUser(parseFloat(newAmount.toFixed(2)))
    }

    function handleFoundDiamond(){
        let ac =  foundDiamond + 1
        setFoundDiamond(ac)
    }

    function handleWinner(result){
        setStart(false);
        setWinner(result)
    }

    function resetGame(){
        start == true ?? setStart(false)
        setWinner(null)
    }

    function cattle(){
        let result = winner ? calculatePrize(mines,foundDiamond) * amountBet : 0;
        console.log('RESULTADO',typeof result)
        return parseFloat(result.toFixed(2));
    }

    useEffect(()=>{
        if(winner != null){
            let result = cattle();
            console.log('Resultado',typeof result)
            let total = result + amountUser
            setAmountUser(total);
        }
    },[winner]);

    return(
        <div className="grid">
            <div className="pos-3">
                <ConfigBoard amountUser={amountUser} start={start} handleStartGame={handleStartGame} handleWinner={handleWinner}/>
            </div>
            <Board mines={mines} start={start} handleWinner={handleWinner} handleFoundDiamond={handleFoundDiamond}/>
            {start &&
                <div className="pos-2">
                    <Info mines={mines} diamonds={25-mines-foundDiamond}/>
                </div>
            }
            <WinnerModal winner={winner} cattle={cattle} reset={resetGame}/>
        </div>
    )
}
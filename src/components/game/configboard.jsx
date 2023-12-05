import { useState ,useEffect} from "react";
import Button from "../buttons/button";
import {MineAleatory} from '../../logics/logics'

export default function ConfigBoard({amountUser,start,handleStart,handleBoard}){
    const [mines,setMines] = useState(1);
    const [amount,setAmount] = useState(1);

    function handleInputRange(e){
        setMines(e.target.value)
    }
    function handleInputNumber(e){
        setAmount(e.target.value)
    }
    function handleMin(){
        if(start) return
        setAmount(1);
    }
    function handleDiv2(){
        if(start) return
        let newAmount = Math.round(amount / 2);
        setAmount(newAmount>0 ? newAmount : 1);
    }
    function handleX2(){
        if(start) return
        let newAmount = Math.round(amount * 2);
        setAmount(newAmount<=amountUser ? newAmount : amountUser);
    }
    function handleMax(){
        if(start) return
        setAmount(amountUser);
    }

    useEffect(()=>{
        if(start){
            let newBoard = MineAleatory(25,mines)
            handleBoard(newBoard)
        }
        return(()=>{
            console.log('LIMPIANDO TABLERO')
        })
    },[start]);

    return(
        <div className="ConfigBoard">
            <p>${amountUser} <span>Demo</span></p>
            <div>
                <label>Number of mines</label>
                <div>
                    {mines}
                    <input type="range"  min={1} max={24} step={1} value={mines} onChange={handleInputRange} disabled={start}/>
                </div>
            </div>
            <div>
                <label>Amount</label>
                <div>
                    <input type="number" min={1} pattern="^[0-9]+" value={amount} onChange={handleInputNumber} disabled={start}/>
                    <div>
                        <Button callback={handleMin}>
                            <a href="#">min</a>
                        </Button>
                        <Button callback={handleDiv2}>
                            <a href="#">/2</a>
                        </Button>
                        <Button callback={handleX2}>
                            <a href="#">x2</a>
                        </Button>
                        <Button callback={handleMax}>
                            <a href="#">max</a>
                        </Button>
                    </div>
                </div>
            </div>
            <Button callback={handleStart}>
                {!start ? 'START GAME' : 'STOP GAME'} 
            </Button>
        </div>
    )
}
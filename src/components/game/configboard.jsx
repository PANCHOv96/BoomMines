import { useState } from "react";
import Button from "../buttons/button"
import { DataTypeBoard } from "../../logics/constants";

export default function ConfigBoard({amountUser,start,handleStartGame,handleWinner}){
    const [minesInput,setMinesInput] = useState(1);
    const [amountInput,setAmountInput] = useState(1);

    function handleInputRange(e){
        e.preventDefault();
        setMinesInput(e.target.value)
    }
    function handleInputNumber(e){
        e.preventDefault();
        setAmountInput(e.target.value)
    }
    function handleMin(e){
        e.preventDefault();
        if(start) return
        setAmountInput(1);
    }
    function handleDiv2(e){
        e.preventDefault();
        if(start) return
        let newAmount = Math.round(amountInput / 2);
        setAmountInput(newAmount>0 ? newAmount : 1);
    }
    function handleX2(e){
        e.preventDefault();
        if(start) return
        let newAmount = Math.round(amountInput * 2);
        setAmountInput(newAmount<=amountUser ? newAmount : amountUser);
    }
    function handleMax(e){
        e.preventDefault();
        if(start) return
        setAmountInput(amountUser);
    }

    return(
        <div className="ConfigBoard">
            <p>${amountUser} <span>Demo</span></p>
            <div className="Input flex">
                <div>
                    <span className="Emoji">{DataTypeBoard.mine}</span>
                </div>
                <div>
                    <label>Number of mines</label>
                    <div className="flex">
                        {minesInput}
                        <input type="range"  min={1} max={24} step={1} value={minesInput} onChange={handleInputRange} disabled={start}/>
                    </div>
                </div>
            </div>
            <div className="Input">
                <label>Amount</label>
                <div>
                    <input type="number" min={0} pattern="^[0-9]+" value={amountInput} onChange={handleInputNumber} disabled={start}/>
                    <div className="flex center">
                        <Button callback={handleMin}>
                            <span>Min</span>
                        </Button>
                        <Button callback={handleDiv2}>
                            <span>/2</span>
                        </Button>
                        <Button callback={handleX2}>
                            <span>x2</span>
                        </Button>
                        <Button callback={handleMax}>
                            <span>Max</span>
                        </Button>
                    </div>
                </div>
            </div>
            <Button callback={() => {!start ? handleStartGame(minesInput,amountInput) : handleWinner(true)}}>
                <div className={`Input ${!start ? 'red' : 'white'}`}>
                        {!start ? 'START GAME' : 'STOP GAME'} 
                </div>
            </Button>
        </div>
    )
}
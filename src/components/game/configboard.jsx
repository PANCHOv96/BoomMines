import { useState } from "react";
import Button from "../buttons/button"
import Mine from '../../assets/mine.svg'

export default function ConfigBoard({amountUser,start,handleStartGame,handleWinner}){
    const [minesInput,setMinesInput] = useState(1);
    const [amountInput,setAmountInput] = useState(1);

    function handleInputRange(e){
        setMinesInput(e.target.value)
    }
    function handleInputNumber(e){
        setAmountInput(e.target.value)
    }
    function handleMin(){
        if(start) return
        setAmountInput(1);
    }
    function handleDiv2(){
        if(start) return
        let newAmount = Math.round(amountInput / 2);
        setAmountInput(newAmount>0 ? newAmount : 1);
    }
    function handleX2(){
        if(start) return
        let newAmount = Math.round(amountInput * 2);
        setAmountInput(newAmount<=amountUser ? newAmount : amountUser);
    }
    function handleMax(){
        if(start) return
        setAmountInput(amountUser);
    }

    return(
        <div className="ConfigBoard">
            {console.log('ConfigBoard')}
            <p>${amountUser} <span>Demo</span></p>
            <div className="Input flex">
                <div>
                    <img src={Mine} alt="Mine SVG" />
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
                            <a href="#">Min</a>
                        </Button>
                        <Button callback={handleDiv2}>
                            <a href="#">/2</a>
                        </Button>
                        <Button callback={handleX2}>
                            <a href="#">x2</a>
                        </Button>
                        <Button callback={handleMax}>
                            <a href="#">Max</a>
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
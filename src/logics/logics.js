import {DataTypeBoard , ComboWinner} from '../logics/constants'

// GENERA EL TABLERO CON LAS MINAS Y LOS DIAMANTES
export function MineAleatory(sizeArray,numMines){
    let Mines = Array(25).fill().map(()=>({
        type: null,
        check: false
    }))
    for(let i=0 ; i < numMines ; i++){
        ArrayWhitMines(sizeArray,Mines)
    }
    let newArray = Mines.map(x => {
        if(x.type == null){
            x.type = DataTypeBoard.diamond
        }
        return x
    })
    return newArray;
}

// GENERA UN ARREGLO CON LAS MINAS
function ArrayWhitMines(sizeArray,arraydata){
    let number = getRandomInt(sizeArray);
    if(arraydata[number].type == null){
        arraydata[number].type = DataTypeBoard.mine;
        return
    }
    ArrayWhitMines(sizeArray,arraydata)
}

// GENERA UN NUMERO ALEATORIO
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// BUSCAR DIAMANTES RESTANTES
export function searchRemainingDiamond(board){
    let remainingDiamond = board.filter( x => (x.type == DataTypeBoard.diamond && x.check == false))
    return remainingDiamond.length == 0 ?  true : false;
}

// BUSCAR MINAS
export function searchMines(board,index){
    return board[index].type == DataTypeBoard.mine ? true : false;
}

// CALCULAR PREMIO 
export function calculatePrize(mines,foundDiamond){
    return foundDiamond > 0 ? ComboWinner[mines][foundDiamond-1] : 0;
}

// console.log(MineAleatory(25,24));
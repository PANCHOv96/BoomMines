import {DataTypeBoard} from '../logics/constants'

// GENERA EL TABLERO CON LAS MINAS Y LOS DIAMANTES
export function MineAleatory(sizeArray,numMines){
    let Mines = Array(sizeArray).fill(null)
    for(let i=0 ; i < numMines ; i++){
        ArrayWhitMines(sizeArray,Mines)
    }
    let newArray = Mines.map(x => {
        if(x == null){
            x = DataTypeBoard.diamond
        }
        return x
    })
    return newArray;
}

// GENERA UN ARREGLO CON LAS MINAS
function ArrayWhitMines(sizeArray,data){
    let number = getRandomInt(sizeArray);
    if(data[number] == null){
        data[number] = DataTypeBoard.mine;
        return
    }
    ArrayWhitMines(sizeArray,data)
}

// GENERA UN NUMERO ALEATORIO
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

MineAleatory(25,4);
// console.log(DataTypeBoard)
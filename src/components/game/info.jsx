import { DataTypeBoard } from "../../logics/constants";

export default function Info({mines,diamonds}){
    return(
        <div className='flex Info'> 
            <div className='flex'>
                <span className="Emoji">{DataTypeBoard.mine}</span>
                <p>{mines}</p>
            </div>
            <div className='flex'>
                <span className="Emoji">{DataTypeBoard.diamond}</span>
                <p>{diamonds}</p>
            </div>
        </div>
    )
}
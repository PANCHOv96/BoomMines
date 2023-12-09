import Button from './buttons/button'

export default function WinnerModal({winner,cattle,reset}){
    if (winner === null) return null
    return(
        <div className='Winner-modal'>
            <span className={`${winner ? 'Winner' : 'Loser'}`}>{winner ? `GANASTE $ ${cattle()}`: 'PERDISTE'}</span>
            <Button callback={reset}>
                <div className='Input red'>CERRAR</div>
            </Button>
        </div>
    )
}
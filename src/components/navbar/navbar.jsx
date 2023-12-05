import Moon from '../../assets/moon.svg'
import Star from "../../assets/star.svg"
import Button from '../buttons/button'

export default function Navbar(){
    return(
        <nav>
            <h1>Boom-Mines</h1>
            <div className='Buttons'>
                <Button callback={(e)=>{
                    e.preventDefault();
                    alert('MOON')
                }}>
                    <img src={Moon} alt="Moon"/>
                </Button>
                <Button callback={(e)=>{
                    e.preventDefault();
                    alert('STAR')
                }}>
                    <img src={Star} alt="Star" style={{marginLeft:'1rem'}}/>
                </Button>
            </div>
        </nav>
    )
}
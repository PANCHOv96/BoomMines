import Button from '../buttons/button'
import Logo from '../../assets/Logo.svg'
import { useState } from 'react'

export default function Navbar(){
    const [darkMode,setDarkMode] = useState(false)

    function cambiarColor(){
        darkMode ? document.body.classList.remove('dark') : document.body.classList.add('dark')
        setDarkMode(!darkMode)
    }

    return(
        <nav>
            <img src={Logo} className='Logo'/>
            <Button callback={cambiarColor}>
                <span className='Emoji Dark-mode'>{darkMode ? '🌞' : '🌚'}</span>
            </Button>
        </nav>
    )
}
import './App.css'
import Navbar from './components/navbar/navbar'
import Game from './components/game/game'
import Footer from './components/Footer/footer'
import LinkRepo from './components/repo'

function App() {
  return (
    <>
      <LinkRepo link={'https://github.com/PANCHOv96/BoomMines'} title={'link repo'}/>
      <Navbar/>
      <div className='flex flex-footer'>
        <Game/>
        <Footer/>
      </div>
    </>
  )
}

export default App

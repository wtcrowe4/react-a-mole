import { useEffect } from 'react'
import moleImg from '../mole.png'
//import useState from 'react' to pause the game
function Mole(props) {
    //Add pause state to Mole
    //const isPaused = props.paused;

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds);
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            src={moleImg}
            onClick={props.handleClick}
            alt="MoleImg" /> 
        </div>
    )
}

export default Mole;
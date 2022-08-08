import { useEffect } from 'react'
import moleImg from '../mole.png'

function Mole(props) {
    
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
import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

let MoleContainer = (props) => {
    let [mole, onHit] = useState(false);
    const handleClick = (e) => {
        props.setScore(props.score + 1);
        onHit(false);
    }
    let displayMole = mole ? <Mole setScore={props.setScore} toggle={onHit} handleClick={handleClick}/> : <EmptySlot toggle={onHit}/>; 
    return (
        <div className="MoleContainer">
            {displayMole}
        </div>
    );    
}

export default MoleContainer;

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const Letter = (props) => {

    const [answer, setAnswer] = useState(false);
    const [clicked, setClicked] = useState(false)

    const accepted = Math.floor(Math.random() * 2) === 0 ? true : false;
    const fade = useSpring({
        config: {
            mass: 8
        },
        from: {
            transform: accepted ? 'translate3d(0px,100px,0) scale(1) rotateX(0deg)' : 'translate3d(0px,-100px,0) scale(1) rotateX(0deg)',
        },
        transform: answer ? 'translate3d(0px,-20px,0px) scale(1) rotateX(0deg)' : 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
        fontFamily: answer ? "Bubblegum Sans" : "Londrina Shadow",
        display: clicked ? 'none' : ''
    });

    return (
        <animated.h1 className='title' onClick={() => setClicked(true)} onMouseEnter={() => setAnswer(true)} onMouseLeave={() => setAnswer(false)} style={fade}>{props.letter}</animated.h1>
    )
}

export default Letter;
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Word = props => {

    const fade = useSpring({
        from: {opacity: 0, transform: `translate3d(${(Math.random() - .5) * 200}px, 0px, 0) scale(1) rotateX(0deg)`},
        opacity: 1,
        transform: `translate3d(0px, 0px, 0) scale(1) rotateX(0deg)`
    });
    
    return (
        <animated.h3 style={fade} className='description'>
            {props.word}
        </animated.h3>
    )
} 

export default Word;
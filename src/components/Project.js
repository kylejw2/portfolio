import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';

const Project = props => {
    const [hover, setHover] = useState(false);

    const grow = useSpring({
        transform: hover ? 'scale(1)' : 'scale(1.5)'
    })

    const shadow = useSpring({
        boxShadow: hover ? '10px 10px 10px 5px rgba(0, 0, 0, 0.3)' :'5px 5px 5px 3px rgba(0, 0, 0, 0.5)',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
    })

    return (
        <animated.div className='project-card' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={shadow}>
            <div className='crop'>
                <animated.img src={props.project.image} alt={props.project.title} style={grow}/>
            </div>
            <h5>{props.project.title}</h5>
            <p>{props.project.description}</p>
        </animated.div>
    )
}

export default Project;
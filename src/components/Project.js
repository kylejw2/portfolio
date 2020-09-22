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

    const translate = useSpring({
        from: {transform: 'translate3d(0, 100px, 0)'},
        transform: 'translate3d(0, 0, 0)'
    })

    return (
        <>
        {
            props.mainDisplay ? 
            <animated.div className='project-single-display' style={translate}>
                <div>
                    <img src={props.project.image} alt={props.project.title} />
                </div>
                <div>
                    <h5>Project</h5>
                    <h4>{props.project.title}</h4>
                    <h5>About</h5>
                    {props.project.description.map((description, index) => <p key={`${props.project.title}.${index}`}>{description}</p>)}
                    <a href={props.project.site} target='_blank' rel="noopener noreferrer"><button>Visit Site</button></a>
                    <a href={props.project.github} target='_blank' rel="noopener noreferrer"><button>View Github Repo</button></a>
                </div>
            </animated.div> 
            : 
            <animated.div className='project-card'
            onMouseOver={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            onClick={() => {props.changeDisplay(true); props.setMain(props.project)}}
            style={shadow}>
                <div className='crop'>
                    <animated.img src={props.project.image} alt={props.project.title} style={grow}/>
                </div>
                <h5>{props.project.title}</h5>
                <p>{props.project.description}</p>
            </animated.div>
        }
        </>
        
    )
}

export default Project;
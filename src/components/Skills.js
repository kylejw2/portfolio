import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Sun from '../assets/sun.png';
import Mars from '../assets/Mars.png';
import Planet1 from '../assets/Planet1.png';
import Planet2 from '../assets/Planet2.png';
import Planet3 from '../assets/Cool.png';
import Planet4 from '../assets/Earth.png';
import Planet5 from '../assets/SW.png';
import Planet6 from '../assets/Uranus.png';
import {useSpring, animated} from 'react-spring';

const Skills = props => {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [skill, setSkill] = useState('');

    useEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const c = canvas.getContext('2d');

        class Star {
            constructor(x, y, radius, color = '#cccccc') {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
            }
            draw() {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
                c.fillStyle = this.color;
                c.fill();
                c.closePath();
            }
        }
        class Orbit {
            constructor(x, y, radiusX, radiusY) {
                this.x = x;
                this.y = y;
                this.radiusX = radiusX;
                this.radiusY = radiusY;
            }
            draw() {
                c.beginPath();
                c.ellipse(this.x, this.y, this.radiusX, this.radiusY, Math.PI / 9, 0, Math.PI*2, false);
                c.strokeStyle = '#4a4a4a';
                c.stroke();
            }
        }

        const stars = [];
        for (let i = 0; i < 250; i++) {
            const randX = Math.random() * canvas.width;
            const randY = Math.random() * canvas.height;
            const randRadius = Math.random() * 2;
            stars.push(new Star(randX, randY, randRadius));
        }

        const orbits = [];
        for (let i = 0; i < 8; i++) {
            const x = canvas.width / 2;
            const y = canvas.height / 2;
            const radiusX = 100 + i * i * 10;
            const radiusY = 30 + i * i * 6;
            orbits.push(new Orbit(x, y, radiusX, radiusY))
        }

        const animate = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            c.fillStyle = '#121212';
            c.fillRect(0,0, canvas.width, canvas.height);
            stars.forEach(star => star.draw());
            orbits.forEach(orbit => orbit.draw());
        }

        animate();

        contextRef.current = c;
    }, []) // without the second parameter, the canvas will update repeatedly

    const planets = [
        {
            skill: 'MongoDB',
            img: Mars,
            top: '30%',
            left: '40%'
        },
        {
            skill: 'C++',
            img: Planet1,
            top: '65%',
            left: '20%'
        },
        {
            skill: 'SQL',
            img: Planet2,
            top: '83%',
            left: '60%'
        },
        {
            skill: 'AWS',
            img: Planet3,
            top: '50%',
            left: '29%'
        },
        {
            skill: 'NodeJS',
            img: Planet4,
            top: '57%',
            left: '45%'
        },
        {
            skill: 'ExpressJS',
            img: Planet5,
            top: '56%',
            left: '55%'
        },
        {
            skill: 'ReactJS',
            img: Planet6,
            top: '48%',
            left: '53%'
        },
    ];

    const getPlanets = () => {
        return planets.map(planet => <img src={planet.img} width='40' 
        onMouseOver={() => setSkill(planet.skill)}
        onMouseLeave={() => setSkill('')}
        className={skill === planet.skill ? 'light-around' : ''}
        alt={planet.skill}
        style={{position: "fixed", top: planet.top, left: planet.left}}/>)
    }

    const getTitle = () => {
        return skill === '' ? <h1>My Skills</h1> : <h1>{skill}</h1>
    }

    const fade = useSpring({
        from: {opacity: 0},
        opacity: 1
    })

    return (
        <animated.div className='skills' style={fade}>
            <canvas style={{position: 'absolute'}} ref={canvasRef}/>
            <nav>
                <Nav {...props} activePage='Skills'/>
            </nav>
            {getTitle()}
            <img src={Sun} className='sun' width='100px' alt='sun' />
            {getPlanets()}
        </animated.div>
    )
}

export default Skills;
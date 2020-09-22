import React, {useState} from 'react';
import Nav from './Nav';
import Letter from './Letter';
import Yedding from '../assets/Yedding.jpg';
import Laborh from '../assets/Laborh.jpg';
import EventCal from '../assets/Event-Calendar.jpg';
import { useSpring, animated} from 'react-spring';

const Portfolio = (props) => {

    const [hover, setHover] = useState(false);

    const projects = [
        {
            title: 'Yedding',
            description: ['As the software architect behind Yedding, I’ve been given the task of building the website using ReactJS for the frontend, MongoDB for the backend, ExpressJS for the API, and AWS for hosting. Once the website is completed, I’ll begin the project of building an app for IOS using Swift and Android using Python.', 'Yedding is an online service that connects homeowners looking to make large amounts of quick cash with couples looking for wedding venues. Through our online service, couples find affordable, yet beautiful wedding venues and homeowners find a more lucrative approach to renting their property.'],
            image: Yedding
        },
        {
            title: 'La-Borh',
            description: ['I developed this responsive ecommerce admin page using ReactJS to quickly change between displaying all products, updating existing products, and adding new products without loading a new webpage. To store pictures in MongoDB, I used Base64 encoding to convert images to ASCII strings', 'La’Borh is an ecommerce site selling clothes. The La’Borh admin page allows non-technical administrators to instantly modify the actual La’Borh ecommerce site.'],
            image: Laborh
        },
        {
            title: 'Event Calendar',
            description: ['I assembled this software using NodeJS to dynamically display a calendar-view of any month in any year listing personal events. For security, I used bcrypt to hash passwords before storing them in the database, and implemented a function to verify a user’s token for authorization.'],
            image: EventCal
        },
        {
            title: 'Web Development Glossary',
            description: ['I developed this open-source web development glossary. Using ExpressJS and the REST architecture style, I constructed an API which manages http requests for CRUD operations to quickly and efficiently access and modify data within a NoSQL database on the backend.'],
            image: ''
        },
        {
            title: 'Portfolio',
            description: ['I built this portfolio using React and React Spring for the physics-based animations.'],
            image: ''
        }
    ]

    const getTitle = () => {
        const title = 'Recent Projects';
        const letters = [];
        for (let i = 0; i < title.length; i++) {
            if (title[i] === ' ') {letters.push(<span key={`${title}.${i}`} style={{margin: '0 8px'}}></span>)}
            else {letters.push(<Letter key={`${title}.${i}`} letter={title[i]} />) }
        }
        return letters;
    }

    const grow = useSpring({
        transform: hover ? 'scale(1)' : 'scale(1.5)'
            // transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
    })

    const getProjects = () => {
        return projects.map(project => {
            return (
                <div className='project-card' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <div className='crop'>
                        <animated.img src={project.image} alt={project.title} style={grow}/>
                    </div>
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                </div>
            )
        })
    }

    return (
        <div className='portfolio'>
            <nav>
                <Nav {...props} activePage='Portfolio' />
            </nav>
            <main>
                <div className='tile-title'>
                    {getTitle()}
                </div>
                <div className='projects'>
                    {getProjects()}
                </div>
            </main>
        </div>
    )
}

export default Portfolio;
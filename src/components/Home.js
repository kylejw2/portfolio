import React, {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import Letter from './Letter';

const Home = () => {

    const colors = ['#c72e2e', '#64b828', '#009DDC', '#F26430', '#6761A8'];
    const pages = ['Home', 'Portfolio', 'Experience', 'Skills', 'Contact'];
    const tiles = [
        {
            title: `Hi, I'm Kyle`, //home
            description: `Welcome to my website`
        },
        {
            title: `I'm crazy about coding`, //portfolio
            description: `Check out some of my recent projects.`
        },
        {
            title: `Valuable Experience`, //experience
            description: `Front-end developer, back-end developer, UI/UX designer.`
        },
        {
            title: `Various Skills`, //skills
            description: `NodeJS, ReactJS, Spring, ExpressJS, MongoDB, SQL, AWS, Java, C++, RESTful APIs`
        },
        {
            title: `Let's Talk`, //contact
            description: `Don't be shy. Feel free to reach out.`
        }
    ]

    const [color, setColor] = useState(colors[0]);
    const [tile, setTile] = useState(tiles[0]);
    const [index, setIndex] = useState(0);
    // let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            let newIndex;
            if (index === colors.length - 1) {setIndex(0); newIndex = 0;}
            else {setIndex(index => index + 1); newIndex = index + 1;}
            setColor(colors[newIndex]);
            setTile(tiles[newIndex]);

        }, 10000);
        return () => clearInterval(interval);
      }, [index, color, tile, colors, tiles]);

    const fade = useSpring({
        from: {
            opactiy: 0
        },
        background: color,
        opacity: 1
    });
    
    const getButtons = () => {
        return tiles.map((tile, i) => <button 
            key={i} 
            className={i === index ? 'buttons fill-center': 'buttons'}
            onClick={() => { 
                setTile(tiles[i]); 
                setColor(colors[i]);
                setIndex(i);
            }}></button>);
    }

    const getTitle = () => {
        const letters = [];
        // randomize which letters have a change in font
        for (let i = 0; i < tile.title.length; i++) {
            // const font = i % 2 === 0 ? 'Londrina Shadow' : '';
            
            if (tile.title[i] === ' ') {letters.push(<span key={`${index}.${i}`} style={{margin: '0 8px'}}></span>)}
            else {letters.push(<Letter key={`${index}.${i}`} letter={tile.title[i]} />) }
            // else {letters.push(<animated.h1 key={`${index}.${i}`} style={font} className='title'>{tile.title[i]}</animated.h1>) }
        }
        return letters;
    }

    const getNav = () => {
        const nav = [];
        for (let i = 0; i < pages.length; i++) {
            nav.push(<span key={i}>{pages[i]}</span>)
            if (i !== pages.length - 1) {nav.push(<span key={`${i}.5`}>/</span>)}
        }
        return nav;
    }

    return (

        <main className='home'>
            <nav>{getNav()}</nav>
            <animated.div className='background' style={fade}></animated.div>
            <section className='tile'>
                <div className='tile-title'>
                    {getTitle()}
                </div>

                <animated.h3 className='description'>{tile.description}</animated.h3>
                {index !== 0 ? <button className='learn-more' style={{color: color}}>Learn More</button> : ''}
                
            </section>
            <div className='button-group'>
                {getButtons()}
            </div>
        </main>
        
        
    )
}

export default Home;
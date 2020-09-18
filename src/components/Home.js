import React, {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {

    const colors = ['#c72e2e', '#64b828', '#009DDC', '#F26430', '#6761A8']

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
            description: `C++`
        },
        {
            title: `Let's Talk`, //contact
            description: `Don't be shy. Feel free to reach out.`
        },
    ]

    const [color, setColor] = useState(colors[0]);
    const [tile, setTile] = useState(tiles[0]);
    const [index, setIndex] = useState(0);
    // let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === colors.length - 1) {setIndex(0)}
            else {setIndex(index => index + 1)}
            setColor(colors[index]);
            setTile(tiles[index]);
            console.log(index);
            // make each letter jump in through a position at -30px

        }, 2000);
        return () => clearInterval(interval);
      }, [index, color, tile]);

    const fade = useSpring({
        background: color
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
        for (let i = 0; i < tile.title.length; i++) {
            const font = i % 2 === 0 ? 'Londrina Shadow' : '';
            
            if (tile.title[i] === ' ') {letters.push(<span key={`${index}.${i}`} style={{margin: '0 8px'}}></span>)}
            else {letters.push(<animated.h1 key={`${index}.${i}`} style={{fontFamily: font}} className='title'>{tile.title[i]}</animated.h1>) }
        }
        return letters;
    }

    return (

        <main className='home'>
            <nav>Home / Portfolio / Experience / Skills / Contact</nav>
            <animated.div className='background' style={fade}></animated.div>
            <section className='tile'>
                <div className='tile-title'>
                    {getTitle()}
                </div>

                <h3 className='description'>{tile.description}</h3>
                {index !== 0 ? <button className='learn-more' style={{color: color}}>Learn More</button> : ''}
                
            </section>
            <div className='button-group'>
                {getButtons()}
            </div>
        </main>
        
        
    )
}

export default Home;
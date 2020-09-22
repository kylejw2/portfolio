import React, {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import Letter from './Letter';
import Word from './Word';
import Nav from './Nav';

const Home = (props) => {
    
    const colors = ['#c72e2e', '#009DDC', '#64b828', '#F26430', '#6761A8'];
    const tiles = [
        {
            title: `Hi, I'm Kyle`, //home
            description: `Welcome to my website`
        },
        {
            title: `I'm crazy about coding`, //portfolio
            description: `Check out some of my recent projects.`,
            page: 'Portfolio'
        },
        {
            title: `Valuable Experience`, //experience
            description: `Front-end and back-end developer, UI/UX designer.`,
            page: 'Experience'
        },
        {
            title: `Various Skills`, //skills
            description: `NodeJS, ReactJS, React Spring, ExpressJS, MongoDB, SQL, AWS, Java, C++, RESTful APIs`,
            page: 'Skills'
        },
        {
            title: `Let's Talk`, //contact
            description: `Don't be shy. Feel free to reach out.`,
            page: 'Contact'
        }
    ];

    const [color, setColor] = useState(colors[0]);
    const [tile, setTile] = useState(tiles[0]);
    const [index, setIndex] = useState(0);
    // const [descriptionWords, setDescriptionWords] = useState(tile.description.split(' '));

    // const transitions = useTransition(descriptionWords, word => `${word}`, {
    //     from: { position: 'absolute', opacity: 0, transform: 'scale(0)' },
    //     enter: { position: 'absolute', opacity: 1, transform: 'scale(1)' },
    //     leave: { position: 'absolute', opacity: 0, transform: 'scale(0)' },
    //     // from: { opacity: 0, marginLeft: '100px', marginRight: '-100px' },
    //     // enter: { opacity: 1, marginLeft: '0px', marginRight: '0px' },
    //     // leave: { opacity: 0, marginLeft: '-100px', marginRight: '100px' },
    //     // from: { transform: 'translate3d(0,-20px,0)' },
    //     // enter: { transform: 'translate3d(0,0px,0)' },
    //     // leave: { transform: 'translate3d(0,-20px,0)' },
    //     })

    useEffect(() => {
        const interval = setInterval(() => {
            let newIndex;
            if (index === colors.length - 1) {setIndex(0); newIndex = 0;}
            else {setIndex(index => index + 1); newIndex = index + 1;}
            setColor(colors[newIndex]);
            setTile(tiles[newIndex]);
            // setDescriptionWords(tiles[newIndex].description.split(' '));
        }, 5000);
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
                // setDescriptionWords(tiles[i].description.split(' '))
            }}></button>);
    }

    const getTitle = () => {
        const letters = [];
        for (let i = 0; i < tile.title.length; i++) {
            if (tile.title[i] === ' ') {letters.push(<span key={`${index}.${i}`} style={{margin: '0 8px'}}></span>)}
            else {letters.push(<Letter key={`${index}.${i}`} letter={tile.title[i]} />) }
        }
        return letters;
    }

    const getDescription = () => {
        const descriptionWords = tile.description.split(' ');
        return descriptionWords.map(word => <Word key={`${index}.${word}`} word={word} />)
    }

    return (
        <main className='home'>
            <nav>
                <Nav {...props} activePage='Home'/>
            </nav>
            <animated.div className='background' style={fade}></animated.div>
            <section className='tile'>
                <div className='tile-title'>
                    {getTitle()}
                </div>
                <div className='tile-description'>
                    {getDescription()}
                </div>
                {index !== 0 ? <button className='learn-more' style={{color: color}} onClick={() => props.history.push(`/${tile.page}`)}>Learn More</button> : ''}
            </section>
            <div className='button-group'>
                {getButtons()}
            </div>
        </main>
    )
}

export default Home;
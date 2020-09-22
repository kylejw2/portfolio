import React, { useState } from 'react';
import Nav from './Nav';
import {useTransition, useSpring, animated} from 'react-spring';

const Experience = (props) => {

    const experiences = [
        {
            name: 'Work',
            open: true,
            examples: [
                {
                    name: 'Yedding',
                    date: 'March 2020 - Current',
                    location: 'Provo, UT',
                    explanation: ['Co-founder and head of development.']
                },
                {
                    name: 'Brigham Young University',
                    date: 'September 2017 - April 2018',
                    location: 'Provo, UT',
                    explanation: ['Teaching Assistant for intermediate price theory.']
                }
            ]
        },
        {
            name: 'Education',
            open: false,
            examples: [
                {
                    name: 'Helio Training',
                    date: 'June 2020 - September 2020',
                    location: 'Draper, UT',
                    explanation: ['Earned proficiency in building full-stack web applications.', 'Specialized in the MERN stack.', 'Built over 65 unique algorithms using JavaScript.']
                },
                {
                    name: 'Brigham Young University',
                    date: 'September 2016 - April 2018',
                    location: 'Provo, UT',
                    explanation: [`Earned Bachelor's Degree in Economics, Magna Cum Laude.`, `3.99 GPA`]
                },
                {
                    name: 'Salt Lake Community College',
                    date: 'May 2014 - June 2016',
                    location: 'Taylorsville, UT',
                    explanation: [`Earned Associate's Degree with a 4.0 GPA before graduating high school.`]
                }
            ]
        },
        {
            name: 'Volunteer',
            open: false,
            examples: [
                {
                    name: 'Church of Jesus Christ of Latter-day Saints',
                    date: 'July 2018 - March 2020',
                    location: 'Piracicaba, SP, Brazil',
                    explanation: [`Devoted thousands of hours towards serving others, learning how to truly love one another.`, `Supervised nearly 30 missionaries throughout multiple cities, providing training, explaining doctrine, and encouraging collaboration.`]
                },
                {
                    name: 'BYU Inscape Journal',
                    date: 'March 2018 - April 2018',
                    location: 'Provo, UT',
                    explanation: [`Analyzed numerous poetry submissions with other staff editors to determine which could be published.`]
                },
                {
                    name: 'Self-Help Homes',
                    date: 'October 2016 - April 2017',
                    location: 'Utah County, UT',
                    explanation: [`Dedicated Saturday mornings, totaling more than 50 hours, to help low-income families build their homes.`, `Brought friends to experience the joy of service, which led to more than 100 hours of their combined help.`]
                },
            ]
        },
    ]

    const [expSection, setExpSection] = useState(0);
    const fade = useSpring({
        from: { transform: 'scale(1.5)'},
        transform: 'scale(1)'
    })

    const transitions = useTransition(experiences[expSection].examples, item => `${expSection}.${item.name}`, {
        from: {opacity: 0, transform: 'scale(1.1)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(0.9)'}
    });

    const getExpCards = () => {
        return transitions.map(({item, props, key}) => {
            return (<animated.div key={key} className='example-card' style={props}>
                <h1>{item.name}</h1>
                <h2>{item.date}</h2>
                <h3>{item.location}</h3>
                {item.explanation.map((ele, index) => <p key={`${expSection}.${index}`}>{ele}</p>)}
            </animated.div>)
        })
    }

    return (
        <div className='experience'>
            <nav style={{color: '#233233'}}>
                <Nav {...props} activePage='Experience'/>
            </nav>
            <animated.main className='exp-main' style={fade}>
                <div>
                    <h1>Experience</h1>
                    <h2 onClick={() => setExpSection(0)}>Work</h2>
                    <h2 onClick={() => setExpSection(1)}>Education</h2>
                    <h2 onClick={() => setExpSection(2)}>Volunteer</h2>
                </div>
                <div>
                    {getExpCards()}
                </div>
            </animated.main>
        </div>
    )
}

export default Experience;
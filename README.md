# Portfolio

## Overview
### This project was built using ReactJS and is hosted through Github Pages.
### Access the project here: https://kylejw2.github.io/Home

## Routing
Routing between web pages (Home, Portofolio, Experience, Skills, and Contact) is done through the `react-router-dom` package.

## Data Models
For the home page, tiles were used to store information relating to a title, description, and a page.
```javascript
{
    title: string,
    description: string,
    page: string
}
```

For the portfolio cards in the portfolio page, the following data model was used:
```javascript
{
    title: string,
    description: [strings],
    image: imported img object,
    site: url string,
    github: url string
}
```

For the experience cards in the experience page, the following data model was used:
```javascript
{
    name: string,
    open: bool,
    examples: [
        {
            name: string,
            date: string,
            location: string,
            explanation: [strings]
        }
    ]
}
```

For the skills section, here are the following data models for ...star (an instance of `class Star` in the canvas HTML element)
```javascript
{
    x: Math.random() * canvas.width, // x-value coordinate
    y: Math.random() * canvas.height, // y-value coordinate
    radius: Math.random() * 2,
    color: '#cccccc'
}
```

...orbit (an instance of `class Orbit` in the canvas HTML element)
```javascript
{
    x: canvas.width / 2,
    y: canvas.width / 2,
    radiusX: int (exponentially increasing),
    radiusY: int (exponentially increasing)
}
```

...planet
```javascript
{
    skill: string,
    img: imported image object,
    top: string, // position represented in percent from top
    left: string // position represented in percent from left
}
```

## New skills applied in this project
Prior to this project, I haven't used a lot of animations. In this project, I used a physics-based animation package called `React Spring` to make my UI my engaging. This package is not only easy to use, it gives me a more realistic animation. In comparison to vanilla CSS animations which are based on durations and intervals, `React Spring` is based on physics.
Here's the documentation for `React Spring`: https://www.react-spring.io/
###
Using `React Spring` is quite simple. Here's a code snippet to demonstrate a simple fade in animation.
```javascript
import React from 'react';
import { useSpring, animated } from 'react-spring'; // first, import the library

const ReactSpringDemo = () => {
    const fade = useSpring({ // use the useSpring API to build the animation
        from: {opacity: 0},
        opacity: 1
    });
    return <animated.div style={fade}>Hello world</animated.div> 
    // to use the animation, pass it to the 'style' property and prepend the word, "animated" to your HTML tag
}

export default ReactSpringDemo;
```
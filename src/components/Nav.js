import React from 'react';


const Nav = (props) => {

    const pages = ['Home', 'Portfolio', 'Experience', 'Skills', 'Contact'];

    const handleChange = (newPage) => {
        props.history.push(`/${newPage}`);
    }

    const nav = [];
    for (let i = 0; i < pages.length; i++) {
        nav.push(<span className={props.activePage === pages[i] ? 'nav-active-page change-cursor' : 'change-cursor'} key={i} onClick={() => handleChange(pages[i])}>{pages[i]}</span>)
        if (i !== pages.length - 1) {nav.push(<span key={`${i}.5`}>/</span>)}
    }

    return nav;
}

export default Nav;
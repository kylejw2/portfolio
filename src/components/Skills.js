import React from 'react';
import Nav from './Nav';

const Skills = props => {

    return (
        <div>
            <nav>
                <Nav {...props} activePage='Skills'/>
            </nav>
        </div>
    )
}

export default Skills;
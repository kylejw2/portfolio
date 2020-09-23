import React from 'react';
import Nav from './Nav';
import Letter from './Letter';
import Resume from '../assets/KyleWrightResume.pdf';

const Contact = props => {

    const getTitle = () => {
        const title = `Don't be shy! Reach out :)`;
        const letters = [];
        for (let i = 0; i < title.length; i++) {
            title[i] === ' ' ? letters.push(<span style={{margin: '7px'}}></span>) :
                letters.push(<Letter letter={title[i]}/>)
        }
        return letters;
    }

    return (
        <div className='contact'>
            <nav>
                <Nav {...props} activePage='Contact'/>
            </nav>
            <div className='contact-title'>
                {getTitle()}
            </div>
            <div className='icon-group'>
                <a href='http://www.linkedin.com/in/kylejwright' rel="noopener noreferrer" target='_blank'><i className='fa fa-linkedin'></i></a>
                <a href='https://github.com/kylejw2' rel="noopener noreferrer" target='_blank'><i className='fa fa-github'></i></a>
                <a href='https://www.facebook.com/caio.wright.777' rel="noopener noreferrer" target='_blank'><i className='fa fa-facebook'></i></a>
                <a href="mailto:kylejamwright@gmail.com"><i className='fa fa-envelope'></i></a>
            </div>
            <div className='resume'>
                <a href={Resume} download><button>Download Resume</button></a>
            </div>
        </div>
    )
}

export default Contact;
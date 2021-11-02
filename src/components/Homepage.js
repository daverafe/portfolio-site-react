import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Homepage() {
    return (
        <div id="homepage">
            <h1>David Rafe's Portfolio Site</h1>
            <h3>Frontend software engineer new to the industry</h3>
            <h3>Check out my projects and find out a little more about me here</h3>
            <Link to="/projects">
                <Button variant="secondary">Projects</Button>{' '}
            </Link>
            <Link to="/about">
                <Button variant="secondary">About</Button>{' '}
            </Link>
        </div>
    )
}

export default Homepage

import React from 'react'
import {Link} from 'react-router-dom'

function AboutContainer() {
    return (
        <div id="about">
            <img src="https://avatars.githubusercontent.com/u/42283106?v=4" alt="profile"/>
            <h2>David Rafe</h2>
            <p>I love learning every single day, and the most exciting part is that my journey with code has just begun. I've been able to quickly pick up concepts such as Object-Orientation, and MVC style responsibilities utilizing Ruby on Rails and Javascript(ES6). I've been able to incorporate frontend frameworks and technologies such as React and Redux, in conjunction with a Rails backend setup, in a matter of weeks. I am excited to continue to explore what else is out there, and what I can do with it.</p>
            <Link to="https://www.linkedin.com/in/david-rafe/">LinkedIn</Link>
            <br/>
            <Link to="https://github.com/daverafe">Github</Link>
        </div>
    )
}

export default AboutContainer

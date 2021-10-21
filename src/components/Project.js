import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

function Project({projectInfo}) {
    return (
        <div id={projectInfo.title.toLowerCase()}>
            <Container>
                <Link to={projectInfo.url}><img src={projectInfo.image} alt="tech icon"/></Link>
                <Link to={projectInfo.url}><h2>{projectInfo.title}</h2></Link>
                <p>{projectInfo.description}</p>
            </Container>
        </div>
    )
}

export default Project

import React from 'react'
import {Link} from 'react-router-dom'

function Project({projectInfo}) {
    return (
        <div id={projectInfo.title.toLowerCase()}>
            <Link to={projectInfo.url}><img src={projectInfo.image} alt="tech icon"/></Link>
            <Link to={projectInfo.url}><h2>{projectInfo.title}</h2></Link>
            <h4>{projectInfo.description}</h4>
            <h5>{projectInfo.technologies}</h5>
        </div>
    )
}

export default Project

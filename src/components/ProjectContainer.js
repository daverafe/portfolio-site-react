import React from 'react'
import {Link} from 'react-router-dom'

function ProjectContainer({projectInfo}) {
    return (
        <div>
            <Link to={projectInfo.url}><img src={projectInfo.image} alt="tech icon"/></Link>
            <Link to={projectInfo.url}><h2>{projectInfo.title}</h2></Link>
            <p>{projectInfo.description}</p>
        </div>
    )
}

export default ProjectContainer

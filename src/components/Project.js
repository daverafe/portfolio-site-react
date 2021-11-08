import React from 'react'

function Project({projectInfo}) {
    return (
        <div id={projectInfo.title.toLowerCase()}>
            <a href={projectInfo.url} target="_blank" rel="noreferrer"><img className="glowing-border" src={projectInfo.image} alt="tech icon"/></a>
            <a href={projectInfo.url} target="_blank" rel="noreferrer"><h2>{projectInfo.title}</h2></a>
            <h4>{projectInfo.description}</h4>
            <h5>{projectInfo.technologies}</h5>
        </div>
    )
}

export default Project

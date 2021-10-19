import React from 'react'

function ProjectContainer({projectInfo}) {
    return (
        <div>
            <img src={projectInfo.image} alt="tech icon"/>
            <h2>{projectInfo.title}</h2>
            <p>{projectInfo.description}</p>
        </div>
    )
}

export default ProjectContainer

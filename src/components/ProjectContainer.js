import React from 'react'
import {Container} from 'react-bootstrap'
import Project from './Project'

function ProjectContainer() {

    const artMarket = {
        title: "Art Market",
        image: "https://images.unsplash.com/photo-1420802532821-8a885e88e95c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        url: "https://epic-allen-47afe0.netlify.app/",
        description: "Marketplace / E-commerce application where users can browse and search through various local art pieces for purchase, and set up an account to upload and sell their own pieces of art.",
        technologies: "React Redux JS Ruby on Rails API"
    }
    const queue = {
        title: "Queue",
        image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hpbmclMjB0dnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        url: "https://stormy-reaches-82175.herokuapp.com/",
        description: "A TV/Movie/Media recommendation app where users can create an account, and recommend content to other users that will populate on their profiles. ",
        technologies: "Ruby on Rails"
    }
    const lifestyleRoster =  {
        title: "Lifestyle Roster",
        image: "https://images.unsplash.com/photo-1522198734915-76c764a8454d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        url: "https://vigorous-hoover-20c685.netlify.app/",
        description: "Pinterest / Registry style app that allows you to set up categorized rosters of all your favorite items from across the web, creating gift or lifestyle inspiration. ",
        technologies: "JS Ruby on Rails API"
    }

    return (
        <div id="project-container">
            <Container>
               <h1>Featured Projects</h1>
               <h3>Here are several projects I built from concept through to deployment. Click on the image or title to check out the live site.</h3>
               <Project projectInfo={artMarket}></Project>
               <Project projectInfo={queue}></Project>
               <Project projectInfo={lifestyleRoster}></Project>
            </Container>
        </div>
    )
}

export default ProjectContainer

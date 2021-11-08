import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Row, Col} from 'react-bootstrap'

function Homepage() {
    return (
        <div id="homepage">
            <h1>David Rafe</h1>
            <h3>Emerging Frontend Software Engineer</h3>
            <h3>Check out my projects, and find out a little more about me here</h3>
            <Link to="/projects">
                <Button variant="secondary">Projects</Button>{' '}
            </Link>
            <Link to="/about">
                <Button variant="secondary">About</Button>{' '}
            </Link>
            <Container>
                <Row>
                    <Col>
                        <img alt="html" src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                    </Col>
                    <Col>
                        <img alt="css" src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                    </Col>
                    <Col>
                        <img alt="javascript" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGphdmFzY3JpcHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                    </Col>
                </Row>
            </Container>
            <h5>This site was built with React</h5>
        </div>
    )
}

export default Homepage

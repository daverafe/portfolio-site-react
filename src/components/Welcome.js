import React from 'react'
import {Button} from 'react-bootstrap'

function Welcome(props) {
    
    
    const handleClick = () => {
        props.history.push('/home')
    }
    
    
    return (
        <div id="welcome">
            <h1>Welcome To My Portfolio Site</h1>
            <h3>Click To Enter</h3>
            <Button onClick={() => handleClick()} variant="secondary">Enter</Button>
        </div>
    )
}

export default Welcome

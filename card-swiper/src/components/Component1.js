import React from 'react'
import {useSpring, animated} from 'react-spring'

export default function Component1() {
    const props = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:-500}})
    return (
        <animated.div  style={props}>
            <div style={c1style}>
            <h1>Component1</h1>
            <p>This is random text </p>
            </div>
        </animated.div>
    )
}

const c1style ={
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem',
    width: '280px'
}
import React from 'react'
import { Spring } from 'react-spring/renderprops'

export default function Animate() {
    return (
        <Spring
        from={{ opactiy: 0, marginLeft: -500 }}
        to={{ opactiy: 1, marginLeft: 0}}
        >
            {props => (
                <div style={props}>
                <div style={c1Style}>
                <h1>Component 1</h1>
                <p>lorem 30</p>
                </div>
                </div>
            )}
        </Spring>
        
    )
}

const c1Style = {
    background: 'steelblue',
    color: '#fff',
    padding:'1.5rem'

}

import React from 'react';
import   './Person.css';
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I' {props.name} and I am {props.age}</p>
            <p>{props.click}</p>
            <input type='Text'onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;
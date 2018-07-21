import React from 'react';
// import Radium from 'radium';
import classes from  './Person.css';
const person = (props) => {


    return (
        <div className={classes.person} style={classes.style}>
            <p onClick={props.click}>I'am {props.name} and I am {props.age} years old</p>
            <p>  {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};
export default person
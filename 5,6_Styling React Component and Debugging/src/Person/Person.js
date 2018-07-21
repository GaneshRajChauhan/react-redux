
// import React from 'react';
// import   './Person.css';
// import Radium from 'radium';
// const person = (props) => {
//     const style={
//         '@media(min-width:500px)':{
//          width:'450px'
//         }
//     }
//     return (
//         <div className='Person' style={style}>
//             <p onClick={props.click}>I' {props.name} and I am {props.age}</p>
//             <p>{props.click}</p>
//             <input type='Text'onChange={props.changed} value={props.name}></input>
//         </div>
//     )
// }

// export default Radium(person);






import React from 'react';
import classes from   './Person.css';
const person = (props) => {
    const rand=Math.random();
    // if(rand>0.7)
    // {
    //        throw new Error("Something went wrong");
    // }
    return (
      
        <div className={classes.Person}>
            <p onClick={props.click}>I' {props.name} and I am {props.age}</p>
            <p>{props.click}</p>
            <input type='Text'onChange={props.changed} value={props.name}></input>
            
        </div>

    )
}

export default person;
import React from 'react';
import classes from './cockpit.css'
import Aux from '../../hoc/Aux';
const cockpit=(props)=>{
    let assignedClasses=[];
    let btnClass=classes.Button;
    if(props.showPersons)
    {
        btnClass=[classes.Button,classes.Red].join(' ');
    }
  
    if(props.persons.length<=2){
      assignedClasses.push(classes.Red);
    }
   if(props.persons.length<=1)
   {
    assignedClasses.push(classes.bold);
   }
    return(
        <Aux>
       
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is Really Workign</p>
        <button
        className={btnClass}
          onClick={props.clicked}>Switch Name</button>
          </Aux>
        
        
    );
}
export default cockpit;
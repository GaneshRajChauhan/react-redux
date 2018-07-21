import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import classes from  './Person.css';
class Person extends Component{
   constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor()',props)
       }
       componentWillMount(){
         console.log("[Person.js] Inside componentwillmount()");
       }
       componentDidMount(){
         console.log("[Peron.js] componentDidMount()");
         if(this.props.position===0)
         {
             this.inputElement.focus();
         }
       }
      render(){
        console.log("[Person.js] render() ")
        return (
            <Aux >
                <p onClick={this.props.click}>I'am {this.props.name} and I am {this.props.age} years old</p>
                <p>  {this.props.children} </p>
                <input
                ref={(inp)=>{this.inputElement=inp}}
                 type="text"
                  onChange={this.props.changed} 
                  value={this.props.name}/>
            </Aux>
        )
    // return [
    //     <p  key="1" onClick={this.props.click}>I'am {this.props.name} and I am {this.props.age} years old</p>
    //             <p key="2">  {this.props.children} </p>
    //             <p key="3" input type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]


    }
}
Person.propTypes={
    click:PropTypes.func ,
    name: PropTypes.string,
    age:PropTypes.number ,
    changed:PropTypes.func
}
export default withClass(Person,classes.Person);
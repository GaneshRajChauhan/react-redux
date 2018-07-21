import React, { PureComponent } from 'react';
import classes from  './App.css';
import Persons from '../components/persons/persons';
import CockPit from '../components/Cockpit/cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
class App extends PureComponent {
  constructor(props){
   super(props);
  this.state = {
    persons: [
      { id:"133",name: 'Max', age: 28 },
      {id:"33", name: 'Manu', age: 29 },
      { id:"dd",name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    toggleClicked:0
    
  }
   console.log('[App.js] Inside Constructor()',props)
  }
  componentWillMount(){
    console.log("[App.js] Inside component will mount()");
  }
  componentDidMount(){
    console.log("[App.js] componentDidMount()");
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[UPDATE App.js] insed shoudlComponentUpdate()',nextProps,nextState);
  //   return nextState.persons!==this.state.persons||
  //   nextState.showPersons!==this.state.showPersons;
  //   // return true;
  // }
  componentWillUpdate(nextProps,nextState)
  {
   console.log('[UPDATE App.js] insed componentWillUpdate()',nextProps,nextState);
  }
  deletePersonHandler = (personindex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personindex, 1);
    this.setState({ persons: persons })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { id: '1ass', name: "Max", age: 23 },
        { id: '2wwss', name: event.target.value, age: 29 },
        { id: '3wwee', name: 'Stephanie', age: 27 }
      ]
    })
  }
  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState,props)=>{ 
      return {
        showPersons: !doesShow ,
        toggleClicked:this.state.toggleClicked+1
      }
     
    });
  }
  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person =
      {
        ...this.state.persons[personIndex]
      };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  render() {
    console.log("[App.js] Inside Render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
        </div>

      );
    }
    return (
     <Aux classes={classes.App}>
      <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
       <CockPit showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePerson}
        appTitle={this.props.title}
        />
         {persons}
        </Aux>
       
    );

    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi  I\'am React App!!!!'));
  }
}

export default withClass(App,classes.App);

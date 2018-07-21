import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
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
    this.setState({ showPersons: !doesShow });
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
    console.log("rendered");
    let btnClass='';
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>

      );
      btnClass=classes.Red;
    }
    let assignedClasses=[];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.Red);
    }
   if(this.state.persons.length<=1)
   {
    assignedClasses.push(classes.bold);
   }
    return (
      <div className={classes.App}>
        <h1>Hi I am React App</h1>
        <p className={assignedClasses.join(' ')}>This is Really Workign</p>
        <button
        className={btnClass}
          onClick={() => this.togglePerson()}>Switch Name</button>
        {persons}
      </div>
 
    );

    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi  I\'am React App!!!!'));
  }
}

export default App;

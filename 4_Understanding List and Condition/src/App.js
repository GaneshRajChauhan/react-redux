import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephani', age: 26 }
    ],
    othserState: 'test'

  }
  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    // dont do this    this.state.persons[0].name='Ganesh Raj Chauhan';
    this.setState(
      {
        persons: [
          { id: 'asdf', name: newName, age: 28 },
          { id: 'bsdf', name: 'Ganesh Raj Chauhan', age: 29 },
          { id: 'bests', name: 'Stephani', age: 26 }
        ],
        othserState: 'some other value',
        showPersons: true
      }

    )

  }

  nameChangedEventHandler = (event,id) => {
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons]
    persons[personIndex]=person;
    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28 },
    //     { name: 'Manu', age: 29 },
    //     { name: event.target.value, age: 26 }
    //   ]
    // })
    this.setState({persons:persons})
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={index}
              key={person.id}
              changed={(event)=>this.nameChangedEventHandler(event,person.id)}
            />
          })}

        </div>
      );
    }
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className='App'>
        <h1 >Hello I Am React App</h1>
        <p >this is Really Workign</p>
        <button style={style} onClick={this.togglePersonHandler}>SwitchName</button>
        {persons}
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a React App!!'));
  }
}

export default App;

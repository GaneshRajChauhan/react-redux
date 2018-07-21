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
          { name: newName, age: 28 },
          { name: 'Ganesh Raj Chauhan', age: 29 },
          { name: 'Stephani', age: 26 }
        ]
      }

    )

  }

  nameChangedEventHandler=(event)=>{
    this.setState( {persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: event.target.value, age: 26 }
    ]})
  }
  render() {

    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    return (
      <div className='App'>
        <h1 >Hello I Am React App</h1>
        <p >this is Really Workign</p>
        <button style={style} onClick={()=>this.switchNameHandler('Good Test')}>SwitchName</button>
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age}></Person>
        <Person
         name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          ></Person>
        <Person
         name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this,'GaneshRaj')}
          changed={this.nameChangedEventHandler}
          >My Hobbies:Racing</Person>

      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a React App!!'));
  }
}

export default App;

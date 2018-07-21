import React,{PureComponent} from 'react';
import Person from './Person/Person';
class  Persons extends PureComponent{
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor()',props)
   }
   componentWillMount(){
     console.log("[Persons.js] Inside componentwillmount()");
   }
   componentDidMount(){
     console.log("[Perons.js] componentDidMount()");
   }
   componentWillReceiveProps(nextProps)
   {
     console.log("[Update Persons.js] Inside componentWillReceiveProps()",nextProps);
   }
  //  shouldComponentUpdate(nextProps,nextState){
  //    console.log('[UPDATE Persons.js] insed shoudlComponentUpdate()',nextProps,nextState);
  //    return nextProps.persons!==this.props.persons ||
  //    nextProps.changed!==this.props.changed ||
  //    nextProps.clicked!==this.props.clicked ;
  //   // return true;
  //  }
   componentWillUpdate(nextProps,nextState)
   {
    console.log('[UPDATE Persons.js] insed componentWillUpdate()',nextProps,nextState);
   }
   componentDidUpdate(){
    console.log('[UPDATE Persons.js] insed componentDidUpdate()');
   }
  render(){
    console.log("[Persons.js] render() ")
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
  }
}  
 export default Persons


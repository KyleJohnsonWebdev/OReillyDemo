import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//App.css



class App extends Component {
  state = {
    persons: [
      { id:'00sdf', name: 'Max', age: 28 },
      { id:'00ff', name: 'Manu', age: 29 },
      { id:'00dd', name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person = {...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
render(){
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    curser: 'pointer'
  };
  const red = {
    color: 'red',
    background: 'green'
  };
  const bold = {
    color: 'bold'
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div >
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)}/>
        })}
      </div>
    );
    style.backgroundColor = 'red';

  }


  //What are you trying to change colors for here? You are pushing through something empty. 
  let assignedClasses = [];

  if (this.state.persons.length <= 2){
    //assignedClasses.push(classes.red);
    assignedClasses.push(red)
  }
  if (this.state.persons.length <= 1){
   // assignedClasses.push(classes.bold);
    assignedClasses.push(bold)
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <p> This is really working!</p>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      <h1 className="red">
        mkjkjkj
      </h1> 
      <p style={red}>
        para
      </p>
    </div>

  );
}
}
export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id:'sadfsadf', name: "Lucas", age: "23"},
      {id:'dbfghgfsd',name: "Veruska", age: "21"}
    ],
    mostrarPessoas: false
  }
  mudarNomeHandler = (newName) => {
    console.log("Foi clicado");
    this.setState({
      persons: [
        {name: newName, age: "24"},
        {name: "Veruska", age: "25"}
      ]
    })
  }

  removerPerson = (personIndex) => {
      const personList = this.state.persons.slice();
      personList.splice(personIndex,1);
      this.setState({persons: personList})
  }

  digitarNomeHandler = (event, index) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index
    })

    const personCopy = {...this.state.persons[personIndex]}
    personCopy.name = event.target.value;

    const personList = [...this.state.persons]
    console.log(personList);
    personList[personIndex] = personCopy;

    this.setState({
      persons: personList
    })
  }

  mostrarPessoasEvent = () => {
    const show = this.state.mostrarPessoas
    this.setState({
      mostrarPessoas: !show
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer'
    }

    let persons = null;

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red')
    }

    if (this.state.persons.length < 1){
      classes.push('bold')
    }


    if(this.state.mostrarPessoas){
      persons = (
        <div>
            {
              this.state.persons.map((person, index) => {
              return <Person
                      name={person.name}
                      age={person.age}
                      click={() => this.removerPerson(index)}
                      key={person.id}
                      changed={(event) => this.digitarNomeHandler(event, person.id)}
                      />
              })
            }
        </div>
      );
      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
        {console.log(classes)}
        <p className={classes.join(' ')}> Primeiro React App </p>
        <button style={style} onClick={this.mudarNomeHandler.bind(this, 'Tayna')}>Mudar nome!</button>
        <button style={style} onClick={this.mostrarPessoasEvent}>Mostrar pessoas!</button>
          {persons}
      </div>
    );
  }
}
export default App;

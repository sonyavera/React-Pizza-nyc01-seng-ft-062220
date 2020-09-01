import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    editing: []
  }

  componentDidMount(){
    this.fetchPizzaList()
  }

  fetchPizzaList = () => {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(resp => this.setState({pizzas: resp}))
  }

  editPizza=(pizzaObj)=>{
    this.setState({editing: pizzaObj})
  }

  updatePizzaState=(pizzaObj)=>{
    const pizzaId = pizzaObj.id
    console.log(pizzaObj)
    const editedPizza = this.state.pizzas.find(pizza => pizza.id === pizzaId)
    editedPizza.topping = pizzaObj.topping
    editedPizza.size = pizzaObj.size
    this.setState({pizzas: this.state.pizzas})
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editing} updatePizza={this.updatePizzaState} />
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;

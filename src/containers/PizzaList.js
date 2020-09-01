import React, { Component } from 'react';
import Pizza from '../components/Pizza'


class PizzaList extends Component {

  editPizza =(pizzaObj) => {
    console.log("made it to pizza list", pizzaObj)
    this.props.editPizza(pizzaObj)
  }

  renderPizzas = () => {
    return this.props.pizzas.map(pizza => {
      return <Pizza editPizza={this.editPizza} key={pizza.id} pizza={pizza}/>
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

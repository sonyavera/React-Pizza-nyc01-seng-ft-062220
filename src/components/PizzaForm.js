import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: "",
    size: "",
    vegetarian: false
  }

  changeHandler =(e) => {
    this.setState({ [e.target.name]: e.target.value} )
  }

  componentDidUpdate(prevProps){ //this gets called when you change the value of props
    if(prevProps.pizza.id !== this.props.pizza.id){
      this.setState({
        id: this.props.pizza.id,
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        vegetarian: this.props.vegetarian
      })
    }
  }

  clickHandler=()=>{
    this.props.updatePizza(this.state)
  }


  radioChangeHandler=(e)=>{
    console.log(e.target.checked)
    let veg;
    if(e.target.checked){
      veg = true
    } else {veg = false}
    this.setState({
      vegetarian: veg
    }, )
  }

  render(){
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" onChange={this.changeHandler} value={this.state.topping}/>
        </div>
        <div className="col">
          <select onChange={this.changeHandler} name="size" value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" name="vegetarian">
          <div className="form-check">
            <input onChange={this.radioChangeHandler} name="veg" className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check" name="notVegetarian">
            <input name="veg" className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.clickHandler}>Submit</button>
        </div>
      </div>
    )}}


export default PizzaForm

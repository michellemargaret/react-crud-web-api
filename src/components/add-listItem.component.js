import React, { Component } from "react";
import ListItemDataService from "../services/listItem.service";

export default class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDetails = this.onChangeDetails.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeQuantityUnit = this.onChangeQuantityUnit.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeForDate = this.onChangeForDate.bind(this);
    this.onChangeRecipeLink = this.onChangeRecipeLink.bind(this);
    this.saveListItem = this.saveListItem.bind(this);
    this.newListItem = this.newListItem.bind(this);

    this.state = {
      id: null,
      name: "",
      details: "", 
      quantity: "",
      quantityUnit: "",
      priority: "Normal",
      forDate: "",
      recipeLink: "",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDetails(e) {
    this.setState({
      details: e.target.value
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  onChangeQuantityUnit(e) {
    this.setState({
      quantityUnit: e.target.value
    });
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  onChangeForDate(e) {
    this.setState({
      forDate: e.target.value
    });
  }

  onChangeRecipeLink(e) {
    this.setState({
      recipeLink: e.target.value
    });
  }

  saveListItem() {
    var data = {
      name: this.state.name,
      details: this.state.details,
      quantity: this.state.quantity,
      quantityUnit: this.state.quantityUnit,
      priority: this.state.priority,
      forDate: this.state.forDate,
      recipeLink: this.state.recipeLink
    };

    ListItemDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          details: response.data.details,
          quantity: response.data.quantity,
          quantityUnit: response.data.quantityUnit,
          priority: response.data.priority,
          forDate: response.data.forDate,
          recipeLink: response.data.recipeLink,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newListItem() {
    this.setState({
      id: null,
      name: "",
      details: "",
      quantity: "",
      quantityUnit: "",
      priority: "",
      forDate: "",
      recipeLink: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newListItem}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="itemname">Name</label>
              <input
                type="text"
                className="form-control"
                id="itemname"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="itemname"
              />
            </div>

<div className="form-group">
  <label htmlFor="details">Details</label>
  <input
    type="text"
    className="form-control"
    id="details"
    required
    value={this.state.details}
    onChange={this.onChangeDetails}
    name="details"
  />
</div>

<div className="input-group">
  <label htmlFor="quantity">Quantity</label>
  <input
    type="text"
    className="form-control"
    id="quantity"
    required
    value={this.state.quantity}
    onChange={this.onChangeQuantity}
    name="quantity"
  />
    <select id="quantityUnit"
      className="form-control"
      value={this.state.quantityUnit}
      onChange={this.onChangeQuantityUnit}
      name="quantityUnit">
      <option label="" value="" />
      <option label="pound" value="lb" />
      <option label="gram" value="g" />
      <option label="kg" value="kg" />
      <option label="ml" value="ml" />
      <option label="cup(s)" value="cup(s)" />
      <option label="item" value="item" />
      <option label="box" value="box" />
      <option label="bag" value="bag" />
    </select> 
  </div>
             

            <div className="form-group">
              <label htmlFor="priority">Priority </label>
              <select id="priority" 
                className="form-control" 
                value={this.state.priority}
                onChange={this.onChangePriority}
                name="priority">
                <option label="Low" value="Low" />
                <option label="Normal" value="Normal" />
                <option label="High" value="High" />
                <option label="Urgent" value="Urgent" />
              </select> 
            </div>
            

            <div className="form-group">
              <label htmlFor="forDate">Needed for</label>
              <input
                type="text"
                className="form-control"
                id="forDate"
                required
                value={this.state.forDate}
                onChange={this.onChangeForDate}
                name="forDate"
              />
            </div>
            

            <div className="form-group">
              <label htmlFor="recipeLink">Recipe</label>
              <input
                type="text"
                className="form-control"
                id="recipeLink"
                required
                value={this.state.recipeLink}
                onChange={this.onChangeRecipeLink}
                name="recipeLink"
              />
            </div>

            <button onClick={this.saveListItem} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

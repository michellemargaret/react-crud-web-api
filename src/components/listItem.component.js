import React, { Component } from "react";
import ListItemDataService from "../services/listItem.service";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDetails = this.onChangeDetails.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeQuantityUnit = this.onChangeQuantityUnit.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeForDate = this.onChangeForDate.bind(this);
    this.onChangeRecipeLink = this.onChangeRecipeLink.bind(this);
    this.getListItem = this.getListItem.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);

    this.state = {
      currentListItem: {
        _id: null,
        name: "",
        details: "",
        quantity: "",
        quantityUnit: "",
        priority: "",
        forDate: "",
        recipeLink: "",

      },
      message: ""
    };
  }

  componentDidMount() {
    this.getListItem(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentListItem: {
          ...prevState.currentListItem,
          name: name
        }
      };
    });
  }

  onChangeDetails(e) {
    const details = e.target.value;
    
    this.setState(prevState => ({
      currentListItem: {
        ...prevState.currentListItem,
        details: details
      }
    }));
  }

  onChangeQuantity(e) {
    const quantity = e.target.value;
    
    this.setState(prevState => ({
      currentListItem: {
        ...prevState.currentListItem,
        quantity: quantity
      }
    }));
  }

  onChangeQuantityUnit(e) {
    const quantityUnit = e.target.value;
    
    this.setState(prevState => ({
      currentListItem: {
        ...prevState.currentListItem,
        quantityUnit: quantityUnit
      }
    }));
  }

  onChangePriority(e) {
    const priority = e.target.value;
    
    this.setState(prevState => ({
      currentListItem: {
        ...prevState.currentListItem,
        priority: priority
      }
    }));
  }

  onChangeForDate(e) {
    const forDate = e.target.value;
    
    this.setState(prevState => ({
      currentListItem: {
        ...prevState.currentListItem,
        forDate: forDate
      }
    }));
  }

  onChangeRecipeLink(e) {
    const recipeLink = e.target.value;
    
    this.setState(prevState => ({
      currentListItem: {
        ...prevState.currentListItem,
        recipeLink: recipeLink
      }
    }));
  }

  getListItem(id) {
    ListItemDataService.get(id)
      .then(response => {
        this.setState({
          currentListItem: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateListItem() {
    ListItemDataService.update(
      this.state.currentListItem._id,
      this.state.currentListItem
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The list item was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteListItem() {    
    ListItemDataService.delete(this.state.currentListItem._id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/listItems')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentListItem } = this.state;

    return (
      <div>
        {currentListItem ? (
          <div className="edit-form">
            <h4>List Item</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentListItem.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="details">Details</label>
                <input
                  type="text"
                  className="form-control"
                  id="details"
                  value={currentListItem.details}
                  onChange={this.onChangeDetails}
                />
              </div>
              

<div className="input-group">
  <label htmlFor="quantity">Quantity</label>
  <input
    type="text"
    className="form-control"
    id="quantity"
    required
    value={currentListItem.quantity}
    onChange={this.onChangeQuantity}
    name="quantity"
  />
  
  <select id="quantityUnit" 
                className="form-control" 
                value={currentListItem.quantityUnit}
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
                value={currentListItem.priority}
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
                value={currentListItem.forDate}
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
                value={currentListItem.recipeLink}
                onChange={this.onChangeRecipeLink}
                name="recipeLink"
              />
            </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteListItem}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateListItem}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

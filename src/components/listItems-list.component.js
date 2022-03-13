import React, { Component } from "react";
import ListItemDataService from "../services/listItem.service";
import { Link } from "react-router-dom";

export default class ListItemsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveListItems = this.retrieveListItems.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveListItem = this.setActiveListItem.bind(this);
    this.removeAllListItems = this.removeAllListItems.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      listItems: [],
      currentListItem: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveListItems();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  onChangeBought(e) {
    // TODO update current list item to set boughtOnDate to today
    
  }

  retrieveListItems() {
    ListItemDataService.getAll()
      .then(response => {
        this.setState({
          listItems: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveListItems();
    this.setState({
      currentListItem: null,
      currentIndex: -1
    });
  }

  setActiveListItem(listItem, index) {
    this.setState({
      currentListItem: listItem,
      currentIndex: index
    });
  }

  removeAllListItems() {
    ListItemDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentListItem: null,
      currentIndex: -1
    });

    ListItemDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          listItems: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, listItems, currentListItem, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Grocery List</h4>

          <ul className="list-group list-group-flush">
            {listItems &&
              listItems.map((listItem, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onMouseOver={() => this.setActiveListItem(listItem, index)}
                  key={index}
                >
                  
                  <input class="form-check-input" type="checkbox" value="" id="chkBoughtOnDate"></input>
                  <div class="mb-1">{listItem.name}</div>
                  <small>{listItem.quantity} {listItem.quantityUnit} {listItem.details}</small>
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllListItems}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentListItem ? (
            <div>
              <h4>List Item</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentListItem.name}
              </div>
              <div>
                <label>
                  <strong>Details:</strong>
                </label>{" "}
                {currentListItem.details}
              </div>
              <div>
                <label>
                  <strong>Quantity:</strong>
                </label>{" "}
                {currentListItem.quantity} {currentListItem.quantityUnit}
              </div>
              <div>
                <label>
                  <strong>Priority:</strong>
                </label>{" "}
                {currentListItem.priority}
              </div>
              <div>
                <label>
                  <strong>For date:</strong>
                </label>{" "}
                {currentListItem.forDate}
              </div>
              
              <div>
                <label>
                  <strong>For recipe:</strong>
                </label>{" "}
                {currentListItem.recipeLink}
              </div>

              <Link
                to={"/listItems/" + currentListItem._id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a List Item...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

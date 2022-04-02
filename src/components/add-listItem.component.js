import React, { Component } from "react";

export default class AddListItem extends Component {
  render() {
    const {
      onChangeName,
      saveListItem,
      closeNewForm,
      currentListItem,
      itemDictionary,
    } = this.props;
    const {
      onChangeItemDict,
      onChangeDetails,
      onChangeQuantity,
      onChangeQuantityUnit,
      onChangePriority,
      onChangeForDate,
      onChangeRecipeLink,
    } = this.props;

    return (
      <div className="submit-form">
        <table className="table table-sm table-striped p-0 m-0">
          <tbody>
            <tr>
              <td colSpan="2">
                <label htmlFor="itemname" className="figure-caption p-0 m-0">
                  Item
                </label>
              </td>
              <td>
                <label
                  htmlFor="itemcategory"
                  className="figure-caption p-0 m-0"
                >
                  Category
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  autoFocus
                  required
                  value={currentListItem.name}
                  onChange={onChangeName}
                  name="name"
                />
              </td>
              <td>
                <select
                  id="itemDict"
                  className="form-control form-control-sm"
                  onChange={onChangeItemDict}
                  value={
                    currentListItem.listItemDict
                      ? currentListItem.listItemDict._id
                      : ""
                  }
                  name="itemDict"
                >
                  <option label="" value="" />
                  {itemDictionary &&
                    itemDictionary.map((dictItem, index) => (
                      <option
                        label={dictItem.name}
                        value={dictItem._id}
                        key={index}
                      >
                        {dictItem.name}
                      </option>
                    ))}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <label htmlFor="details" className="figure-caption p-0 m-0">
                  Details
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="details"
                  value={currentListItem.details}
                  onChange={onChangeDetails}
                  name="details"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label htmlFor="quantity" className="figure-caption p-0 m-0">
                  Quantity
                </label>
              </td>
              <td>
                <label htmlFor="priority" className="figure-caption p-0 m-0">
                  Priority
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="quantity"
                  value={currentListItem.quantity || ""}
                  onChange={onChangeQuantity}
                  name="quantity"
                />
              </td>
              <td>
                <select
                  id="quantityUnit"
                  className="form-control form-control-sm"
                  value={currentListItem.quantityUnit}
                  onChange={onChangeQuantityUnit}
                  name="quantityUnit"
                >
                  <option label="" value="" />
                  <option label="lb" value="lb">
                    lb
                  </option>
                  <option label="g" value="g">
                    g
                  </option>
                  <option label="kg" value="kg">
                    kg
                  </option>
                  <option label="ml" value="ml">
                    ml
                  </option>
                  <option label="cup(s)" value="cup(s)">
                    cup(s)
                  </option>
                  <option label="item" value="item">
                    item(s)
                  </option>
                  <option label="box" value="box">
                    box(es)
                  </option>
                  <option label="bag" value="bag">
                    bag(s)
                  </option>
                </select>
              </td>
              <td>
                <select
                  id="priority"
                  className="form-control form-control-sm"
                  value={currentListItem.priority}
                  onChange={onChangePriority}
                  name="priority"
                >
                  <option label="" value="" />
                  <option label="Low" value="Low">
                    Low
                  </option>
                  <option label="Normal" value="Normal">
                    Normal
                  </option>
                  <option label="High" value="High">
                    High
                  </option>
                  <option label="Urgent" value="Urgent">
                    Urgent
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="forDate" className="figure-caption p-0 m-0">
                  Date Needed
                </label>
              </td>
              <td colSpan="2">
                <label htmlFor="recipeLink" className="figure-caption p-0 m-0">
                  Recipe (link)
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="forDate"
                  value={currentListItem.forDate || ""}
                  onChange={onChangeForDate}
                  name="forDate"
                />
              </td>
              <td colSpan="2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="recipeLink"
                  value={currentListItem.recipeLink}
                  onChange={onChangeRecipeLink}
                  name="recipeLink"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2" className="text-right">
                <button
                  onClick={saveListItem}
                  className="btn btn-sm btn-success m-1"
                >
                  Save
                </button>
                <button
                  onClick={closeNewForm}
                  className="btn btn-sm btn-success m-1"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class AddListItem extends Component {
  render() {
    const {
      onChangeName,
      saveListItem,
      saveAnotherListItem,
      closeNewForm,
      currentListItem,
      itemDictionary,
      errorMessages,
    } = this.props;
    const { onChangeItemDict, onChangeDetails } = this.props;

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
                  Notes
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
              <td colSpan="3">
                {errorMessages.length > 0 ? (
                  <div className="text-danger small font-weight-bold">
                    Fix the following errors to continue:{" "}
                  </div>
                ) : (
                  ""
                )}
                {errorMessages &&
                  errorMessages.map((errorMessage, index) => (
                    <div className="small text-danger" key={index}>
                      {errorMessage}
                    </div>
                  ))}
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2" className="text-right">
                <button
                  onClick={saveListItem}
                  className="btn btn-sm txt-success m-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </button>
                {currentListItem._id === null ? (
                  <button
                    onClick={saveAnotherListItem}
                    className="btn btn-sm txt-success m-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                ) : null}
                <button
                  onClick={closeNewForm}
                  className="btn btn-sm txt-success m-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

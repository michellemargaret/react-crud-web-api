import React, { Component } from "react";

export default class AddSaleItem extends Component {
  constructor() {
    super();

    this.state = {
      saleItem: {
        store: "",
        details: "",
        price: null,
        startDate: null,
        endDate: null,
      },
    };
  }

  onChangeStore = (e) => {
    const store = e.target.value;

    this.setState((prevState) => ({
      saleItem: {
        ...prevState.saleItem,
        store: store,
      },
    }));
  };

  onChangeDetails = (e) => {
    const details = e.target.value;

    this.setState((prevState) => ({
      saleItem: {
        ...prevState.saleItem,
        details: details,
      },
    }));
  };

  onChangePrice = (e) => {
    const price = e.target.value;

    this.setState((prevState) => ({
      saleItem: {
        ...prevState.saleItem,
        price: price,
      },
    }));
  };

  render() {
    const { onSaveSale, closeSaleForm, errorMessages } = this.props;

    const stores = [
      { key: "Dominion", value: "Dominion" },
      { key: "Pipers", value: "Pipers" },
      { key: "Foodland", value: "Foodland" },
      { key: "Powells", value: "Powells" },
      { key: "Other", value: "Other" },
    ];

    return (
      <div className="submit-form">
        <table className="table table-sm table-striped p-0 m-0">
          <tbody>
            <tr>
              <td>
                <label htmlFor="price" className="figure-caption p-0 m-0">
                  Price
                </label>
              </td>
              <td colSpan="2">
                <label htmlFor="storename" className="figure-caption p-0 m-0">
                  Store
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm w-50"
                  id="price"
                  autoFocus
                  required
                  value={
                    this.state.saleItem.price ? this.state.saleItem.price : ""
                  }
                  onChange={this.onChangePrice}
                  name="price"
                />
              </td>
              <td colSpan="2">
                <select
                  id="storename"
                  value={
                    this.state.saleItem.store ? this.state.saleItem.store : ""
                  }
                  className="form-control form-control-sm"
                  onChange={this.onChangeStore}
                  name="storename"
                >
                  <option label="-- Store --" value="" />
                  {stores &&
                    stores.map((store, index) => (
                      <option label={store.value} value={store.key} key={index}>
                        {store.value}
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
                  required
                  value={
                    this.state.saleItem.details
                      ? this.state.saleItem.details
                      : ""
                  }
                  onChange={this.onChangeDetails}
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
              <td colSpan="3" className="text-right">
                <button
                  onClick={() => onSaveSale(this.state.saleItem)}
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
                <button
                  onClick={closeSaleForm}
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

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

  onChangeStartDate = (e) => {
    const startDate = e.target.value;

    this.setState((prevState) => ({
      saleItem: {
        ...prevState.saleItem,
        startDate: startDate,
      },
    }));
  };

  onChangeEndDate = (e) => {
    const endDate = e.target.value;

    this.setState((prevState) => ({
      saleItem: {
        ...prevState.saleItem,
        endDate: endDate,
      },
    }));
  };

  render() {
    // const {
    //   onChangeQuantity,
    //   onChangeQuantityUnit,
    //   onChangeDetails,
    //   onChangeStartDate,
    //   onChangeEndDate,
    // } = this.props;
    const { onSaveSale, closeSaleForm } = this.props;
    // store, price, quantity, quantityUnit, details, startDate, endDate
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
              <td colSpan="2">
                <label htmlFor="storename" className="figure-caption p-0 m-0">
                  Store
                </label>
              </td>
              <td>
                <label htmlFor="price" className="figure-caption p-0 m-0">
                  Price
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <select
                  id="storename"
                  autoFocus
                  value={
                    this.state.saleItem.store ? this.state.saleItem.store : ""
                  }
                  className="form-control form-control-sm"
                  onChange={this.onChangeStore}
                  name="storename"
                >
                  <option label="" value="" />
                  {stores &&
                    stores.map((store, index) => (
                      <option label={store.value} value={store.key} key={index}>
                        {store.value}
                      </option>
                    ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="price"
                  required
                  value={
                    this.state.saleItem.price ? this.state.saleItem.price : ""
                  }
                  onChange={this.onChangePrice}
                  name="price"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="startDate" className="figure-caption p-0 m-0">
                  Start Date
                </label>
              </td>
              <td>
                <label htmlFor="endDate" className="figure-caption p-0 m-0">
                  End Date
                </label>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="startDate"
                  required
                  value={
                    this.state.saleItem.startDate
                      ? this.state.saleItem.startDate
                      : ""
                  }
                  onChange={this.onChangeStartDate}
                  name="startDate"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="endDate"
                  required
                  value={
                    this.state.saleItem.endDate
                      ? this.state.saleItem.endDate
                      : ""
                  }
                  onChange={this.onChangeEndDate}
                  name="endDate"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <label htmlFor="details" className="figure-caption p-0 m-0">
                  More Details
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
              <td></td>
              <td colSpan="2" className="text-right">
                <button
                  onClick={() => onSaveSale(this.state.saleItem)}
                  className="btn btn-sm btn-success m-1"
                >
                  Save
                </button>
                <button
                  onClick={closeSaleForm}
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

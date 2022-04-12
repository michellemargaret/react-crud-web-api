import React, { Component } from "react";
import AddListItem from "./add-listItem.component";
import AddSaleItem from "./add-saleItem.component";
import Moment from "moment";

export default class ListItemsList extends Component {
  componentDidMount() {}
  getListClasses(listItem) {
    let classes = "list-group-item m-0 p-0";

    // if (listItem.boughtAt != null) {
    //   classes += "list-group-item-success";
    // } else if (listItem.notBuyingAt != null) {
    //   classes += "list-group-item-danger";
    // }

    return classes;
  }

  getBuyClasses(listItem) {
    let classes = "btn-close badge badge-primary";
    return classes;
  }

  getRemoveClasses(listItem) {
    let classes = "btn-close badge badge-";
    classes +=
      listItem.boughtAt == null && listItem.notBuyingAt == null
        ? "danger"
        : "primary";
    return classes;
  }

  getPriorityClass(priority) {
    switch (priority) {
      case "Low":
        return "font-weight-light";
      case "Normal":
        return "";
      case "High":
        return "font-weight-bold";
      case "Urgent":
        return "font-weight-bold text-danger";
      default:
        return "";
    }
  }

  getBoughtButton(onBuy, listItem, index) {
    return (
      <button
        className="btn text-success mr-1"
        aria-label="Bought"
        onClick={() => onBuy(listItem, index)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bag-check"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
      </button>
    );
  }

  getActiveButtons(
    onNotBuying,
    onEdit,
    onAddSale,
    onUpPriority,
    onDownPriority,
    listItem,
    index
  ) {
    return (
      <div>
        <button
          type="button"
          className="btn text-warning mr-0"
          onClick={() => onAddSale(listItem, index)}
          aria-label="Add Sale"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-shop"
            viewBox="0 0 16 16"
          >
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
          </svg>
        </button>

        <button
          type="button"
          className="btn text-dark mr-0"
          onClick={() => onUpPriority(listItem, index)}
          aria-label="Increase Priority"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
            />
          </svg>
        </button>

        <button
          type="button"
          className="btn text-muted mr-0"
          onClick={() => onDownPriority(listItem, index)}
          aria-label="Decrease Priority"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </button>

        {this.getEditButton(onEdit, listItem, index)}
        <button
          type="button"
          className="btn text-danger mr-3"
          onClick={() => onNotBuying(listItem, index)}
          aria-label="Not Buying"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-x"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </button>
      </div>
    );
  }

  getInactiveButtons(onAddBack, listItem, index) {
    return (
      <div>
        <button
          className="btn text-warning mr-3"
          aria-label="Bought"
          onClick={() => onAddBack(listItem, index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-counterclockwise"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
          </svg>
        </button>
      </div>
    );
  }

  getEditButton(onEdit, listItem, index) {
    return (
      <span>
        <button
          className="btn text-primary mr-0"
          aria-label="Edit"
          onClick={() => onEdit(listItem, index)}
          id={"itemID" + listItem._id}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </button>
      </span>
    );
  }

  isActive(listItem) {
    return listItem.boughtAt == null && listItem.notBuyingAt == null;
  }

  hasSaleAtCurrentStore(currentStore, sales) {
    let hasSale = false;
    for (const sale of sales) {
      if (sale.store === currentStore) {
        hasSale = true;
        break;
      }
    }

    if (hasSale) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-bookmark-star text-danger mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
      );
    }
  }

  insertNewItem(thisProps) {
    const {
      currentListItem,
      saveListItem,
      saveAnotherListItem,
      closeNewForm,
      itemDictionary,
      errorMessages,
    } = thisProps;
    const {
      onChangeName,
      onChangeItemDict,
      onChangeDetails,
      onChangeQuantity,
      onChangeQuantityUnit,
      onChangePriority,
      onChangeForDate,
      onChangeRecipeLink,
    } = thisProps;

    return (
      <li className="list-group-item list-group-item-action" key="new">
        <AddListItem
          currentListItem={currentListItem}
          itemDictionary={itemDictionary}
          onChangeName={onChangeName}
          onChangeItemDict={onChangeItemDict}
          saveListItem={saveListItem}
          saveAnotherListItem={saveAnotherListItem}
          onChangeDetails={onChangeDetails}
          onChangeQuantity={onChangeQuantity}
          onChangeQuantityUnit={onChangeQuantityUnit}
          onChangePriority={onChangePriority}
          onChangeForDate={onChangeForDate}
          onChangeRecipeLink={onChangeRecipeLink}
          closeNewForm={closeNewForm}
          errorMessages={errorMessages}
        />
      </li>
    );
  }

  showAddSale(thisProps) {
    const { onSaveSale, closeSaleForm, errorMessages } = thisProps;

    return (
      <li className="list-group-item list-group-item-action" key="new">
        <AddSaleItem
          onSaveSale={onSaveSale}
          closeSaleForm={closeSaleForm}
          errorMessages={errorMessages}
        />
      </li>
    );
  }

  render() {
    const {
      listItems,
      showNewItemForm,
      showAddSaleForm,
      onNotBuying,
      onBuy,
      onAddBack,
      onEdit,
      onAddSale,
      onDeleteSale,
      onUpPriority,
      onDownPriority,
      removeAllListItems,
      highlightStore,
    } = this.props;

    Moment.locale("en");

    return (
      <div className="col-md-6">
        <ul className="">
          {showNewItemForm ? this.insertNewItem(this.props) : ""}
          {showAddSaleForm ? this.showAddSale(this.props) : ""}
          {listItems &&
            listItems.map((listItem, index) => (
              <li className={this.getListClasses(listItem)} key={index}>
                <table>
                  <tbody>
                    <tr>
                      <td width="18">
                        {this.isActive(listItem)
                          ? this.getBoughtButton(onBuy, listItem, index)
                          : this.getInactiveButtons(onAddBack, listItem, index)}
                      </td>
                      <td width="200">
                        <div
                          className={this.getPriorityClass(listItem.priority)}
                        >
                          <div className="d-flex w-200 justify-content-between">
                            <div>{listItem.name}</div>
                            <span className="small">
                              {listItem.listItemDict
                                ? " [" + listItem.listItemDict.aisle + "]"
                                : ""}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="small">
                          {listItem.details ? listItem.details : ""}
                        </div>
                        {listItem.sales &&
                          listItem.sales
                            .sort(function (a, b) {
                              return a.price - b.price;
                            })
                            .map((sale, saleIndex) => (
                              <div
                                key={saleIndex}
                                className={
                                  sale.store === highlightStore
                                    ? "small text-danger font-weight-bold m-0 p-0 align-top"
                                    : "small m-0 p-0 align-top"
                                }
                              >
                                {sale.store}{" "}
                                {sale.price
                                  ? "$" +
                                    parseFloat(sale.price)
                                      .toFixed(2)
                                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                                  : ""}{" "}
                                {sale.details}
                                <button
                                  className="btn text-danger m-0 p-0"
                                  aria-label="Delete Sale"
                                  onClick={() => onDeleteSale(listItem, sale)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-x mb-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                      </td>
                    </tr>
                    {highlightStore === "buildList" ? (
                      <tr>
                        <td colSpan="2">
                          {this.isActive(listItem)
                            ? this.getActiveButtons(
                                onNotBuying,
                                onEdit,
                                onAddSale,
                                onUpPriority,
                                onDownPriority,
                                listItem,
                                index
                              )
                            : ""}
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          hidden
          onClick={removeAllListItems}
        >
          Remove All
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class SubNavBar extends Component {
  render() {
    const {
      activeCount,
      activeType,
      boughtCount,
      boughtType,
      notBuyingCount,
      notBuyingType,
      onClick,
      aisleSort,
      prioritySort,
      nameSort,
      setSort,
      highlightStore,
      onChangeStore,
      addNew,
      currentListType,
      currentSortType,
    } = this.props;

    const stores = [
      { key: "Dominion", value: "Dominion" },
      { key: "Pipers", value: "Pipers" },
      { key: "Foodland", value: "Foodland" },
      { key: "Powells", value: "Powells" },
      { key: "Other", value: "Other" },
    ];

    return (
      <div>
        <div>
          <span className="float-end">
            <button
              className={
                currentListType === activeType
                  ? "btn text-light mr-2 btn-primary"
                  : "btn text-primary mr-2 "
              }
              aria-label="List"
              onClick={() => onClick(activeType)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-card-list m-1"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
              {activeCount}
            </button>
          </span>
          <span className="float-end">
            <button
              className={
                currentListType === boughtType
                  ? "btn text-light mr-2 btn-success"
                  : "btn text-success mr-2 "
              }
              aria-label="Bought"
              onClick={() => onClick(boughtType)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag-check m-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              {boughtCount}
            </button>
          </span>
          <span className="float-end">
            <button
              type="button"
              onClick={() => onClick(notBuyingType)}
              className={
                currentListType === notBuyingType
                  ? "btn text-light mr-2 btn-danger"
                  : "btn text-danger mr-2 "
              }
              aria-label="Not Buying"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag-x m-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              {notBuyingCount}
            </button>
          </span>
          <span className="float-end">
            <button
              type="button"
              onClick={() => addNew()}
              className="btn text-primary mr-2"
              aria-label="Add New Item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
              </svg>
            </button>
          </span>
        </div>
        <div>
          <span className="m-3">Sort by</span>
          <button
            className={
              currentSortType === aisleSort
                ? "btn text-light mr-2 btn-secondary"
                : "btn btn-outline-secondary m-2"
            }
            onClick={() => setSort("aisle")}
          >
            Aisle
          </button>
          <button
            className={
              currentSortType === prioritySort
                ? "btn text-light mr-2 btn-secondary"
                : "btn btn-outline-secondary m-2"
            }
            onClick={() => setSort("priority")}
          >
            Priority
          </button>
          <button
            className={
              currentSortType === nameSort
                ? "btn text-light mr-2 btn-secondary"
                : "btn btn-outline-secondary m-2"
            }
            onClick={() => setSort("name")}
          >
            Name
          </button>
        </div>
        <div>
          Current Store:
          <select
            id="highlightStore"
            value={highlightStore ? highlightStore : ""}
            className="form-control form-control-sm w-50"
            onChange={onChangeStore}
            name="highlightStore"
          >
            <option label="None" value="" />
            {stores &&
              stores.map((store, index) => (
                <option label={store.value} value={store.key} key={index}>
                  {store.value}
                </option>
              ))}
          </select>
        </div>
      </div>
    );
  }
}

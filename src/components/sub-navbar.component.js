import React, { Component } from "react";

export default class SubNavBar extends Component {
  getSortClass(activeSort, thisSort) {
    if (activeSort === thisSort) {
      return "btn text-light btn-primary";
    }

    return "btn text-secondary";
  }

  render() {
    const {
      aisleSort,
      prioritySort,
      nameSort,
      setSort,
      highlightStore,
      onChangeStore,
      addNew,
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
      <div className="row">
        <div className="col">
          <button
            type="button"
            onClick={() => addNew()}
            className="btn text-primary mr-2"
            aria-label="Add New Item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-file-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
            </svg>
          </button>
        </div>
        <div className="col-6">
          <button
            className={this.getSortClass(currentSortType, aisleSort)}
            onClick={() => setSort("aisle")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-sort-down"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
            </svg>
          </button>
          <button
            className={this.getSortClass(currentSortType, nameSort)}
            onClick={() => setSort("name")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-sort-alpha-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
              />
              <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
            </svg>
          </button>
          <button
            className={this.getSortClass(currentSortType, prioritySort)}
            onClick={() => setSort("priority")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-sort-numeric-down"
              viewBox="0 0 16 16"
            >
              <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
              <path
                fillRule="evenodd"
                d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
            </svg>
          </button>
        </div>
        <div className="col">
          <select
            id="highlightStore"
            value={highlightStore ? highlightStore : ""}
            className="form-control form-control-sm"
            onChange={onChangeStore}
            name="highlightStore"
          >
            <option label="-- Update List --" value="buildList">
              -- Write List --
            </option>
            <option label="-- Shopping At --" value="">
              -- Shopping At --
            </option>
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

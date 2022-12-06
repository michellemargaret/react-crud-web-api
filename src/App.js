import React, { Component } from "react";
import ListItemDataService from "./services/listItem.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListItemsList from "./components/listItems-list.component";
import SubNavBar from "./components/sub-navbar.component.js";
import SubBottomNavBar from "./components/sub-bottomnavbar.component.js";

class ListType {
  static Active = new ListType("active");
  static Bought = new ListType("bought");
  static NotBuying = new ListType("notbuying");
  static All = new ListType("all");

  constructor(name) {
    this.name = name;
  }
}

class SortType {
  static Aisle = new SortType("aisle");
  static Priority = new SortType("priority");
  static Name = new SortType("name");

  constructor(name) {
    this.name = name;
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      listItems: [],
      itemDictionary: [],
      currentIndex: -1,
      currentListType: ListType.Active,
      currentSortType: SortType.Name,
      showNewItemForm: false,
      showAddSaleForm: false,
      highlightStore: "buildList",
      focusOn: null,
      errorMessages: [],

      currentListItem: {
        _id: null,
        name: "",
        listItemDict: null,
        details: "",
        quantity: "",
        quantityUnit: "",
        priority: "",
        forDate: "",
        recipeLink: "",
        boughtAt: null,
        notBuyingAt: null,
        sales: [],
      },
    };
  }

  onChangeName = (e) => {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentListItem: {
          ...prevState.currentListItem,
          name: name,
        },
      };
    });
  };

  onChangeItemDict = (e) => {
    const itemDictID = e.target.value;
    const newItemDict = this.state.itemDictionary.find(
      (c) => c._id === itemDictID
    );

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        listItemDict: newItemDict,
      },
    }));
  };

  onChangeDetails = (e) => {
    const details = e.target.value;

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        details: details,
      },
    }));
  };

  onChangeQuantity = (e) => {
    const quantity = e.target.value;

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        quantity: quantity,
      },
    }));
  };

  onChangeQuantityUnit = (e) => {
    const quantityUnit = e.target.value;

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        quantityUnit: quantityUnit,
      },
    }));
  };

  saveListItem = () => {
    if (this.validateListItem("listItem", null) === 0) {
      this.updateListItem(this.state.currentListItem, this.state.currentIndex);
      this.closeNewForm();
    }
  };

  saveAnotherListItem = () => {
    if (this.validateListItem("listItem", null) === 0) {
      this.updateListItem(this.state.currentListItem, this.state.currentIndex);
      this.addNew();

      this.setState({
        focusOn: document.getElementById("name"),
      });
    }
  };

  validateListItem(inType, inItem) {
    let errorMessages = [];

    if (inType === "listItem") {
      if (this.state.currentListItem.name === "") {
        errorMessages.push("Item is required.");
      }

      if (this.state.currentListItem.listItemDict === null) {
        errorMessages.push("Category is required.");
      }
    } else if (inType === "sale") {
      if (inItem.store === "") {
        errorMessages.push("Store is required.");
      }

      var regex = "[0-9]+(.[0-9][0-9])?$";
      if (!(inItem.price && inItem.price.match(regex))) {
        errorMessages.push("Price is required.");
      }
    }
    this.setState({
      errorMessages: errorMessages,
    });

    return errorMessages.length;
  }

  componentDidMount() {
    this.retrieveListItems();
  }

  componentDidUpdate() {
    if (this.state.focusOn != null) {
      this.state.focusOn.focus();
      this.setState({
        focusOn: null,
      });
    }
  }

  retrieveListItems = () => {
    ListItemDataService.getAll()
      .then((response) => {
        this.setState({
          listItems: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  retrieveItemDictionary = () => {
    if (this.state.itemDictionary.length === 0) {
      ListItemDataService.getItemDictionary()
        .then((response) => {
          this.setState({
            itemDictionary: response.data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  refreshList = () => {
    this.retrieveListItems();

    if (this.state.currentListItem._id === null) {
      this.setState({
        //  currentListItem: null,
        currentIndex: -1,
      });
    }
  };

  editItem = (listItem, index) => {
    this.retrieveItemDictionary();
    this.setState({
      currentListItem: listItem,
      currentIndex: index,
      showNewItemForm: true,
      errorMessages: [],
    });
  };

  addNew = () => {
    this.setState({
      currentListItem: {
        _id: null,
        name: "",
        listItemDict: null,
        details: "",
        quantity: "",
        quantityUnit: "",
        priority: "",
        forDate: "",
        recipeLink: "",
        boughtAt: null,
        notBuyingAt: null,
        sales: [],
      },
      currentIndex: -1,
      showNewItemForm: true,
      errorMessages: [],
    });
    this.retrieveItemDictionary();
  };

  closeNewForm = () => {
    this.setState({
      focusOn: document.getElementById(
        "itemID" + this.state.currentListItem._id
      ),
      currentListItem: {
        _id: null,
        name: "",
        listItemDict: null,
        details: "",
        quantity: "",
        quantityUnit: "",
        priority: "",
        forDate: "",
        recipeLink: "",
        boughtAt: null,
        notBuyingAt: null,
      },
      showNewItemForm: false,
      errorMessages: [],
    });
  };

  closeSaleForm = () => {
    this.setState({
      showAddSaleForm: false,
      focusOn: document.getElementById(
        "itemID" + this.state.currentListItem._id
      ),
    });
  };

  buyItem = (listItem, index) => {
    listItem.boughtAt = new Date();
    this.updateListItem(listItem, index);
  };

  notBuying = (listItem, index) => {
    listItem.notBuyingAt = new Date();
    this.updateListItem(listItem, index);
  };

  addBack = (listItem, index) => {
    listItem.boughtAt = null;
    listItem.notBuyingAt = null;
    this.updateListItem(listItem, index);
  };

  upPriority = (listItem, index) => {
    listItem.priority = this.changePriority(listItem.priority, "up");
    this.updateListItem(listItem, index);
  };

  downPriority = (listItem, index) => {
    listItem.priority = this.changePriority(listItem.priority, "down");
    this.updateListItem(listItem, index);
  };

  setListType = (listType) => {
    this.setState({
      currentListType: listType,
    });
  };

  onChangeStore = (e) => {
    const highlightStore = e.target.value;

    this.setState({
      highlightStore: highlightStore,
    });
  };

  setSort = (inSortType) => {
    let currentSortType = SortType.Name;
    switch (inSortType) {
      case "aisle":
        currentSortType = SortType.Aisle;
        break;
      case "priority":
        currentSortType = SortType.Priority;
        break;
      default:
        currentSortType = SortType.Name;
        break;
    }

    this.setState({
      currentSortType: currentSortType,
    });
  };

  changePriority(currentPriority, direction) {
    if (direction === "up") {
      switch (currentPriority) {
        case "Low":
          return "Normal";
        case "Normal":
          return "High";
        case "High":
          return "Urgent";
        case "Urgent":
          return "Urgent";
        default:
          return "High";
      }
    } else {
      switch (currentPriority) {
        case "Low":
          return "Low";
        case "Normal":
          return "Low";
        case "High":
          return "Normal";
        case "Urgent":
          return "High";
        default:
          return "Low";
      }
    }
  }

  // Update state without waiting on backend to update
  updateListItem(listItem, index) {
    let listItems = this.state.listItems;

    if (index < 0) {
      listItems.push(listItem);

      ListItemDataService.create(listItem)
        .then((response) => {})
        .catch((e) => {
          console.log(e);
        });
    } else {
      listItems[listItems.findIndex((c) => c._id === listItem._id)] = listItem;

      ListItemDataService.update(listItem._id, listItem)
        .then((response) => {})
        .catch((e) => {
          console.log(e);
        });
    }

    this.setState({
      listItems: listItems,
      currentIndex: null,
    });
  }

  removeAllListItems = () => {
    ListItemDataService.deleteAll()
      .then((response) => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  addSale = (listItem, index) => {
    this.setState({
      currentListItem: listItem,
      showAddSaleForm: true,
    });
  };

  saveSale = (saleItem) => {
    if (this.validateListItem("sale", saleItem) === 0) {
      this.closeSaleForm();

      let listItem = this.state.currentListItem;
      listItem.sales.push(saleItem);

      let listItems = this.state.listItems;
      listItems[listItems.findIndex((c) => c._id === listItem._id)] = listItem;

      this.setState({
        listItems: listItems,
      });

      ListItemDataService.createSale(this.state.currentListItem._id, saleItem)
        .then((response) => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  deleteSale = (listItem, saleItem) => {
    listItem.sales.splice(
      listItem.sales.findIndex((c) => c._id === saleItem._id),
      1
    );

    let listItems = this.state.listItems;

    listItems[listItems.findIndex((c) => c._id === listItem._id)] = listItem;

    this.setState({
      listItems: listItems,
    });

    ListItemDataService.deleteSale(listItem._id, saleItem._id)
      .then((response) => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  filterListItems(listType, sortType, listItems) {
    let filteredListItems = {};
    switch (listType) {
      case ListType.Active:
        filteredListItems = listItems.filter(
          (c) => (c.boughtAt == null) & (c.notBuyingAt == null)
        );
        break;
      case ListType.Bought:
        filteredListItems = listItems.filter((c) => c.boughtAt !== null);
        break;
      case ListType.NotBuying:
        filteredListItems = listItems.filter((c) => c.notBuyingAt !== null);
        break;
      case ListType.All:
        filteredListItems = listItems;
        break;
      default:
        filteredListItems = listItems.filter(
          (c) => (c.boughtAt == null) & (c.notBuyingAt == null)
        );
    }

    switch (sortType) {
      case SortType.Aisle:
        return filteredListItems.sort(function (a, b) {
          if (a.listItemDict && b.listItemDict) {
            return a.listItemDict.aisleSort - b.listItemDict.aisleSort;
          } else if (a.listItemDict) {
            return -1;
          } else {
            return 1;
          }
        });
      case SortType.Name:
        return filteredListItems.sort(function (a, b) {
          if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
          return 1;
        });
      case SortType.Priority:
        var prioritySort = [];
        prioritySort["Low"] = 4;
        prioritySort[""] = 3;
        prioritySort["Normal"] = 3;
        prioritySort["High"] = 2;
        prioritySort["Urgent"] = 1;

        return filteredListItems.sort(function (a, b) {
          return prioritySort[a.priority] - prioritySort[b.priority];
        });
      default:
        return filteredListItems.sort(function (a, b) {
          return a.name - b.name;
        });
    }
  }

  countListItems(listType, listItems) {
    switch (listType) {
      case ListType.Active:
        return listItems.filter(
          (c) => (c.boughtAt == null) & (c.notBuyingAt == null)
        ).length;
      case ListType.Bought:
        return listItems.filter((c) => c.boughtAt !== null).length;
      case ListType.NotBuying:
        return listItems.filter((c) => c.notBuyingAt !== null).length;
      case ListType.All:
        return listItems.length;
      default:
        return listItems.filter(
          (c) => (c.boughtAt == null) & (c.notBuyingAt == null)
        ).length;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="fixed-top bg-dark">
          <SubNavBar
            aisleSort={SortType.Aisle}
            prioritySort={SortType.Priority}
            nameSort={SortType.Name}
            setSort={this.setSort}
            addNew={this.addNew}
            highlightStore={this.state.highlightStore}
            onChangeStore={this.onChangeStore}
            currentSortType={this.state.currentSortType}
          />
        </div>

        <div className="pt-55">
          <ListItemsList
            listItems={this.filterListItems(
              this.state.currentListType,
              this.state.currentSortType,
              this.state.listItems
            )}
            currentListItem={this.state.currentListItem}
            currentIndex={this.state.currentIndex}
            itemDictionary={this.state.itemDictionary}
            onBuy={this.buyItem}
            onNotBuying={this.notBuying}
            onAddBack={this.addBack}
            onEdit={this.editItem}
            onAddSale={this.addSale}
            onDeleteSale={this.deleteSale}
            onUpPriority={this.upPriority}
            onDownPriority={this.downPriority}
            editItemID={this.state.editItemID}
            showNewItemForm={this.state.showNewItemForm}
            showAddSaleForm={this.state.showAddSaleForm}
            onSaveSale={this.saveSale}
            closeSaleForm={this.closeSaleForm}
            onCancelNew={this.closeNewForm}
            onChangeName={this.onChangeName}
            listItem={this.state.currentListItem}
            newListItem={this.newListItem}
            saveListItem={this.saveListItem}
            saveAnotherListItem={this.saveAnotherListItem}
            onChangeItemDict={this.onChangeItemDict}
            onChangeDetails={this.onChangeDetails}
            onChangeQuantity={this.onChangeQuantity}
            onChangeQuantityUnit={this.onChangeQuantityUnit}
            onChangePriority={this.onChangePriority}
            onChangeForDate={this.onChangeForDate}
            onChangeRecipeLink={this.onChangeRecipeLink}
            removeAllListItems={this.removeAllListItems}
            closeNewForm={this.closeNewForm}
            highlightStore={this.state.highlightStore}
            errorMessages={this.state.errorMessages}
          />
        </div>

        <div className="footer fixed-bottom bg-dark">
          <SubBottomNavBar
            activeCount={this.countListItems(
              ListType.Active,
              this.state.listItems
            )}
            activeType={ListType.Active}
            notBuyingCount={this.countListItems(
              ListType.NotBuying,
              this.state.listItems
            )}
            notBuyingType={ListType.NotBuying}
            boughtCount={this.countListItems(
              ListType.Bought,
              this.state.listItems
            )}
            boughtType={ListType.Bought}
            onClick={this.setListType}
            addNew={this.addNew}
            currentListType={this.state.currentListType}
          />
        </div>
      </div>
    );
  }
}

export default App;

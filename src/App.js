import React, { Component } from "react";
import ListItemDataService from "./services/listItem.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListItemsList from "./components/listItems-list.component";
import SubNavBar from "./components/sub-navbar.component.js";

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
      highlightStore: "Powells",

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

  onChangePriority = (e) => {
    const priority = e.target.value;

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        priority: priority,
      },
    }));
  };

  onChangeForDate = (e) => {
    const forDate = e.target.value;

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        forDate: forDate,
      },
    }));
  };

  onChangeRecipeLink = (e) => {
    const recipeLink = e.target.value;

    this.setState((prevState) => ({
      currentListItem: {
        ...prevState.currentListItem,
        recipeLink: recipeLink,
      },
    }));
  };

  saveListItem = () => {
    if (this.state.currentListItem._id === null) {
      ListItemDataService.create(this.state.currentListItem)
        .then((response) => {
          this.refreshList();
          this.closeNewForm();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      ListItemDataService.update(
        this.state.currentListItem._id,
        this.state.currentListItem
      )
        .then((response) => {
          this.refreshList();
          this.closeNewForm();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  componentDidMount() {
    this.retrieveListItems();
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
    ListItemDataService.getItemDictionary()
      .then((response) => {
        this.setState({
          itemDictionary: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  refreshList = () => {
    this.retrieveListItems();
    this.setState({
      //  currentListItem: null,
      currentIndex: -1,
    });
  };

  editItem = (listItem, index) => {
    ListItemDataService.get(listItem._id)
      .then((response) => {
        this.setState({
          currentListItem: response.data,
          showNewItemForm: true,
        });

        this.retrieveItemDictionary();
      })
      .catch((e) => {
        console.log(e);
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
      },
      showNewItemForm: true,
    });
    this.retrieveItemDictionary();
  };

  closeNewForm = () => {
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
      },
      showNewItemForm: false,
    });
  };

  closeSaleForm = () => {
    this.setState({
      showAddSaleForm: false,
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

  updateListItem(listItem, index) {
    ListItemDataService.update(listItem._id, listItem)
      .then((response) => {
        this.retrieveListItems();
      })
      .catch((e) => {
        console.log(e);
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
    ListItemDataService.createSale(this.state.currentListItem._id, saleItem)
      .then((response) => {
        this.closeSaleForm();
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  deleteSale = (listItem, saleItem) => {
    ListItemDataService.deleteSale(listItem._id, saleItem._id)
      .then((response) => {
        this.closeSaleForm();
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
          return a.listItemDict.aisleSort - b.listItemDict.aisleSort;
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
      <div>
        <div className="container mt-3">
          <SubNavBar
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
            aisleSort={SortType.Aisle}
            prioritySort={SortType.Priority}
            nameSort={SortType.Name}
            setSort={this.setSort}
            highlightStore={this.state.highlightStore}
            onChangeStore={this.onChangeStore}
            addNew={this.addNew}
            currentListType={this.state.currentListType}
            currentSortType={this.state.currentSortType}
          />
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
            editItemID={this.state.editItemID}
            onSaveNew={this.refreshList}
            showNewItemForm={this.state.showNewItemForm}
            showAddSaleForm={this.state.showAddSaleForm}
            onSaveSale={this.saveSale}
            closeSaleForm={this.closeSaleForm}
            onCancelNew={this.closeNewForm}
            onChangeName={this.onChangeName}
            listItem={this.state.currentListItem}
            newListItem={this.newListItem}
            saveListItem={this.saveListItem}
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
          />
        </div>
      </div>
    );
  }
}

export default App;

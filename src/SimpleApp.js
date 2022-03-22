import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SupSimpleForm from "./components/sup-simple-form.js";

class SimpleApp extends Component {

constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  

onChangeTitle = (e) => {
    console.log("onChangeTitle");
  this.setState({
    title: e.target.value
  });
}
onSaveTutorial = () => {
    console.log("saveTutorial", this.state.title);
  var data = {
    title: this.state.title
  };
}    

  render() {
    return (
      <div>

<div className="container mt-3">

  <SupSimpleForm 
                title={this.state.title}
                onChangeTitle={this.onChangeTitle}
                onSaveTutorial={this.onSaveTutorial}
  />
  
</div>
      </div>
    );
  }
}

export default SimpleApp;

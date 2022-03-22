import React, { Component } from "react";

import SimpleForm from "../components/simple-form.js";


export default class SupSimpleForm extends Component {
    
    render() {
        const { onChangeTitle, onSaveTutorial, title } = this.props;
      return (
        <div className="list row">
          <div className="col-md-6">
              <SimpleForm
                title={title}
                onChangeTitle={onChangeTitle}
                onSaveTutorial={onSaveTutorial}
                />
            </div>
        </div>
      );
    }
  }
  
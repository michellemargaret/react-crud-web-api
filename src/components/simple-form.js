import React, { Component } from "react";


export default class SimpleForm extends Component {
    
      render() {
          const { onChangeTitle, onSaveTutorial, title } = this.props;
        return (
          <div className="submit-form">
              <div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={title}
                    onChange={onChangeTitle}
                    name="title"
                  />
                </div>
    
                <button onClick={onSaveTutorial} className="btn btn-success">
                  Submit
                </button>
              </div>
          </div>
        );
      }
    
}

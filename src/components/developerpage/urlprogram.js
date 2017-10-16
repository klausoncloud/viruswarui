import React, { Component } from 'react';

import GameServer from './../../actions/gameserver';
import * as STATUS from './../../model/externalprogramstatus';

class UrlProgram extends Component {

  handleTestRequest() {
  	let programURL = document.getElementById("basic-url").value;

    this.props.onTestButtonClick(programURL);
  }

  handleAddRequest() {
    let programURL = document.getElementById("basic-url").value;

    this.props.onAddButtonClick(programURL);
  }

  handleInputChange() {
    if (this.props.urlProgramStatus !== undefined) {
      this.props.onClearTestResults();
    }
  }

  renderAlert(urlProgramStatus) {
    
    let alertNeeded = false;
    let alertText = "Oh no! There should not be an alert.";
    let alertClass = "";

    switch (urlProgramStatus) {
      case STATUS.URL_PROGRAM_TEST_OK:
        alertNeeded = true;
        alertClass = "alert alert-success";
        alertText = "The program passed the test. You can add it.";
        break;
      case STATUS.URL_PROGRAM_TEST_FAILURE:
        alertNeeded = true;
        alertClass = "alert alert-warning";
        alertText = "The program failed the test (" + this.props.urlProgramMessage + ").";
        break;
      case STATUS.URL_PROGRAM_ADD_OK:
        alertNeeded = true;
        alertClass = "alert alert-success";
        alertText = "The program has been added. Play a few rounds to see how it does.";
        break;
      case STATUS.URL_PROGRAM_ADD_FAILURE:
        alertNeeded = true;
        alertClass = "alert alert-failure";
        alertText =  "The program was not added. Something went wrong (" + this.props.urlProgramMessage + ").";
        break;
      default:  // Render nothing.
    }

    if (alertNeeded) {

      return (

        <div className="col-10 mt-2">
          <div className={ alertClass } role="alert">
            { alertText }
          </div>
        </div>

      );
    };
  }

  renderAddButton() {
    if (this.props.urlProgramStatus !== undefined && 
        this.props.urlProgramStatus === STATUS.URL_PROGRAM_TEST_OK) {

      return(

        <div className="col-2">
          <button className="btn btn-success" type="button"
            onClick={ () => { this.handleAddRequest() } }>Add Program
          </button>
        </div>

      );

    } else {

      return(

        <div className="col-2">
          <button className="btn btn-success" type="button"
            disabled
            onClick={ () => { this.handleAddRequest() } }>Add Program
          </button>
        </div>

      );

    }
  }

  render() {
    return (
      <div className="container row align-items-end">
        <div className="col-10">
          <label htmlFor="basic-url">Your program server URL</label>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon3">http://example.com:3000/</span>
            <input type="url" className="form-control" id="basic-url" aria-describedby="basic-addon3"
              defaultValue = { this.props.urlProgramURL }
              onInput = { () => { this.handleInputChange() } }
            >
            </input>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" 
                onClick={ () => { this.handleTestRequest() } }>Test It!
              </button>
            </span>
          </div>
        </div>

        { this.renderAddButton() }

        { this.renderAlert(this.props.urlProgramStatus) }
        
      </div>
    );
  }
}

export default UrlProgram;
import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/github';

import * as STATUS from './../../model/externalprogramstatus';

class CodeProgram extends Component {

  onChange(newValue) {
  	if (this.props.codeProgramStatus !== undefined) {

  	  // compare submitted code and code in the editor.
  	  // If dfferent, then force a new test.
      this.props.onClearTestResults();
    }
    this.props.storeCodeEditorCode(newValue);
  }

  handleTestRequest() {
  	console.log(this.code);
    this.props.onTestButtonClick(this.props.codeEditorCode);
  }

  handleExampleRequest() {
    this.props.onExampleButtonClick();
  }

  handleAddRequest() {
    this.props.onAddButtonClick(this.props.codeEditorCode);
  }

  renderAlert(codeProgramStatus) {

    let alertNeeded = false;
    let alertText = "Oh no! There should not be an alert.";
    let alertClass = "";

    switch (codeProgramStatus) {
      case STATUS.CODE_PROGRAM_TEST_OK:
        alertNeeded = true;
        alertClass = "alert alert-success";
        alertText = "The program passed the test. You can add it.";
        break;
      case STATUS.CODE_PROGRAM_TEST_FAILURE:
        alertNeeded = true;
        alertClass = "alert alert-warning";
        alertText = "The program failed the test (" + this.props.codeProgramMessage + ").";
        break;
      case STATUS.CODE_PROGRAM_ADD_OK:
        alertNeeded = true;
        alertClass = "alert alert-success";
        alertText = "The program has been added. Play a few rounds to see how it does.";
        break;
      case STATUS.CODE_PROGRAM_ADD_FAILURE:
        alertNeeded = true;
        alertClass = "alert alert-failure";
        alertText =  "The program was not added. Something went wrong (" + this.props.codeProgramMessage + ").";
        break;
      default:  // Render nothing.
    }

    if (alertNeeded) {

      return (

        <div className="col-12 mt-2">
          <div className={ alertClass } role="alert">
            { alertText }
          </div>
        </div>

      );
    };
  }

  renderAddButton() {
    if (this.props.codeProgramStatus !== undefined && 
        this.props.codeProgramStatus === STATUS.CODE_PROGRAM_TEST_OK) {

      return(
          <button className="btn btn-success" type="button"
            onClick={ () => { this.handleAddRequest() } }>Add Program
          </button>
      );

    } else {

       return(
          <button className="btn btn-success" type="button"
            disabled
            onClick={ () => { this.handleAddRequest() } }>Add Program
          </button>
      );

    }
  }

  render() {
    return (
      <div className="container row">
        <div className="col-9">
          <AceEditor
            mode="python"
            theme="github"
            onChange={(newValue)=>{ this.onChange(newValue) } }
            name="codeEditor"
            value={ this.props.codeEditorCode }
            width="100%"
            showPrintMargin= { false }
          />
         </div>

        <div className="col-auto">
          <div className="row">
          <button className="btn btn-primary" type="button"
            onClick={ () => { this.handleExampleRequest() } }>
            Example
          </button>
          </div>
          <div className="row">
          <button className="btn btn-primary btn-block mt-4" type="button"
            onClick={ () => { this.handleTestRequest() } }>
            Test It!
          </button>
          </div>
        </div>
        <div className="col-auto">
          { this.renderAddButton() }
        </div>

        { this.renderAlert(this.props.codeProgramStatus) }

      </div>
    );
  }
}

export default CodeProgram;
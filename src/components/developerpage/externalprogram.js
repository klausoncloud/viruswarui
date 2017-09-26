import React, { Component } from 'react';

class ExternalProgram extends Component {

  handleTestRequest() {
  	let programURL = document.getElementById("basic-url").value;

    this.props.onTestButtonClick(programURL);
  }

  handleAddRequest() {
    let programURL = document.getElementById("basic-url").value;

    this.props.onAddButtonClick(programURL);
  }

  renderAlert(externalProgramStatus) {

  	switch (externalProgramStatus) {
  		case "testSuccess":
  		  return (
  		  	<div className="alert alert-success" role="alert">
               The program passed the test. You can add it.
            </div>
  		  );
  		//break;
  		case "testFailure":
  		  return (
  		  	<div className="alert alert-warning" role="alert">
               The program failed the test. Some debugging is needed.
            </div>
  		  );
  		//break;
  		case "addedSuccess":
  		  return (
  		  	<div className="alert alert-success" role="alert">
               The program has been added. Play a few rounds to see how it does.
            </div>
  		  );
  		//break;
  		case "addedFailure":
  		  return (
  		  	<div className="alert alert-failure" role="alert">
               The program was not added. Something went wrong.
            </div>
  		  );
  		//break;
  		default:
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
              defaultValue = { this.props.externalProgramURL }
            >
            </input>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" 
                onClick={ () => { this.handleTestRequest() } }>Test It!
              </button>
            </span>
          </div>

          { this.renderAlert(this.props.externalProgramStatus) }

        </div>
        <div className="col-2">
          <button className="btn btn-success" type="button" 
            onClick={ () => { this.handleAddRequest() } }>Add Program
          </button>
        </div>
      </div>
    );
  }
}

export default ExternalProgram;
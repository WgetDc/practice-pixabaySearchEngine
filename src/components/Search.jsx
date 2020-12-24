import React, { Component } from "react";

class Search extends Component {
  handleSearch = React.createRef();
  sendData = (e) => {    
    e.preventDefault();
    this.props.word(this.handleSearch.current.value)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.sendData}>
          <div className="row">
            <div className="form-group col-8">
              <input
                ref={this.handleSearch}
                className="form-control"
                type="text"
                placeholder="Enter a word. Example: Space"
              />
            </div>
            <div className="form-group col-4 d-grid">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;

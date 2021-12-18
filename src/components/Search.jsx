import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { search: '' }
  }

  handleSubmit = () => {
    this.props.onSearchChange(this.state.search)
  }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <input
              placeholder="Search Movies..."
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export { Search }

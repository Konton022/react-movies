import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'all',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchChange(this.state);
    };

    handleFilter = (event) => {
        event.preventDefault();
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.onSearchChange(this.state);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <form className='col s12' onSubmit={this.handleSubmit}>
                    <div className='input-field col s12'>
                        <input
                            placeholder='Search Movies...'
                            type='search'
                            className='validate'
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                        />
                        <button className='btn search-btn' type='submit'>
                            Search
                        </button>
                    </div>
                    <div>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export { Search };

import React, { useState } from 'react';

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearchChange(search, type);
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        onSearchChange(search, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <form className='col s12' onSubmit={handleSubmit}>
                <div className='input-field col s12'>
                    <input
                        placeholder='Search Movies...'
                        type='search'
                        className='validate'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </form>
        </div>
    );
};

export { Search };

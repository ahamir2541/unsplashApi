import React, { Component } from 'react';

class SearchBar extends Component {

    state ={
        term : ''
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.setState({
            term : '' 
        })
        this.props.onSubmit(this.state.term)
    }
    onInputChange = (event) => {
        this.setState({
            term : event.target.value 
        })
        
    }
    render() {
        return (
            <div className="card">
                <form 
                onSubmit={this.onFormSubmit}
                className="p-3">
                    <div>
                        <label>Images Search</label>
                        <input 
                        value={this.state.term}
                        onChange={this.onInputChange} placeholder="Search" className="form-control" type="text"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
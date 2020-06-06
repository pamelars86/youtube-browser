import React from 'react';


class SearchBar extends React.Component {
    state = { term: ''}

    // use arrow function because this is a callback function
    onInputChange = (event) =>{
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) =>{
        event.preventDefault(); //avoid page load automatically

        // callback from parent component
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            // onChange={ e => this.setState({ term: e.target.value})}
                        />
                    </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;
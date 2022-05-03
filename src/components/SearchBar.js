import React from "react";

class SearchBar extends React.Component {

    //Prvi nacin za ispravku greske u onForm submit
    //Error message this (undefined state) fix
    // constructor() {
    //    this.onFormSubmit = this.onFormSubmit.bind(this);
    //}

    state = { term: ''};

    //drugi nacin za ispravku greske dodati funkciju sa strelicom
    onFormSubmit = (event) => {
        event.preventDefault();
        
        //props u class componenti ide sa this
        //   props je vrednost ovog this u funkciji
        this.props.runMeSubmit(this.state.term);

        //Ne moze ovako izbacuje error undefined state
        //console.log(this.state.term);
    }

    render () {
        return (
             <div className="ui segment">
                 <form onSubmit={this.onFormSubmit} className="ui form">
                     <div className="field">
                         <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value})}/>
                     </div>
                 </form>
             </div>
        );
    }
}

export default SearchBar;
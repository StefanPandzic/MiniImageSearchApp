import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

    state = { images: [] };

    //callback function
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term}
        });

    //ovo this je props objekat poslat od Search Bara kroz poziv runMeSubmit
    // Moze da se ispravi greska jednim od onih nacina u Search Baru
        this.setState({images: response.data.results})
    }

    render(){
        return ( 
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar runMeSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
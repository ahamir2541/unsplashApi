import React, { Component } from 'react';
import unsplash from './api/Unsplash'
import SearchBar from './Components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageList from './Components/ImageList/ImageLIst'

 class App extends Component {
  state = {
    images : []
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos',{
      params : {query : term},
    })
    
    this.setState({
      images : response.data.results 
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";


class App extends React.Component{
    state = {images:[]}
    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos',{
            params: {query:term},
            headers: {
                Authorization:
                    'Client-ID kirXU6kICTUwzfNBa1X_TEdfWSi6ht76xyKSnMRhQzo'
            }
        })
this.setState({images:response.data.results});    }
    render() {


    return(
        <div className={'ui container'}>
            <SearchBar onSubmit = {this.onSearchSubmit}/>
            <ImageList images = {this.state.images}/>
        </div>
    )
}}
export default App;
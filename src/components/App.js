import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyADCaGFTDsJAkWVP62mV7wPTO5G0JScOU0';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: 0
    };

    //Make some default search when this app component first is rendered to
    componentDidMount(){
        this.onTermSubmit('peru');
    }

    onTermSubmit = async term =>{
        console.log(term);

        // this is a preconfigured instance of Axios
        // all this right here is a asynchronous API request
        // so in order to interact with it we have to use a promise 
        // or that async a wait syntax 
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: '5',
                key: KEY
            }
        })

        this.setState({ videos: response.data.items, selectedVideo:response.data.items[0]});
    }

    onVideoSelect = (video) =>{
        console.log('From the App!', video);
        this.setState({ selectedVideo : video });
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} />  : '' }
                        </div>
                        <div className="five wide column">       
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
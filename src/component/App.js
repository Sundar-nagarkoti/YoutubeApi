import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../api/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    
    state={video:[],
            selectedVideo:null}
    
    componentDidMount(){
      this.SearchTerm('latest music trending');
    }

    SearchTerm=async (term)=>{
      let VideoList= await YouTube.get('/search',{
            params:{
            q:term
            }
        });
        this.setState({video:VideoList.data.items,
                       selectedVideo:VideoList.data.items[0]
        });
    }

    
    onVideoSelect=(video)=>{
    this.setState({selectedVideo:video});
    }

    render(){
      console.log(this.state.selectedVideo);
      return <div className='ui container'>
          <SearchBar Searched={this.SearchTerm}/>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
          <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className='five wide column'>
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.video}/>
              </div>
            </div>
          </div>
          </div>
    }
}


export default App;
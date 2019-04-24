import React, {Component} from 'react'

import './App.css';
import MovieHeader from './components/movieheader'
import MovieList from './components/MovieList';
import Movie from './components/movie';
import {HashRouter,Route} from 'react-router-dom'

class App extends Component {
  state={movieId: null};
  handleOnTitleChange=(e)=>{
    this.setState({
      title: e
     
    });
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App">
      <HashRouter>
        <div>
          <MovieHeader movieId={this.state.movieId}/>
          <Route exact path ="/" render={()=><MovieList onTitleChange={this.handleOnTitleChange} />}/>
          <Route path ="/movieList" render={()=><MovieList onTitleChange={this.handleOnTitleChange} />}/>
          <Route path ="/movie" render={()=><Movie onTitleChange={this.handleOnTitleChange} />}/>
        </div>
      </HashRouter>
      </div>
    )
  }
  
}

export default App;

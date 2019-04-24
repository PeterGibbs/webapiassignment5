import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import axios from "axios/index";

class MovieList extends Component {
    state={selectedOption: null, movieList: []};
    constructor(props){
        console.log("THE MOVIE LIST: IM ALIVE")
        super(props)
        if(this.props.onTitleChange){
            this.props.onTitleChange(null)

        }
    }
    
    componentWillMount(){
        console.log("Will mount")
    }
    componentWillReceiveProps(newProps){
        console.log("wil lget props")
    }
    shouldComponentUpdate(newProps,newState){
        return true;
    }
    componentDidUpdate(nextProps,nextState){
        console.log("will update")
    }
    
    componentWillUnmount(){
        console.log("unmounted")
    }
    componentDidMount(){
        console.log("mounted")
        
        this.handleOnLoadMovies();
    }
    handleOnLoadMovies=()=>{
        console.log("load movies")
        var headers={"Authorization":'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmYzFkOTZiNDkyOTNmOTk0MDEzZmQwYzUxM2IyZmM5ZWZhMmEyNTgiLCJ1c2VybmFtZSI6IjkxOSIsImlhdCI6MTU1NjA5NTU0N30.b0BJgisVn92ZPXw6-36_pRYMEJHy_jBtV9htjxItSrE',"Content-Type":"application/json"}
        axios.get('https://webapiassignment4.herokuapp.com/movies',{'headers':headers})
        .then((response)=>{
            console.log("movies returned")
            console.log(response.data.movies)
            this.setState({
                movieList: response.data.movies
                
            });
        })
        .catch((error)=> {
            console.log("failed to get movies")
        })

    }
    handleOnChange=(e)=>{
        this.setState({
            selectedOption: e.target.value
        });
        if(this.props.onTitleChange){
            this.props.onTitleChange(e.target.value)
        }
    }
    render(){
        return (
            <div>
                {this.state.movieList.map((movie,index)=>(
                    <div key={movie._id} className="row movietitle">
                    {movie.Title}<input type="radio" value={movie.Title} checked={this.state.selectedOption===movie._id} onChange={(e)=>this.handleOnChange(e)}/>
                    <label>{movie.title}</label>
                    </div>
                ))}
                <div>
                    <LinkContainer to="/movie">
                        <button type="button">Add new movie</button>
                    </LinkContainer>
                </div>
            </div>
        )
    }

}

export default MovieList;
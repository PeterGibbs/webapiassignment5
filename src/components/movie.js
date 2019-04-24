import React, {Component } from 'react';
import axios from "axios/index";
class Movie extends Component {
    constructor(props){
        super(props)
        this.state={movie:null}
        if(this.props.onTitleChange)
            
            this.props.onTitleChange(null)
            
    }
    componentWillReceiveProps(newProps){
        console.log("requesting movie")
        if(newProps.movieId!=null){
            if(newProps.movieId){
                if(newProps.movieId!=''){
                    console.log("load movies")
                    var headers={"Authorization":'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmYzFkOTZiNDkyOTNmOTk0MDEzZmQwYzUxM2IyZmM5ZWZhMmEyNTgiLCJ1c2VybmFtZSI6IjkxOSIsImlhdCI6MTU1NjA5NTU0N30.b0BJgisVn92ZPXw6-36_pRYMEJHy_jBtV9htjxItSrE'}
                    axios.get('https://webapiassignment4.herokuapp.com/movies',{'headers':headers})
                        .then((response)=>{
                            console.log("movies returned")
                            this.setState({
                                movies: response.movies
                                
                            });
                        })
                        .catch((error)=> {
                            console.log("failed to get movies")
                        })
                            }
                        }
        }else{
            this.setState({
                movie:null
            })
        }
        

    }

    render(){
        return (<div>MOVIE DETAIL</div>);
    }

}

export default Movie;
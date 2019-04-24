import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import axios from "axios/index";
class MovieHeader extends Component {
    constructor(props){
        super(props)
        this.state={movie:null}

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
    componentWillMount(){
        console.log("header will mount")
    }

    render(){
        let title=null;
        if(this.state.movie){
            title=this.state.movie.title;
        }
        return (
            
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            The best movie site.
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to ="/movielist">
                            <NavItem eventKey={1}>Movie List</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/movie">
                            <NavItem eventKey={2}>Movie Details</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <header className="App-header">
                    <h1 className="App-title">{this.props.subTitle}</h1>
                </header>
            </div>
        )
    }
}
export default MovieHeader;
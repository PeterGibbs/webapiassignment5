import React, { Component} from 'react';
import { submitReview } from '../actions/movieActions';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class PostReview extends Component {

    constructor(props){
        super(props);

        this.updateDetails = this.updateDetails.bind(this);
        this.postReview = this.postReview.bind(this);
        
        this.state = {
            
            details:{
                id:this.props.movieId,
                rating: 0,
                comments: '',
                
            }
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    postReview(){
        const {dispatch} = this.props;
        dispatch(submitReview(this.state.details));
    }

    render(){
        return (
            <Form horizontal>
                <FormGroup controlId="rating">
                    <Col componentClass={ControlLabel} sm={2}>
                        Rating
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.rating} type="number" placeholder="0" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="comments">
                    <Col componentClass={ControlLabel} sm={2}>
                        Comments
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.comments} type="text" placeholder="Enter your thoughts here" />
                    </Col>
                </FormGroup>

                

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={this.postReview}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieId: state.movie.selectedMovie._id
    }
}

export default connect(mapStateToProps)(PostReview);
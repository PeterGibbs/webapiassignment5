import React, { Component }  from 'react';
import {connect} from "react-redux";
import { Glyphicon, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import {fetchMovie} from "../actions/movieActions";
import PostReview from "../components/postreview"
//support routing by creating a new component

class Movie extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedMovie == null)
            dispatch(fetchMovie(this.props.movieId));
    }

    render() {
        const ActorInfo = ({actors}) => {
            return actors.map((actor, i) =>
                <p key={i}>
                    <b>{actor.ActorName}</b> {actor.CharacterName}
                </p>
            );
        };

        const ReviewInfo = ({reviews}) => {
            return reviews.map((review, i) =>
                <p key={i}>
                <b>{review.ReviewerName}</b> {review.MovieComments}
                    <Glyphicon glyph={'star'} /> {review.Rating}
                </p>
            );
        }

        const DetailInfo = ({currentMovie}) => {
            if (!currentMovie) { // evaluates to true if currentMovie is null
                return <div>Loading...</div>;
            }
            return (
                <Panel>
                    <Panel.Heading>Movie Detail</Panel.Heading>
                    <Panel.Body><Image className="image" src={currentMovie.ImageUrl} thumbnail /></Panel.Body>
                    <ListGroup>
                        <ListGroupItem>{currentMovie.Title}</ListGroupItem>
                        <h2>The actors</h2>
                        <ListGroupItem><ActorInfo actors={currentMovie.Actors} /></ListGroupItem>
                        <h2>The Rating</h2>
                        <ListGroupItem><h4><Glyphicon glyph={'star'} /> {currentMovie.AvgRating} </h4></ListGroupItem>
                    </ListGroup>
                    <h2>What people said about it</h2>
                    <Panel.Body><ReviewInfo reviews={currentMovie.movieReviews} /></Panel.Body>

                    <PostReview movieId={currentMovie._id}></PostReview>
                </Panel>
            );
        };
        return (
            <DetailInfo currentMovie={this.props.selectedMovie} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        selectedMovie: state.movie.selectedMovie,
        movieId: ownProps.match.params.movieId
    }
}

export default withRouter(connect(mapStateToProps)(Movie));
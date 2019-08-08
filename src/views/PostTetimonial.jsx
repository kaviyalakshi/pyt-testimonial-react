import React from "react";
import Rating from "react-rating";

import {
  withRouter
} from 'react-router-dom';

import queryString from 'query-string';
import Axios from "axios";
import Config from "../Config";

class App extends React.Component {
  state = {
    rating: 0,
    formData: {},
    hasError: false
  };

  componentDidMount() {
    if (queryString.parse(this.props.history.location.search).id) {
      Axios.get(Config.apiUrlPrefix + `/testimonials/${queryString.parse(this.props.history.location.search).id}`)
        .then(respone => {
          if (respone.data.data) {
            this.setState({
              formData: respone.data.data
            }, () => {
              Object.keys(this.state.formData).forEach((key) => {
                // document.getElementById('testimonial-form').elements[key].value = this.state.formData[key];
                if (document.getElementById('testimonial-form').elements[key]) {
                  document.getElementById('testimonial-form').elements[key].value = this.state.formData[key];
                }
              })
            })
          }
        }).catch(error => {
          this.setState({
            hasError: true
          })
          console.log(error)
        })
    }
  }

  /**
   * Submits testimonial form
   */
  handleFormSubmit = event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    var object = {};
    formData.forEach(function(value, key) {
      object[key] = value;
    });
    object.star = this.state.rating;
    var json = JSON.stringify(object);
    Axios.post(Config.apiUrlPrefix + '/testimonials', json)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  };

  render() {
    return (
      <div className="row form-container">
        {
          this.state.hasError ? (
            <h1>An error occured while retrieving data</h1>
          ) : (
            <div className="col-md-12">
              <h3>Testimonials Data Collection</h3>
              <br></br>
              <form
                name="data-collection"
                onSubmit={this.handleFormSubmit}
                action="post"
                className="form-group"
                id="testimonial-form"
                style={{ textAlign: "left" }}
              >
                <b>Itinerary ID </b>
                <input type="text" name="itineraryId" className="form-control" />
                <br />
                <b>First Name</b>
                <input type="text" name="firstName" className="form-control" />
                <br />
                <b>Middle Name</b>
                <input type="text" name="middleName" className="form-control" />
                <br />
                <b>Last Name</b>
                <input type="text" name="lastName" className="form-control" />
                <br />
                <b>Departing Date</b>
                <input type="date" name="dateOfDeparture" className="form-control" />
                <br />
                <div className="form-group">
                  <label>Departing City</label>
                  <select name="departureCity" className="form-control">
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Coimbatore</option>
                  </select>
                </div>
                <b>Rating</b><br />
                <Rating rating={this.state.rating} onClick={value => this.setState({ rating: value })} />
                <br /><br />
                <b>Time Of Review </b>
                <input type="date" name="timeOfReview" className="form-control" />
                <br />
                <b>Short Review</b>
                <input type="text" name="shortReview" className="form-control" />
                <br />
                <b>Shortest Review</b>
                <input type="text" name="shortestReview" className="form-control" />
                <br />
                <b>Long Review</b>
                <textarea name="longReview" className="form-control" />
                <br />
                <b>Review</b>
                <input type="text" name="review" className="form-control" />
                <br />
                <b>Fb Link</b>
                <input type="url" name="facebookLink" className="form-control" />
                <br />
                <b>Profile Image</b>
                <input type="url" name="profileImage" className="form-control" />
                <br />
                <b>Cover Image</b>
                <input type="url" name="coverImage" className="form-control" />
                <br />
                <b>Region</b>
                <input type="text" name="region" className="form-control" />
                <br />
                <b>Destination</b>
                <select name="destination">
                  <option>Australia</option>
                  <option>Bali</option>
                  <option>Japan</option>
                </select>
                <br />
                <b>Travel Type</b>
                <input type="text" name="tripType" className="form-control" />
                <br />
                <b>PDF</b>
                <input type="url" name="pdf" className="form-control" />
                <br />
                <b>Sales Operator Email</b>
                <input type="email" name="salesOwnerEmail" className="form-control" />
                <br />
                <b>Journal Links</b>
                <input type="url" name="journalLinks" className="form-control" />
                <br />
                <b>tstmlptos</b>
                <input type="text" name="testimonialPhotos" className="form-control" />
                <br />
                <b>isSOTagged</b>
                <input type="text" name="sotagged" className="form-control" />
                <br />
                <b>coverImageWidth</b>
                <input type="text" name="coverImageWidth" className="form-control" />
                <br />
                <b>coverImageHeight</b>
                <input type="text" name="coverImageHeight" className="form-control" />
                <br />
                <b>centreFaceCroppedCoverImage</b>
                <input
                  type="url"
                  name="centreFaceCroppedCoverImage"
                  className="form-control"
                /> 
                <br />
                <div className="row">
                  <button type="button" className="col-md-4 btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          )
        }
      </div>
    );
  }
}

export default withRouter(App);

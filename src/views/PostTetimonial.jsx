import React from "react";
import Rating from "react-rating";

class App extends React.Component {
  state = {
    rating: 0
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    var object = {};
    formData.forEach(function(value, key) {
      object[key] = value;
    });
    object.star = this.state.rating;
    var json = JSON.stringify(object);
    console.log(json);
  };

  render() {
    return (
      <div className="row form-container">
        <div className="col-md-12">
          <h3>Testimonials Data Collection</h3>
          <br></br>
          <form
            name="data-collection"
            onSubmit={this.handleFormSubmit}
            action="post"
            className="form-group"
            style={{ textAlign: "left" }}
          >
            <b>Itinerary ID </b>
            <input type="text" name="itineraryId" class="form-control" />
            <br />
            <b>First Name</b>
            <input type="text" name="firstName" class="form-control" />
            <br />
            <b>Middle Name</b>
            <input type="text" name="middleName" class="form-control" />
            <br />
            <b>Last Name</b>
            <input type="text" name="lastName" class="form-control" />
            <br />
            <b>Departing Date</b>
            <input type="date" name="DEP_DATE" class="form-control" />
            <br />
            <div className="form-group">
              <label>Departing City</label>
              <select name="DEP_CITY" className="form-control">
                <option>Australia</option>
                <option>Bali</option>
                <option>Japan</option>
              </select>
            </div>
            <b>Rating</b><br />
            <Rating onClick={value => this.setState({ rating: value })} />
            <br /><br />
            <b>Time Of Review </b>
            <input type="date" name="timeOfReview" class="form-control" />
            <br />
            <b>Short Review</b>
            <input type="text" name="shortReview" class="form-control" />
            <br />
            <b>Shortest Review</b>
            <input type="text" name="shortestReview" class="form-control" />
            <br />
            <b>Long Review</b>
            <textarea name="longReview" class="form-control" />
            <br />
            <b>Review</b>
            <input type="text" name="review" class="form-control" />
            <br />
            <b>Fb Link</b>
            <input type="url" name="facebookLink" class="form-control" />
            <br />
            <b>Profile Image</b>
            <input type="file" name="profileImage" class="form-control" />
            <br />
            <b>Cover Image</b>
            <input type="file" name="coverImage" class="form-control" />
            <br />
            <b>Region</b>
            <input type="text" name="region" class="form-control" />
            <br />
            <b>Destination</b>
            <select name="Dest">
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Coimbatore</option>
            </select>
            <br />
            <b>Travel Type</b>
            <input type="text" name="tT_Type" class="form-control" />
            <br />
            <b>PDF</b>
            <input type="file" name="pdf" class="form-control" />
            <br />
            <b>Sales Operator Email</b>
            <input type="email" name="soemail" class="form-control" />
            <br />
            <b>Journal Links</b>
            <input type="url" name="jrnllnks" class="form-control" />
            <br />
            <b>tstmlptos</b>
            <input type="text" name="tstmlptos" class="form-control" />
            <br />
            <b>isSOTagged</b>
            <input type="text" name="isSOTagged" class="form-control" />
            <br />
            <b>coverImageWidth</b>
            <input type="text" name="coverImageWidth" class="form-control" />
            <br />
            <b>coverImageHeight</b>
            <input type="text" name="coverImageHeight" class="form-control" />
            <br />
            <b>centreFaceCroppedCoverImage</b>
            <input
              type="file"
              name="centreFaceCroppedCoverImage"
              class="form-control"
            />
            <br />
            <div className="row">
              <button type="button" className="col-md-4 btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

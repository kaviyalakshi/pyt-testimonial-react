import React from "react";
import "./App.css";
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
    object.rating = this.state.rating;
    var json = JSON.stringify(object);
    console.log(json);
  };

  render() {
    return (
      <div className="row container">
        <div className="col-md-8" style={{ textAlign: "center" }}>
          <h1>Testimonials Data Collection</h1>
          <form
            name="data-collection"
            onSubmit={this.handleFormSubmit}
            action="post"
            style={{ textAlign: "left" }}
          >
            <b>Itinerary ID </b>
            <input type="text" name="itineraryId" class="form-control" />
            <br />
            <b>First Name</b>
            <input type="text" name="fName" class="form-control" />
            <br />
            <b>Middle Name</b>
            <input type="text" name="mName" class="form-control" />
            <br />
            <b>Last Name</b>
            <input type="text" name="lName" class="form-control" />
            <br />
            <b>Departing Date</b>
            <input type="date" name="DEP_DATE" class="form-control" />
            <br />
            <b>Departing City</b>
            <select name="dep_city">
              <option>Australia</option>
              <option>Bali</option>
              <option>Japan</option>
            </select>
            <br />
            <Rating onClick={value => this.setState({ rating: value })} />

            <br />
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
            <input type="url" name="fbLink" class="form-control" />
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
            <select name="Desti">
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Coimbatore</option>
            </select>
            <br />
            <b>Travel Type</b>
            <input type="text" name="ttype" class="form-control" />
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
            <b>_class</b>
            <input type="text" name="_class" class="form-control" />
            <br />
            <button type="submit" name="sub">
              SUBMIT
            </button>
            <button type="cancel" name="can">
              CANCEL
            </button>
            <button type="reset" name="res">
              RESET
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

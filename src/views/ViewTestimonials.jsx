import React from "react";

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
      <div className="row form-container">
        Under Construction
      </div>
    );
  }
}

export default App;

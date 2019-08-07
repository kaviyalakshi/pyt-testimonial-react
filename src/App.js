import React from "react";
import "./App.css";
import {
  HashRouter,
  Route
} from 'react-router-dom';

import Index from './views/ViewTestimonials';
import EditOrAddTestimonial from './views/PostTetimonial';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Index} />
        <Route path="/testimonial" exact component={EditOrAddTestimonial} />
      </HashRouter>
    )
  }
}

export default App;

import React from "react";
import "./App.css";
import {
  HashRouter,
  Route
} from 'react-router-dom';

import Index from './views/ViewTestimonials';
import EditOrAddTestimonial from './views/PostTetimonial';
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <HashRouter>
          <Route path="/" exact component={Index} />
          <Route path="/testimonial" exact component={EditOrAddTestimonial} />
        </HashRouter>
      </ErrorBoundary>
    )
  }
}

export default App;

import React from "react";
import ReactDOM from 'react-dom';
import Axios from "axios";

import {
  Link,
  withRouter
} from 'react-router-dom';

import Config from '../Config';

class App extends React.Component {

  state = {
    testimonials: [],
    hasError: false
  }

  componentDidMount () {
    this.fetchAndSetTestimonials()
  }

  viewOrEditTesimonial = (testimonialId) => {
    this.props.history.push(`/testimonial/?id=${testimonialId}`)
  }

  fetchAndSetTestimonials = () => {
    Axios.get(Config.apiUrlPrefix + '/testimonials')
      .then((response) => {
        this.setState({
          testimonials: response.data
        }, () => {
          window.$('#table').dataTable({
            data: this.state.testimonials,
            columns: [
              {
                title: 'Itinerary ID',
                data: 'itineraryId'
              },
              {
                title: 'Customer Name',
                data: 'firstName'
              },
              {
                title: 'Date of Departure',
                data: 'dateOfDeparture'
              },
              {
                title: 'Destination',
                data: 'destination'
              },
              {
                title: 'Actions',
                data: null
              }
            ],
            columnDefs: [
              {
                targets: 4,
                createdCell: (td, cellData) => {
                  ReactDOM.render(
                    <button className="btn btn-primary" onClick={() => this.viewOrEditTesimonial(cellData.testimonialId)}>View Or Edit</button>,
                    td
                  )
                }
              }
            ]
          });
        })
      }).catch(error => {
        this.setState({
          hasError: true
        })
        console.log(error)
      })
  }

  render() {
    return (
      <div className="container testimonial-container">
        <div className="row" style={{marginBottom: '3rem'}}>
           <h1 className="col-md-8">Testimonals</h1>
           <Link to="/testimonial" className="col-md-2 pull-right btn btn-success">Add Testimonial</Link>
        </div>
        {
          this.state.hasError ? (
            <h1>An error occured while fetching testimonials</h1>
          ) : (
            <table id="table" class="display">
            </table>
          )
        }
      </div>
    );
  }
}

export default withRouter(App);

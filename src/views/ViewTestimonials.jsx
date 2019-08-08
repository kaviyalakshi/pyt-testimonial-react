import React from "react";
import ReactDOM from 'react-dom';
import Axios from "axios";

class App extends React.Component {

  state = {
    testimonials: []
  }

  componentDidMount () {
    this.fetchAndSetTestimonials()
  }

  viewOrEditTesimonial = (testimonialId) => {
    console.log(testimonialId)
  }

  fetchAndSetTestimonials = () => {
    Axios.get('https://swapi.co/api/people')
      .then((response) => {
        this.setState({
          testimonials: response.data.results
        }, () => {
          let dataSet = []
          window.$.each(this.state.testimonials, function (index, value) {
                var tempArray = [];
                for (var o in value) {
                    tempArray.push(value[o]);
                }
                dataSet.push(tempArray);
            })
          window.$('#table').dataTable({
            data: dataSet,
            columns: [
              {
                title: 'Name',
                id: 'name'
              },
              {
                title: 'Height',
                id: 'height'
              },
              {
                title: 'Mass',
                id: 'mass'
              },
              {
                title: 'Hair Color',
                id: 'hair_color'
              },
              {
                title: 'Skin Color',
                id: 'skin_color'
              },
              {
                title: 'Actions',
                data: null
              }
            ],
            columnDefs: [
              {
                targets: 5,
                createdCell: (td, cellData) => {
                  console.log(cellData)
                  ReactDOM.render(
                    <button className="btn btn-primary" onClick={() => console.log('hello')}>View Or Edit</button>,
                    td
                  )
                }
              }
            ]
          });
        })
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="">
        <table id="table" class="display">
        </table>
      </div>
    );
  }
}

export default App;

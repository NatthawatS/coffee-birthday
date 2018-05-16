import React from 'react';
import './Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      day: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',]
    }
  }
  componentDidMount() {
    fetch('http://uinames.com/api/?ext&amount=25')
      .then((Response) => Response.json())
      .then((findrespons) => {
        console.log(findrespons)
        this.setState({ data: findrespons })
      })
  }
  render() {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const da = day.map((item,index)=>(
      <th>{day}</th>
    ))
    return (
        <table >
          <thead>
            <tr>
              <th>SUN</th>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
            </tr>
            {
              this.state.data.map((item, index) => (
                <th key={index} >
                  <img src={item.photo} width="80" ></img><br />
                  {item.name}
                </th >
              ))
            }
          </thead>
        </table>
    );
  }
}

export default Calendar;
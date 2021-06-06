import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import '../../style.scss'

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }

export class LaunchView extends Component {
    state = {
        launch:[]
    }
    componentDidMount = () => {
        const flightNo = this.props.match.params.flight_number
        this.getlaunch(flightNo)
    }

    getlaunch=(flightNo)=>{
        axios.get('https://api.spacexdata.com/v3/launches/'+ flightNo).then((response)=>{
            this.setState({launch:response.data})
        }).catch((error)=>{
            console.log(error)
        })
    }
    render() {        
        return (
            <div className="launches-item">
            <div className="card-item card innerView">
               <h2>{this.state.launch.mission_name}</h2>
               <hr/>
               <div class="meta-data">
                   <span>Flight Number: {this.state.launch.flight_number}</span>
                   <span className="local_date">{this.state.launch.launch_date_local}</span>
                </div>
                <img src="" alt={this.state.launch.mission_name} />
                <p>{this.state.launch.details}</p>
            </div>
            </div>
        )
    }
}

export default withRouter(LaunchView);

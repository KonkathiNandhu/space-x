import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import '../../style.scss'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export class LaunchView extends Component {
    state = {
        launch: {
        links: {
            flickr_images: []
        }
        }
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
  launchAttribute = (title, key) => {
    const value = this.state.launch[key]
    return (
      <div className="attribute">
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    )
  }


  render() {
    const hasImages = this.state.launch.links.flickr_images.length > 0;       
        return (
            <div className="launches-item">
            <div className="card-item card innerView">
               <h2>{this.state.launch.mission_name}</h2>
               <hr/>
               <div class="meta-data">
                   <span>Flight Number: {this.state.launch.flight_number}</span>
                   <span className="local_date">{this.state.launch.launch_date_local}</span>
                </div>
                <div className="slide-container">
        {
          hasImages && (
              <Zoom scale={0.4}>
          {
            this.state.launch.links.flickr_images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>        

          )
        }  
        </div>              
        <p>{this.state.launch.details}</p>
            </div>
            </div>
        )
    }
}

export default withRouter(LaunchView);

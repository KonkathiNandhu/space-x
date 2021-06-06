import React, { Component } from 'react'
import Launchescontainer from '../Components/Launchescontainer';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Launchlist extends Component {
    state = {
        launches : []
    }
    componentDidMount = () => {
        this.getLaunches();
    }
    getLaunches = () =>{
           axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
               this.setState({launches : response.data})
           }).catch((error) => {
              console.log(error);
           })
        }
    launchlist = () =>{
        const launchcomponent =  this.state.launches.map((launch,index)=>{
            const launch_img = launch.links.flickr_images.length == 0 ? 
            "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/EB7EZCJM35F4XCFC7QD3MTPWOY.jpg" :
            launch.links.flickr_images[0];

           return  <Link 
                        key = {"launch_" + index}
                        to = {"/launches/" +launch.flight_number}
               >
               <Launchescontainer 
           key = {"spacex_" + index}
           image={launch_img}
            rocket_name={launch.rocket.rocket_name}
            mission_name={launch.mission_name}
            details={launch.details}
            launch_date_local= {launch.launch_date_local}/>
            </Link>
        })
        return launchcomponent;
    }    
    render() {  
        return (            
            <div className="launches-item">
            {this.launchlist()}
            </div>
        )
    }
}

import React, { Component } from 'react'
import Launchescontainer from '../Components/Launchescontainer'
import axios from 'axios'

export default class Practise extends Component {
    state = {
        launches : []
    }
    componentDidMount=()=>{
        this.getLaunches();
    }
    getLaunches = () => {
        axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
            this.setState(
                {launches:response.data}
            )
        }).catch((error)=>{
             console.log(error);
      })
    }
    launchesList = () =>{
        const launcomponent= this.state.launches.map((launch)=>{
            const launch_img = launch.links.flickr_images.length == 0 ?
            "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/EB7EZCJM35F4XCFC7QD3MTPWOY.jpg" :
            launch.links.flickr_images[0];
        return <Launchescontainer image={launch_img}
                rocket_name={launch.rocket_name}
                mission_name={launch.mission_name}
                launch_date_local= {launch.launch_date_local}
                details={launch.details}
                />
        })
        return launcomponent; 
    }

    render() {
        return (
            <div className="launches-item">
               {this.launchesList()} 
            </div>
        )
    }
}

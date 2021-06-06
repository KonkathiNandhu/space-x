import {React, Component} from 'react'

export default class Launchescontainer extends Component {
    render() {
        return (
<div className="row">

  <div class="card-item card">
    <div class="wrapper">
      <div className="fill"><img src={this.props.image} alt={this.props.title} /></div>
      <div class="header-title">
        <div class="date">
          <span>{this.props.launch_date_local}</span>
        </div>
        <ul class="menu-content">
          <li><span><i className="fas fa-heart"></i>18</span></li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Rocket Name: {this.props.rocket_name}</span>
          <h1 class="title"><a href="#">{this.props.mission_name}</a></h1>
          <p class="text">{this.props.details}</p>
          <a href="#" class="button">Read more</a>
        </div>
      </div>
    </div>
  </div>

        </div>
        )
    }
}

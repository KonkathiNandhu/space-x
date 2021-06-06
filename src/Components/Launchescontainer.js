import {React, Component} from 'react'

export default class Launchescontainer extends Component {
    render() {
        return (

  <div className="card-item card">
    <div className="wrapper">
      <div className="fill"><img src={this.props.image} alt={this.props.title} /></div>
      <div className="header-title">
        <div className="date">
          <span>{this.props.launch_date_local}</span>
        </div>
        <ul className="menu-content">
          <li><span><i className="fas fa-heart"></i>18</span></li>
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Rocket Name: {this.props.rocket_name}</span>
          <h1 className="title"><a href="#">{this.props.mission_name}</a></h1>
          <p className="text">{this.props.details}</p>
          <a href="#" className="button">Read more</a>
        </div>
      </div>
    </div>
  </div>

        )
    }
}

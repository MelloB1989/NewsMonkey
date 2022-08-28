import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
<>
<div className="card" style={this.props.mode === 'light' ? {color: 'black', backgroundColor: 'white', width: "18rem"} : {color: 'white', backgroundColor: '#212529', border: '1px white', width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/newsitem" className="btn btn-primary">Read more</a>
    </div>
</div>
</>
    )
  }
}

export default NewsItem
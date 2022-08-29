import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, img, newsLink} = this.props;
    return (
<>
<div className="card my-3 shadow-lg" style={this.props.mode === 'light' ? {color: 'black', backgroundColor: 'white', width: "18rem"} : {color: 'white', backgroundColor: '#212529', border: '1px white', width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..." height="180px" width="580px"/>
    <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
    </div>
</div>
</>
    )
  }
}

export default NewsItem

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3" style={this.props.mode === 'light' ? {color: 'black', backgroundColor: 'white'} : {color: 'white', backgroundColor: '#212529', border: '1px white'}}>
        <h2><strong>NewsMonkey</strong> - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="Title" description="djbfjkds" mode={this.props.mode}/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Title" description="djbfjkds" mode={this.props.mode}/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Title" description="djbfjkds" mode={this.props.mode}/>
            </div>
        </div>
      </div>
    )
  }
}

export default News

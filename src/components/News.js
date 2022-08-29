import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './assets/load.gif'
import './assets/load-light.gif'

export class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          totalResults: 0,
          articles: []
        };
      }
    
      componentDidMount() {
        this.setState({
          isLoaded: false,
          totalResults: 0,
          articles: []
        });
        let news = document.getElementById("news");
        news === null ? console.log("ok") : news.style.display = "none";
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.category}&apiKey=02371a18470c45d3803d7128227949d4`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                articles: result.articles,
                totalResults: result.totalResults
              });
              console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

  render() {
    
    const {error, isLoaded, totalResults, articles } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className="container my-8"><img alt="Loading GIF" height="80px" width="150px"src={this.props.mode === 'light' ? 'https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' : 'https://i.pinimg.com/originals/42/a8/d4/42a8d4625aeb088c45eba5a84ca36325.gif'}/></div>;
    } else {
        return (
            <div className="container my-3" id="news" style={this.props.mode === 'light' ? {color: 'black', backgroundColor: 'white'} : {color: 'white', backgroundColor: '#212529', border: '1px white'}}>
            <h2><strong>NewsMonkey</strong>{this.props.title}</h2>
            <h5><strong>{totalResults}</strong> news articles.</h5>
            <div className="row">
            {articles.map((article) => {
              return <div className="col-md-4" key={article.url}>
                <NewsItem title={article.title.slice(0, 45)} description={article.description === null ? "" : article.description.slice(0, 84)} img={article.urlToImage === null ? "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png" : article.urlToImage} newsLink={article.url} mode={this.props.mode}/>
              </div>
      })}
            </div>
            </div>
        );
      }
  }
}

export default News

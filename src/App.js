import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Form from './components/Form';

class App extends Component {

  state = {
    news: []
  };

  componentDidMount(){
    
    this.getNews();
  }

  getNews = async (category = 'general') => {

    console.log(category);

    const API_URL = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=7125407e89544ed0bf5c9788ba6c921d`;

    let response = await fetch(API_URL);
    let news = await response.json();

    this.setState({
      news: news.articles
    });
  }

  render() {
    return (
      <Fragment>
        <Header title="Noticias" />

        <div className="container white contenedor-noticias">
          <Form 
            getNews={this.getNews}/>
          <NewsList newsList={this.state.news}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
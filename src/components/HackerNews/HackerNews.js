import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {connect} from "react-redux";
import {requestArticles} from '../../redux/hackerNewsReducer'

class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true }
  }

  componentDidMount(){
    this.props.requestArticles()
  }

  render() {
    console.log('redux props: ', this.props)
    const articles = this.props.hackerNews.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.hackerNews.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToPros = {requestArticles}

export default connect(mapStateToProps, mapDispatchToPros)(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}
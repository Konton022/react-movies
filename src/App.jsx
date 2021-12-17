import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      movies: {},
      isloading : false
    }
  }
  
  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=1d2eba6b&s=dune')
      .then(response => response.json())
      .then(data => this.setState({movies: data}))
  }

  render() {
    return (<>
      <Header />
      <Main movies={this.state.movies}/>
      <Footer />
    </>);
  }
}

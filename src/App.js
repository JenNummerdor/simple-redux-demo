import React, { Component } from 'react';
import Book from './Book';
import { connect } from 'react-redux';
import { getAllBooks } from './redux/store';

class App extends Component {

  displayBooks(){
    if(!this.props.books.length){
      return "Loading.....";
    }
    return this.props.books.map(item => (
      <Book name={item.name} url={item.url} />
    ))
  }

  componentWillMount(){
    this.props.getAllBooks();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Game of thrones books:</h1>
          {this.displayBooks()}
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => ({books})


export default connect(mapStateToProps, { getAllBooks })(App);

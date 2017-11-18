import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnalytics } from './actions/actions';
import './App.css';

class App extends Component {
  componentWillMount(props) {
    this.props.dispatch(getAnalytics());
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(App);

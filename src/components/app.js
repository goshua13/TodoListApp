import React, { Component } from 'react';

import List from './List';

export default class App extends Component {
  state = {
    term: '',
    items: []
  }

  onChange = (e) => {
    this.setState({term: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='jumbotron'>Todo List</h1>
        <form className='container' onSubmit={this.onSubmit}>
         <input 
         className ='form-control'
         placeholder='Tasks...'
         value={this.state.term} 
         onChange={this.onChange}
         />
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

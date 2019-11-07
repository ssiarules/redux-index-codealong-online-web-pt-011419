import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoContainer extends Component {

  render() {
    return(
      <div></div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);

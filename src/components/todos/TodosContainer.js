import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoContainer extends Component {

  render() {
    return(
      <div></div>
    );
  }
};

const mapDispatchToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);

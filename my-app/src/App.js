import React from 'react';
import style from './app.module.css';
import Table from './Components/Table/table';

import { changeValue, changeOption, setWinner, clearField } from './Redux/Actions/actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const App = (props) => {
  return (
    <div className={style.app}>
      <Table {...props} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    option: state.option,
    winId: state.winId
  };
}

const mapActionsToProps = (dispatch) => {
  return {
    changeValue: bindActionCreators(changeValue, dispatch),
    changeOption: bindActionCreators(changeOption, dispatch),
    setWinner: bindActionCreators(setWinner, dispatch),
    clearField: bindActionCreators(clearField, dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
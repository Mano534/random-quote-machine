import React from 'react';
import './App.css';
import Prestional from './component/Prestional'
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  let style = {background : props.bg};
  return (
    <div className="App " style={style}>
      <div className="container">
        <div className="row full align-items-center justify-content-center">
          <Prestional/>
        </div>
      </div>
    </div>
  );
}
let mapStateToProps =(state)=>{
  return {
    bg : state.backgrounds
  }
}
export default connect(mapStateToProps)(App);

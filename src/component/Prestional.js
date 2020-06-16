import React , { Component } from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
class Prestional extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.handleNewQuote();
    }
render (){
    let style = {color : this.props.bg};
    return (
    <div id="quote-box" className="col-lg-6 col-md-9 col-12 p-sm-5 p-2">
        {this.props.ele}
        <div id="author" style={style}  className="text-right pt-2 pb-2 px-sm-5 px-2">-{this.props.author}</div>
        <div className="d-flex  justify-content-space-between w-100">
        <div className="group col-3 d-flex mr-auto">
            <a href={`twitter.com/intent/tweet?text=${this.props.quote}-${this.props.author}`} target="_blank" className="btn  p-1 m-0 btn-primary" id="tweet-quote">tweeter</a>
        </div>
        <button id="new-quote" className="btn btn-outline-primary sm col-6" onClick={this.handleClick}>New Quote</button>
        </div>
    </div>
    )
}
} 
let mapToState = (state)=>{
    return {
        quote : state.quote, 
        author : state.author,
        bg : state.backgrounds,
        ele : state.element
    }
}
let DispatchToState = (dispatch)=>{
    return {
        handleNewQuote : ()=>{dispatch({type : "NEWQUOTE"})}
    }
}
export default connect(mapToState,DispatchToState)(Prestional);
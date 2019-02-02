import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

import './DivList.css';

class DivList extends Component{
    componentDidMount(){
        this.props.getData(30, 100, 300);
    }

    getDivItems = () =>{
        return this.props.data.map(({height, color}, index) => {
            return (
                <div
                    key={index}
                    className="div-item"
                    style={{
                        height: height + 'px',
                        backgroundColor: color,
                        gridRowEnd: `span ${Math.ceil(height / 10)}`
                    }}>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="div-list">
                {this.getDivItems()}
            </div>
        )
    }
}
const mapStateToProps = ({sample}) => {
    return {
        data: sample.data,
        selectedIndex: sample.index
    }
}
export default connect(mapStateToProps, {getData})(DivList);
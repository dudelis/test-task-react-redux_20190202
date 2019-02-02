import React, { Component } from 'react';
import { getSampleData } from '../utils';
import './DivList.css';

class DivList extends Component{
    state = {
        divList: [],
        selected: null
    }

    componentDidMount(){
        this.setState({divList: getSampleData(30, 100, 300)})
    }

    getDivItems = () =>{
        return this.state.divList.map(({height, color}, index) => {
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
export default DivList;
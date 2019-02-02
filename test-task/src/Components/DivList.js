import React, { Component } from 'react';
import { getSampleData } from '../utils';

class DivList extends Component{
    state = {
        divList: [],
        selected: null
    }

    componentDidMount(){
        this.setState({divList: getSampleData(30, 100, 300)})
    }

    getDivItems = () =>{
        return this.state.divList.map((item, index) => {
            return (
                <div
                    key={index}
                    className="div-item"
                    style={{
                        width:'200px',
                        height:item.height + 'px',
                        backgroundColor: item.color
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
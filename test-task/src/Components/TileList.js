import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData, selectItem } from '../actions';
import Tile from './Tile';
import './TileList.css';

class TileList extends Component{
    
    componentDidMount(){
        this.props.getData(30, 100, 300);
    }

    toggle = (e, index) =>{
        if (!this.props.selectedIndex){
            this.props.selectItem(index);
            e.target.classList.add('zoom')
        } else {
            this.props.selectItem(null);
            e.target.classList.remove('zoom')
        }
    }

    getDivItems = () =>{
        return this.props.data.map(({height, color}, index) => {
            return (
                <Tile height={height} color ={color} key={index} toggle={(e) => this.toggle(e, index)} />
            )
        })
    }

    render(){
        return(
            <div className="tile-list">
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
export default connect(mapStateToProps, {getData, selectItem})(TileList);
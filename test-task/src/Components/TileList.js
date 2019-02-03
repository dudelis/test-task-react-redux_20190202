import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Masonry from 'react-masonry-layout';

import { getData, selectItem } from '../actions';
import Tile from './Tile';
import Masonry from './Masonry';

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
            <Masonry brakePoints = {[220, 440, 660, 880, 1100, 1320, 1540]}>
                {this.getDivItems()}
            </Masonry>
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
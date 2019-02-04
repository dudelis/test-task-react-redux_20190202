import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData, selectItem } from '../actions';
import Tile from './Tile';
import Masonry from './Masonry';

class TileList extends Component{
    
    componentDidMount(){
        this.props.getData(30, 100, 300);
        
        if(this.props.match.params.id){
            this.props.selectItem(parseInt(this.props.match.params.id));
        }
    }

    getDivItems = () =>{
        return this.props.data.map(({height, color}, index) => {
            return (
                <Tile
                    height={height}
                    color={color}
                    key={index}
                    index={index}
                />
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
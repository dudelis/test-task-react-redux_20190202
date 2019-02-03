import React, { Component } from 'react';
import posed from 'react-pose';

import './Tile.css';


const transition = {
    duration: 1000,
    ease: [0.08, 0.69, 0.2, 0.99]
  };

const Div = posed.div({
    init: {
      position: 'static',
      width: '100%',
      height: '100%',
      transition,
      flip: true
    },
    zoom: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transition,
      flip: true
    }
  });
  const Frame = posed.div({
    zoom: {
      applyAtStart: { display: 'block' },
      opacity: 0.6
    },
    init: {
      applyAtEnd: { display: 'none' },
      opacity: 0
    }
  });

class Tile extends Component {
    state = {isZoomed: false}

    zoomIn = () => {
        this.setState({isZoomed: true});
    }

    zoomOut = () => {
        this.setState({isZoomed: false});
    }

    clickHandler = () =>{
        console.log(this.state);
        this.state.isZoomed ? this.zoomOut() : this.zoomIn()
    }
    render(){
        const { isZoomed } = this.state;
        const {height, color, ...props} = this.props;
        const pose = isZoomed ? 'zoom' : 'init';      

        return(
            <div
                className="tile-item"
                onClick = {this.clickHandler}
                style={{
                    height: height + 'px',
                    backgroundColor: color
                }}>
                <Frame className="frame" pose={pose} {...props}/>
                <Div pose={pose} {...props} style={{backgroundColor: color}}/>                
            </div>
        )
    }
}

export default Tile;
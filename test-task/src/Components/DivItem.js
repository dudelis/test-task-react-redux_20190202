import React, { Component } from 'react';
import posed from 'react-pose';

import './DivItem.css';


const transition = {
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
  };

const Div = posed.div({
    init: {
      position: 'static',
      width: 'auto',
      height: 'auto',
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


class DivItem extends Component {
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
                className="div-item"
                onClick = {this.clickHandler}
                style={{
                    height: height + 'px',
                    backgroundColor: color,
                    gridRowEnd: `span ${Math.ceil(height / 10)}`
                }}>
                <Div pose={pose} {...props} style={{backgroundColor: color}}/>
            </div>
        )
    }
}

export default DivItem;
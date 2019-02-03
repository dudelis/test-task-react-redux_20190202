import React, { Component } from 'react';

import './Masonry.css';

class Masonry extends Component{
    constructor(props){
		super(props);
		this.state = {columns: 1};
    }
    
    componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
    }
    
    getColumns(w){
		return this.props.brakePoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
        }, this.props.brakePoints.length);
    }
    
    onResize= () => {
        console.log(this.refs.Masonry.offsetWidth);
        const columns = this.getColumns(this.refs.Masonry.offsetWidth);
        console.log(columns);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}		
    }
    mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
    }
    
    render(){
        return (
            <div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return <div className="tile-wrapper" key={i} >{child}</div>
							})}
						</div>
					)
				})}
			</div>
        )
    }
}

export default Masonry;
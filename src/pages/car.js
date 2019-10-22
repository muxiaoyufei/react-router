import React, {Component} from 'react';
import Tabbar from '../components/tabbar';

class Car extends Component {
	constructor(props){
		super(props)
		this.state={
		
		}
	}
	
	render(){
		return(
			<div className="car">
				<img className="bg" src={require('../static/images/car.jpg')} alt=""/>
				{/*<Tabbar /> 未修改为高阶组价时的写法*/}   
			</div>
		)
	}
}
export default Tabbar(Car);
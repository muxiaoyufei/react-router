import React, {Component} from 'react';
import Tabbar from '../components/tabbar';

class User extends Component {
	constructor(props){
		super(props)
		this.state={
		
		}
	}
	
	render(){
		return(
			<div className="user">
				<img className="bg" src={require('../static/images/user.jpg')} alt=""/>
				{/*<Tabbar /> 未修改为高阶组价时的写法*/}   
			</div>
		)
	}
}
export default Tabbar(User);